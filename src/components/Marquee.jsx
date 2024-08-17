import React, { useEffect, useState } from "react";
import MiniLogo from "../assets/MiniLogo.png";
import MarqueeComponent from "../components/magicui/marquee"
const Marquee = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
      const formattedTime = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setDate(formattedDate);
      setTime(formattedTime);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-sec text-white overflow-hidden whitespace-nowrap uppercase tracking-[4.4px]">
      <div className="flex animate-scroll">
        <MarqueeComponent className="flex items-center" pauseOnHover>
          <div className="flex items-center">
            <div className="text-[22px] font-thin mx-8">
              Date : {date}
            </div>
            <div className="text-[22px] font-thin mx-8">
              Time : {time}
            </div>
            <div className="text-[22px] font-thin mx-8">
              Open All Day 11AM to 11PM
            </div>
            <div className="text-[22px] font-thin mx-8">
              Celebrate Everydays
            </div>
            <img className="py-2 mx-8" src={MiniLogo} alt="Mini Logo" />
          </div>
        </MarqueeComponent>
        {/* <div className="flex items-center">
          <span className="text-[22px] font-thin mx-8">
            Date : {date}
          </span>
          <span className="text-[22px] font-thin mx-8">
            Time : {time}
          </span>
          <span className="text-[22px] font-thin mx-8">
            Open All Day 11AM to 11PM
          </span>
          <span className="text-[22px] font-thin mx-8">
            Celebrate Everydays
          </span>
          <img className="py-2 mx-8" src={MiniLogo} alt="Mini Logo" />
        </div> */}
      </div>
      <div className="h-1 w-full bg-black"></div>
    </div>
  );
};

export default Marquee;
