import React, { useState, useEffect } from "react";

const Timer = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date("July 12, 2025 00:00:00 GMT+00:00"); // Target date: July 12, 2025
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
    <div className="w-full px-6 py-8 flex flex-col items-center bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 rounded-lg shadow-xl">
      <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 mb-6 text-center drop-shadow-lg">
        Countdown to ICICCT 2025
      </h2>
      <div className="flex flex-wrap justify-center gap-8 text-center">
        {/* Days */}
        <div className="flex flex-col items-center">
          <span className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 drop-shadow-lg">
            {timeLeft.days}
          </span>
          <p className="text-gray-900 text-lg md:text-xl font-semibold">Days</p>
        </div>
        <span className="text-6xl md:text-7xl font-bold text-purple-900 drop-shadow-lg">
          :
        </span>
        {/* Hours */}
        <div className="flex flex-col items-center">
          <span className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-green-500 drop-shadow-lg">
            {timeLeft.hours}
          </span>
          <p className="text-gray-900 text-lg md:text-xl font-semibold">
            Hours
          </p>
        </div>
        <span className="text-6xl md:text-7xl font-bold text-purple-900 drop-shadow-lg">
          :
        </span>
        {/* Minutes */}
        <div className="flex flex-col items-center">
          <span className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 drop-shadow-lg">
            {timeLeft.minutes}
          </span>
          <p className="text-gray-900 text-lg md:text-xl font-semibold">
            Minutes
          </p>
        </div>
        <span className="text-6xl md:text-7xl font-bold text-purple-900 drop-shadow-lg">
          :
        </span>
        {/* Seconds */}
        <div className="flex flex-col items-center">
          <span className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 drop-shadow-lg">
            {timeLeft.seconds}
          </span>
          <p className="text-gray-900 text-lg md:text-xl font-semibold">
            Seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
