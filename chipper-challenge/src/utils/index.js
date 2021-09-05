export const datos = (date_stolen) => {
    let myDate = new Date(date_stolen * 1000);

    return `${myDate.toGMTString().slice(0, 16)}`;
};
