export default function useDateFull(info) {
  /* Este Custom Hooks permite retornar una fecha en formateada
  con fecha y hora en formato de 12 horas. */
  let timestamp = info?.stolen_record?.date_stolen;
  let dateFormat = new Date(timestamp * 1000);
  let hours =
    dateFormat.getHours() === 0
      ? '12'
      : dateFormat.getHours() > 12
      ? dateFormat.getHours() - 12
      : dateFormat.getHours();
  let minutes =
    (dateFormat.getMinutes() < 10 ? '0' : '') + dateFormat.getMinutes();
  let ampm = dateFormat.getHours() < 12 ? 'AM' : 'PM';
  let formattedTime = hours + ':' + minutes + ' ' + ampm;
  let timeZone = dateFormat.getTimezoneOffset() / 60;
  let date = `${dateFormat.getFullYear()}-${
    dateFormat.getMonth() + 1 < 10 ? '0' : ''
  }${dateFormat.getMonth() + 1}-${
    dateFormat.getDate() < 10 ? '0' : ''
  }${dateFormat.getDate()} ${formattedTime} -0${timeZone}`;

  return date;
}
