import api from "../../api/BikeResource";

test("BikeResource #getAll", () => {
    const mockSuccessResponse = [{ item: "task 1" }, { item: "task 2" }];
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
    });

    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    return api.getAll().then((data) => {
        expect(global.fetch).toHaveBeenCalledWith('https://bikeindex.org/api/v3/search');
        expect(data).toMatchObject(mockSuccessResponse)
    });
});

