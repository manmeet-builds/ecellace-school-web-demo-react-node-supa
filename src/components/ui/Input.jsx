export const Input = ({ label, type = 'text', value, onChange, required, error }) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <input 
        type={type} 
        value={value}
        onChange={onChange}
        required={required}
        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${error ? 'border-red-500' : ''}`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};
