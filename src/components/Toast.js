
import React, { useEffect, useState } from 'react';
import './Toast.css';

const Toast = ({ message, onClose }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Show toast with animation
        setVisible(true);

        // Auto-close after 3 seconds
        const timer = setTimeout(() => {
            setVisible(false);
            setTimeout(onClose, 300); // Wait for the animation to finish before closing
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`toast ${visible ? 'show' : ''}`}>
            {message}
        </div>
    );
};

export default Toast;
