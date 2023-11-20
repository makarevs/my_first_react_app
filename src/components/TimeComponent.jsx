import React, { useState, useEffect } from 'react';

function TimeComponent({ delay = 0, every = 2000 }) {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const startTimer = () => {
            return setInterval(() => {
                setCurrentTime(new Date());
            }, every);
        }

        const timerId = setTimeout(startTimer, delay);
        
        //cleanup function
        return () => {
            clearTimeout(timerId);
        };
    }, [delay, every]);   // adding every to the dependency array
   
    return (
        <p>Right now it is {currentTime.toLocaleTimeString()}</p>
    );
}

export default TimeComponent;