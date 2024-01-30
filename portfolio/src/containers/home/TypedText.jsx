import React, { useState, useEffect } from 'react';
import './styles.css';

const TypedText = ({ items, delay }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            let newIndex = currentIndex;

            if (!isDeleting && displayText.length < items[currentIndex].length) {
                setDisplayText((prevText) => prevText + items[currentIndex][displayText.length]);
            } else if (isDeleting && displayText.length > 0) {
                setDisplayText((prevText) => prevText.slice(0, -1));
            } else if (!isDeleting && displayText.length === items[currentIndex].length) {
                setIsDeleting(true);
            } else if (isDeleting && displayText.length === 0) {
                setIsDeleting(false);
                newIndex = (currentIndex + 1) % items.length;
            }

            setCurrentIndex(newIndex);
        }, isDeleting ? delay / 2 : delay);

        return () => clearTimeout(timer);
    }, [displayText, currentIndex, isDeleting, items, delay]);

    return (
        <span className="typed-text">
            {displayText}
        </span>
    );
};

export default TypedText;
