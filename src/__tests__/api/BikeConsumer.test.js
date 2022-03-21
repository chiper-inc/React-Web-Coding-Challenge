
import BikeConsumer from "../../api/BikeConsumer";
import api from "../../api/BikeResource";

test("BikeConsumer #getAll", () => {
    jest.spyOn(api, "getAll");
    api.getAll = jest.fn(() => Promise.resolve([{ name: "data" }]));

    return BikeConsumer.getAll((data) => {
        expect(data).toMatchObject({ isResult: 'success', data: [{ name: 'data' }] })
    });
});

test("BikeConsumer #getAll-ERROR", () => {
    jest.spyOn(api, "getAll");
    api.getAll = jest.fn(() => Promise.reject());

    return BikeConsumer.getAll((data) => {
        expect(data).toMatchObject({ "error": undefined, "isResult": "error" })
    });
});

