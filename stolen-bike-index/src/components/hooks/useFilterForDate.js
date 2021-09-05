import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

const useFilterForDate = (
  { dateFrom, dateTo, isFiltering, isEdit },
  data = {},
  setBikes
) => {
  if (!isFiltering) {
    return;
  }

  if (data.bikes.length && !isEdit) {
    let bikes = data?.bikes.filter((stolen) =>
      dayjs(dayjs.unix(stolen.date_stolen).format("YYYY-MM-DD")).isBetween(
        dateFrom,
        dayjs(dateTo)
      )
    );
    setBikes(bikes);
  }
};

export default useFilterForDate;
