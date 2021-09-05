import useFilterForDate from "./useFilterForDate";

const useFilterStolen = (filter, query, setBikes, bikes) => {
  useFilterForDate(filter, query.data, setBikes);
  let title = filter["title"].toLowerCase();
  const hasTitle = !!title.length;
  // alert(JSON.stringify())
  if (!query.isSuccess) {
    return;
  }
  if (hasTitle) {
    setBikes(
      bikes.filter((stolen) => stolen.title.toLowerCase().includes(title))
    );
  }
};

export default useFilterStolen;
