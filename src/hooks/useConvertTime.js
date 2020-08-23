import { useState, useEffect } from 'react';

const useConvertTime = (unixTime) => {
  const [completeTime, setCompleteTime] = useState();

  useEffect(() => {
    const date = new Date(unixTime * 1000);
    const fullDate = date.toLocaleString();
    setCompleteTime(fullDate);
  }, []);
  return [completeTime];
};

export default useConvertTime;

