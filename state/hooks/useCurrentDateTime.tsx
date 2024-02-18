import { useState, useEffect } from "react";

interface DateTime {
  date: string;
  time: string;
}

const useCurrentDateTime = (): DateTime => {
  const [dateTime, setDateTime] = useState<DateTime>({ date: "", time: "" });

  useEffect(() => {
    const updateDateTime = () => {
      const currentDate = new Date();
      const date = `${currentDate.getDate().toString().padStart(2, "0")}/${(
        currentDate.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}/${currentDate.getFullYear()}`;
      const time = `${currentDate
        .getHours()
        .toString()
        .padStart(2, "0")}:${currentDate
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
      setDateTime({ date, time });
    };

    updateDateTime(); // Initialize immediately
    const intervalId = setInterval(updateDateTime, 60000); // Update every minute to keep time current

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return dateTime;
};

export default useCurrentDateTime;
