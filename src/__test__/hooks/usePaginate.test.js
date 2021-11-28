import { renderHook, act } from "@testing-library/react-hooks";
import { usePaginate } from "../../hooks/usePaginate";

test("render hook usePaginate", () => {
  const { result } = renderHook(() => usePaginate());

  act(() => {
    const event = {};
    const value = 1;
    result.current.handleChangePage(event, value);
  });
});
