export default function useOnlyDate(info) {
  /* Este Custom Hooks permite retornar una fecha en formateada
   en formato yyyy/mm/dd */
  let timestamp = info?.stolen_record?.date_stolen;
  let dateFormat = new Date(timestamp * 1000);
  let onlyDate = `${dateFormat.getFullYear()}-${
    dateFormat.getMonth() + 1 < 10 ? '0' : ''
  }${dateFormat.getMonth() + 1}-${
    dateFormat.getDate() < 10 ? '0' : ''
  }${dateFormat.getDate()}`;

  return onlyDate;
}
