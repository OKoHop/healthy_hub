const todayDate = new Date();
const year = todayDate.getFullYear();
const month = (todayDate.getMonth() + 1).toString().padStart(2, '0');
const day = todayDate.getDate().toString().padStart(2, '0');

const today = `${year}-${month}-${day}`;

export default today;