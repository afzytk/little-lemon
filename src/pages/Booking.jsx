import { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../api/api";

const initializeTimes = () => fetchAPI(new Date());

const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(new Date(action.date));
    default:
      return state;
  }
};

const validateField = (name, value) => {
  switch (name) {
    case "date":
      return !value ? "Please select a date." : "";
    case "time":
      return !value ? "Please select a time." : "";
    case "guests":
      if (!value) return "Please enter number of guests.";
      if (value < 1 || value > 10)
        return "Please enter a number between 1 and 10.";
      return "";
    default:
      return "";
  }
};

const Booking = () => {
  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    [],
    initializeTimes,
  );

  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
    requests: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // real time validation
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));

    if (name === "date") {
      dispatch({ type: "UPDATE_TIMES", date: value });
    }
  };

  // stepper handlers
  const decrementGuests = () => {
    const newVal = Math.max(1, form.guests - 1);
    setForm((prev) => ({ ...prev, guests: newVal }));
    const error = validateField("guests", newVal);
    setErrors((prev) => ({ ...prev, guests: error }));
  };

  const incrementGuests = () => {
    const newVal = Math.min(10, form.guests + 1);
    setForm((prev) => ({ ...prev, guests: newVal }));
    const error = validateField("guests", newVal);
    setErrors((prev) => ({ ...prev, guests: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate all fields on submit
    const newErrors = {
      date: validateField("date", form.date),
      time: validateField("time", form.time),
      guests: validateField("guests", form.guests),
    };

    // filter out empty errors
    const hasErrors = Object.values(newErrors).some((err) => err !== "");
    setErrors(newErrors);
    if (hasErrors) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const success = submitAPI(form);
      setIsSubmitting(false);
      if (success) {
        setShowSuccess(true);
        setForm({ date: "", time: "", guests: 1, occasion: "", requests: "" });
      }
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#EDEFEE] pt-16">
      {/* Page header */}
      <div className="bg-[#495E57] px-10 py-10">
        <Link
          to="/"
          className="text-white flex items-center gap-2 mb-4 hover:text-[#F4CE14] transition-colors duration-200 w-fit"
        >
          ← Back to Home
        </Link>
        <h1 className="text-[#F4CE14] text-5xl font-medium">Reserve a table</h1>
        <p className="text-white mt-2 text-sm">
          Book your spot at Little Lemon, Chicago
        </p>
      </div>

      {/* Form card */}
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-sm px-8 py-10 my-10">
        <BookingForm
          form={form}
          errors={errors}
          availableTimes={availableTimes}
          onChange={handleChange}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          onDecrement={decrementGuests}
          onIncrement={incrementGuests}
        />
      </div>

      {/* Success popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Booking confirmed!</h2>
            <p className="text-gray-500 text-sm mb-6">
              Your table has been reserved at Little Lemon. We look forward to
              seeing you!
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="w-full bg-[#F4CE14] hover:bg-yellow-400 font-semibold py-3 rounded-lg transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Booking;
