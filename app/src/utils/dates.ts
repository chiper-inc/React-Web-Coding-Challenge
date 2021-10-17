export const convertTimestamp = (timestamp: number) => {
  return new Date(timestamp).toLocaleDateString(`pt-BR`);
};
