import React, { useState, useEffect } from "react";

const Timer = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date("August 8, 2024 00:00:00 GMT+00:00"); // Target date: August 8, 2024
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days,
        hours,
        minutes,
        seconds,
      };
    } else {
      // Timer has expired
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full md:w-3/4 mx-auto px-4 flex justify-center items-center bg-gradient-to-l from-pink-500 via-rgb-247-0-104 to-indigo-900">
      <div className="flex justify-center gap-4 px-2 py-4 text-center md:text-4xl">
        <div>
          <span className="font-bold text-white">{timeLeft.days}</span>
          <p className="text-gray-200 text-2xl">Days</p>
        </div>
        <span className="text-2xl text-white font-bold">:</span>
        <div>
          <span className="font-bold text-white">{timeLeft.hours}</span>
          <p className="text-gray-200 text-2xl">Hours</p>
        </div>
        <span className="text-2xl text-white font-bold">:</span>
        <div>
          <span className="font-bold text-white">{timeLeft.minutes}</span>
          <p className="text-gray-200 text-2xl">Minutes</p>
        </div>
        <span className="text-2xl text-white font-bold">:</span>
        <div>
          <span className="font-bold text-white">{timeLeft.seconds}</span>
          <p className="text-gray-200 text-2xl">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
