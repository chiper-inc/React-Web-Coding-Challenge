import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

export const filterForDate = (
  { dateFrom, dateTo, isFiltering, isEdit },
  data = {},
  setBikes
) => {
  if (!isFiltering) {
    return;
  }

  if (data.bikes.length && !isEdit) {
    let bikes = data.bikes.filter((stolen) =>
      dayjs(dayjs.unix(stolen.date_stolen).format("YYYY-MM-DD")).isBetween(
        dateFrom,
        dayjs(dateTo)
      )
    );
    setBikes(bikes);
  }
};

export const filterBikes = (filter, query, setBikes, bikes) => {
  let title = filter["title"].toLowerCase();
  const hasTitle = !!title.length;
  if (!query.isSuccess) {
    return;
  }
  if (hasTitle) {
    let filtered = bikes.filter((stolen) =>
      stolen.title.toLowerCase().includes(title)
    );
    if (filtered.length) {
      setBikes(filtered);
    } else {
      alert("There are no cases with this title, try another");
    }
  } else {
    setBikes(bikes);
  }
};
