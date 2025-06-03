import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    type = 'button',
}) => {
    const baseClasses = 'font-medium rounded-md transition-all duration-300 inline-flex items-center justify-center';

    const variantClasses = {
        primary: 'bg-primary hover:bg-primary-dark text-white shadow-sm hover:shadow-md',
        secondary: 'bg-white text-primary border border-primary hover:bg-primary/5',
        outline: 'bg-transparent border border-white text-white hover:bg-white/10',
    };

    const sizeClasses = {
        sm: 'text-sm px-3 py-1.5',
        md: 'text-base px-4 py-2',
        lg: 'text-lg px-6 py-3',
    };

    return (
        <button
            type={type}
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;