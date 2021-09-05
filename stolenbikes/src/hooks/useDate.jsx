import { useEffect, useState } from 'react'

const useDate = (stoleDate, reportDate) => {
  const [dateStolen, setDateStolen] = useState('');
  const [dateStolenReport, setDateStolenReport] = useState('');

  useEffect(() => {
    const dateStolen = new Date(Number(stoleDate) * 1000);
    const dateStolenReport = new Date(Number(reportDate) * 1000);

    setDateStolen(getHours(dateStolen));
    setDateStolenReport(getHours(dateStolenReport));

  }, [stoleDate, reportDate])

  const getHours = (date) => {
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const formattedTime = date.toDateString() + ' at ' + hours + ':' + minutes.substr(-2) + `${hours >= 12 ? ' pm' : ' am'}`;
    return formattedTime;
  }

  return { dateStolen, dateStolenReport }
}

export default useDate;