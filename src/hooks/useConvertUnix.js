import { useState, useEffect } from 'react';

const useConvertUnix = (date1, date2) => {
  const [unixStart, setUnixStart] = useState(0);
  const [unixEnd, setUnixEnd] = useState(0);

  useEffect(() => {
    //date Start
    const DATE = new Date(date1);
    setUnixStart(DATE.getTime() / 1000);

    //date End
    const DATE2 = new Date(date2);
    setUnixEnd(DATE2.getTime() / 1000);
  }, [date1, date2]);
  return [unixStart, unixEnd];
};

export default useConvertUnix;
