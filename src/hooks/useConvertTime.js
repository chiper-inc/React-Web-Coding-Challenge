import { useState, useEffect } from 'react';

const useConvertTime = (unixTime) => {
  const [completeTime, setCompleteTime] = useState();

  useEffect(() => {
    const date = new Date(unixTime * 1000);
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const fullDate = `${day}/${month}/${year}`;
    setCompleteTime(fullDate);
  }, []);
  return [completeTime];
};

export default useConvertTime;

