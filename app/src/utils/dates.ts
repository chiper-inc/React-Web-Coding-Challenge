export const convertTimestampToDate = (timestamp: number): string =>
  new Date(timestamp).toLocaleDateString(`pt-BR`);

export const convertDateToTimestamp = (date: string): number =>
  new Date(date).getTime();
