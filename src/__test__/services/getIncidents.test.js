import { callApi, getIncidents } from "../../services/getIncidents";

describe("Probar Async/Await", () => {
  test("Realizar una petición a una API callApi", async () => {
    const urlParams = "page=1&per_page=10&query=bike&occurred_before=1598245200&occurred_after=1597726800";

    const data = await callApi(urlParams);
    expect(data.bikes.length).toBeGreaterThanOrEqual(0);
  });

  test("Realizar una petición a una API getIncidents", async () => {
    const params = {
      page: 1,
      per_page: 10,
      keyword: 10,
      occurred_before: "1698034949",
      occurred_after: "1598034943",
    };
    let result = await getIncidents(params);
    expect(result.bikes.length).toBeGreaterThanOrEqual(0);
  });
});
