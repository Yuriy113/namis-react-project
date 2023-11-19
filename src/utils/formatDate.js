export const formatDate = (inputDate) => {
  if (!inputDate) return null;
  const parsedDate = new Date(inputDate);
  const formattedDate = `${parsedDate.getFullYear()}.${(parsedDate.getMonth() + 1)
    .toString()
    .padStart(2, '0')}.${parsedDate.getDate().toString().padStart(2, '0')} ${parsedDate
    .getHours()
    .toString()
    .padStart(2, '0')}:${parsedDate.getMinutes().toString().padStart(2, '0')}`;

  return formattedDate;
};
