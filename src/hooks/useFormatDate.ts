import { useState, useEffect } from "react";
import { format } from "date-fns";

export const useFormatDate = (date: number) => {
	const [formatDate, setDate] = useState("");

	useEffect(() => {
		const newDate = format(new Date(date * 1000), "EEEE, MMM d, yyyy.");
    setDate(newDate);
	}, [date]);

	return [formatDate];
};
