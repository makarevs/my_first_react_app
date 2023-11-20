import React, { useState, useEffect } from 'react';

function TimeComponent() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        
        // cleanup function
        return () => {
            clearInterval(timer);
        };
    }, []);
    
    return (
        <p> Right now it is {currentTime.toLocaleTimeString()} </p>
    );
}

export default TimeComponent;