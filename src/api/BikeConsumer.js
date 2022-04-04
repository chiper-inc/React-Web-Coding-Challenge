import api from "./BikeResource";

const Consumer = ({

    getAll: (handle) => api.getAll()
        .then(data => {
            handle({ isResult: "success", data });
        }).catch(error => {
            console.error(error);
            handle({ isResult: "error", error });
        }),

    update: (item, handle) => api.put(item)
        .then((data) => {
            handle({ isResult: "success", item: data });
        }).catch(error => {
            console.error(error);
            handle({ isResult: "error", error });
        }),

    add: (item, handle) => api.post({ description: item, id: null, isActive: true })
        .then((data) => {
            handle({ isResult: "success", item: data });
        }).catch(error => {
            console.error(error);
            handle({ isResult: "error", error });
        }),

    delete: (item, handle) => api.delete(item)
        .then((data) => {
            handle({ isResult: "success", item: data });
        }).catch(error => {
            console.error(error);
            handle({ isResult: "error", error });
        }),
});

export default Consumer;


