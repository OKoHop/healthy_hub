export const generateDaysArray = (dateRange) => {
  if (dateRange === null) {
    console.log('DateRange is null.');
    return [];
  }

  const startDateString = dateRange.substring(0, 10);
  const endDateString = dateRange.substring(10);

  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);
  const daysArray = [];

  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    daysArray.push(currentDate.getDate().toString());
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return daysArray;
};
