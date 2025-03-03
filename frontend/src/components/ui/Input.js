export function Input({ type, value, onChange, className, placeholder }) {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            className={`border border-gray-300 p-2 rounded-md w-full ${className}`}
            placeholder={placeholder}
        />
    );
}
