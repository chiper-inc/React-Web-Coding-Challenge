import { useRef } from "react";
import { useGetBikes } from "../../hooks/useGetBikes";
import { Wrapper, Input, Button, Total } from './Search.styles';

export const Search = ({setQuery}) => {
	const form = useRef(null);
	const { count } = useGetBikes();

	const handleSearch = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const query = formData.get('inputSearch');
		setQuery(query);
	}

	return (
		<Wrapper>
			<form action="/" className="form" ref={form}>
				<label htmlFor="inputSearch"></label>
				<Input type="text" name="inputSearch" placeholder="Search"/>
				<Button onClick={handleSearch}>
					<i className="fa-solid fa-magnifying-glass"></i>
					Search
				</Button>
			</form>
			<Total>TOTAL: {count}</Total>
		</Wrapper>
	)
}
