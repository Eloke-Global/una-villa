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
    <div className="bg-sec h-10 text-white overflow-hidden border-b border-[#9c9481] whitespace-nowrap uppercase tracking-[4.4px]">
      <div className="flex text-sm lg:text-18px">
        <MarqueeComponent className="flex items-center mr-0 pr-0" pauseOnHover>
          <div className="flex items-center gap-2">
            <div className="font-thin">
              Date : {date}
            </div>
            <div>.</div>
            <div className="font-thin">
              Time : {time}
            </div>
            <div>.</div>
            <div className="font-thin">
              Open All Day 11AM to 11PM
            </div>
            <div>.</div>
            <div className="font-thin">
              Celebrate Everydays
            </div>
            <div>.</div>
            <img className="h-6 pr-1" src={MiniLogo} alt="" />
            <div>.</div>
            {/* <img className="pr-4 py-0 lg:h-8 h-8" src={MiniLogo} alt="Mini Logo" /> */}
          </div>
        </MarqueeComponent>
        {/* <div className="flex items-center">
          <span className="text-[22px] font-thin">
            Date : {date}
          </span>
          <span className="text-[22px] font-thin">
            Time : {time}
          </span>
          <span className="text-[22px] font-thin">
            Open All Day 11AM to 11PM
          </span>
          <span className="text-[22px] font-thin">
            Celebrate Everydays
          </span>
          <img className="py-2" src={MiniLogo} alt="Mini Logo" />
        </div> */}
      </div>
      <div className="h-1 w-full bg-black"></div>
    </div>
  );
};

export default Marquee;
