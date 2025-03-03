export function Button1({ children, onClick, className }) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-md font-semibold ${className}`}
        >
            {children}
        </button>
    );
}
