import React, { useEffect, useState } from "react";

const CountDown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2023-08-01") - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor(((difference / 1000) * 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }
    return (
      <span
        className="text-[16px] text-[#475ad2] p-1 mr-3 font-semibold"
        key={interval}
      >
        {timeLeft[interval]}
        {interval}
        {""}
      </span>
    );
  });

  return (
    <div>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="text-[red] text-[25px] p-2"> Times Up</span>
      )}
    </div>
  );
};

export default CountDown;
