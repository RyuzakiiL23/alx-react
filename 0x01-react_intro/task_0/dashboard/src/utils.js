export const getFullYear = () => {
  const currentYear = new Date().getFullYear();
  return currentYear;
}

export const getFooterCopy = (isIndex) => {
  return isIndex ? "Holberton School" : "Holberton School main dashboard";
}

export const getLatestNotification = () => {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}
