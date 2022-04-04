import { fromJS } from "immutable";
import reducers from "../../reducers/bike";

test("set object", async () => {
  const state = fromJS({});
  const newState = reducers(state, { key: ['bike'], payload: { item: "bike" } });
  expect(newState.get('bike')).toEqual({ item: "bike" });
});


test("filter bike", async () => {
  const state = fromJS({ bikes: {} })
    .setIn(['bikes', 'all'], [{ "title": 'abc' }])
    .setIn(['search', 'title'], 'd');
  const newState = reducers(state, { type: "FILTER" });
  expect(newState.getIn(['bikes', 'filter'])).toEqual([]);
});


