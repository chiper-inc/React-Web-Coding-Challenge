import { useState, useEffect } from 'react';

const useConvertUnix = (date1, date2) => {
  const [unixStart, setUnixStart] = useState(0);
  const [unixEnd, setUnixEnd] = useState(0);

  useEffect(() => {
    //date Start
    const NUMBER = new Date(date1);
    const UNIX = NUMBER.getTime() / 1000;
    const DATA = UNIX.toFixed(0);
    const DATE = Number(DATA);
    setUnixStart(DATE);

    //date End
    const NUMBER2 = new Date(date2);
    const UNIX2 = NUMBER2.getTime() / 1000;
    const DATA2 = UNIX2.toFixed(0);
    const DATE2 = Number(DATA2);
    setUnixEnd(DATE2);
  }, [date1, date2]);
  return [unixStart, unixEnd];
};

export default useConvertUnix;
