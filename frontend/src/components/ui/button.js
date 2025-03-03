import React from 'react';

const Button = ({ children, onClick, className = '' }) => {
    return (
        <button
            className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export { Button };  // ✅ Named Export

