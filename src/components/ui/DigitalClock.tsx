"use client";

import { useState, useEffect } from "react";

export default function DigitalClock() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            // Format to IST (India Standard Time)
            const options: Intl.DateTimeFormatOptions = {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
            };
            setTime(now.toLocaleTimeString('en-US', options));
        };

        updateClock(); // Initial call
        const intervalId = setInterval(updateClock, 1000);

        return () => clearInterval(intervalId);
    }, []);

    if (!time) return null;

    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <h3 className="text-sm font-bold tracking-widest uppercase text-zinc-500 mb-2">Local Time (IST)</h3>
            <div className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white tabular-nums drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                {time}
            </div>
        </div>
    );
}
