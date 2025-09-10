export const CustomLogo = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="logoGrad1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#E0E7FF" />
            </linearGradient>
            <linearGradient id="logoGrad2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
        </defs>
        <path
            d="M20.2,4.2C22.5,1.7,25.5,1.7,27.8,4.2L43.8,20.2C46.3,22.5,46.3,25.5,43.8,27.8L27.8,43.8C25.5,46.3,22.5,46.3,20.2,43.8L4.2,27.8C1.7,25.5,1.7,22.5,4.2,20.2L20.2,4.2Z"
            fill="url(#logoGrad2)"
        />
        <path
            d="M4.2,20.2L20.2,4.2C22.5,1.7,25.5,1.7,27.8,4.2L27.8,27.8C25.5,30.3,22.5,30.3,20.2,27.8L4.2,20.2Z"
            fill="url(#logoGrad1)"
        />
    </svg>
);
