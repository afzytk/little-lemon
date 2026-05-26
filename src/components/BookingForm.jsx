const BookingForm = ({
  form,
  errors,
  availableTimes,
  onChange,
  onSubmit,
  isSubmitting,
  onDecrement,
  onIncrement,
}) => {
  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      {/* Date */}
      <div className="flex flex-col gap-1">
        <label htmlFor="date" className="font-semibold text-sm">
          Choose date <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={form.date}
          onChange={onChange}
          min={new Date().toISOString().split("T")[0]}
          className={`border rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-[#F4CE14] ${
            errors.date ? "border-red-400" : "border-gray-300"
          }`}
        />
        {errors.date && (
          <span className="text-red-500 text-xs">{errors.date}</span>
        )}
      </div>

      {/* Time */}
      <div className="flex flex-col gap-1">
        <label htmlFor="time" className="font-semibold text-sm">
          Choose time <span className="text-red-500">*</span>
        </label>
        <select
          id="time"
          name="time"
          value={form.time}
          onChange={onChange}
          className={`border rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-[#F4CE14] ${
            errors.time ? "border-red-400" : "border-gray-300"
          }`}
        >
          <option value="">Select a time</option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.time && (
          <span className="text-red-500 text-xs">{errors.time}</span>
        )}
      </div>

      {/* Guests stepper */}
      <div className="flex flex-col gap-1">
        <label className="font-semibold text-sm">
          Number of guests <span className="text-red-500">*</span>
        </label>
        <div
          className={`flex items-center justify-between border rounded-lg p-3 ${
            errors.guests ? "border-red-400" : "border-gray-300"
          }`}
        >
          <button
            type="button"
            onClick={onDecrement}
            className="w-8 h-8 rounded-full bg-[#EDEFEE] hover:bg-gray-200 font-bold text-lg flex items-center justify-center transition-colors"
          >
            −
          </button>
          <span className="font-semibold text-base">{form.guests}</span>
          <button
            type="button"
            onClick={onIncrement}
            className="w-8 h-8 rounded-full bg-[#EDEFEE] hover:bg-gray-200 font-bold text-lg flex items-center justify-center transition-colors"
          >
            +
          </button>
        </div>
        {errors.guests && (
          <span className="text-red-500 text-xs">{errors.guests}</span>
        )}
      </div>

      {/* Occasion */}
      <div className="flex flex-col gap-1">
        <label htmlFor="occasion" className="font-semibold text-sm">
          Occasion
        </label>
        <select
          id="occasion"
          name="occasion"
          value={form.occasion}
          onChange={onChange}
          className="border border-gray-300 rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-[#F4CE14]"
        >
          <option value="">Select occasion (optional)</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Business">Business</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Special requests */}
      <div className="flex flex-col gap-1">
        <label htmlFor="requests" className="font-semibold text-sm">
          Special requests
        </label>
        <textarea
          id="requests"
          name="requests"
          value={form.requests}
          onChange={onChange}
          rows={3}
          placeholder="Dietary requirements, allergies, etc."
          className="border border-gray-300 rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-[#F4CE14] resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-[#F4CE14] hover:bg-yellow-400 disabled:opacity-60 disabled:cursor-not-allowed font-semibold py-3 rounded-lg mt-2 flex items-center justify-center gap-2 transition-colors"
      >
        {isSubmitting ? (
          <>
            <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
            Submitting...
          </>
        ) : (
          "Make your reservation"
        )}
      </button>
    </form>
  );
};

export default BookingForm;
