import { useEffect, useState } from "react";

const LiveRecordCounts = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-gray-700 font-medium">진행시간: {formatTime(elapsedTime)}</div>
  );
}

export default LiveRecordCounts;
