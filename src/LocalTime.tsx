
"use client";

import { useEffect, useState } from "react";

export default function LocalTime() {
  const [times, setTimes] = useState({
    local: "",
    ist: "",
    zone: "",
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();

      const zone =
        Intl.DateTimeFormat().resolvedOptions().timeZone;

      const local = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);

      const ist = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);

      setTimes({ local, ist, zone });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!times.local) return <span>Local time · IST</span>;

  return (
    <div className="local-time">
      <div>
        <span className="time-label">
          {times.zone.replace("_", " ")}
        </span>
        <span className="time-value">{times.local}</span>
      </div>

      <span className="time-divider">·</span>

      <div>
        <span className="time-label">India · IST</span>
        <span className="time-value">{times.ist}</span>
      </div>
    </div>
  );
}
