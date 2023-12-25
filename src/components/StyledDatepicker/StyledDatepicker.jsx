import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMonths } from "date-fns";
import { getStats } from "../../redux/statistics/statisticOperations";
import { CalendarGlobalStyles } from "./StyledDatepicker.styled";
const DateRangePicker = () => {
  const dispatch = useDispatch();

  const currentDate = new Date();
  const nextMonthDate = addMonths(currentDate, 1);

  const [startDate, setStartDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(nextMonthDate);

  const handleDateChange = (dates) => {
    const [newStartDate, newEndDate] = dates;
    setStartDate(newStartDate);
    setEndDate(dates.length > 1 ? newEndDate : null);

    const formattedStartDate = newStartDate.toISOString();
    const formattedEndDate = newEndDate
      ? newEndDate.toISOString()
      : null;

    dispatch(getStats(formattedStartDate, formattedEndDate));
  };

  return (
    <>
      <DatePicker
      selected={startDate}
        onChange={handleDateChange}
        selectsRange
        startDate={startDate}
        endDate={endDate}
        dateFormat="yyyy-MM-dd"
        showMonthYearPicker
       
       
        onClickOutside={() => setIsOpen(false)} 
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default DateRangePicker;
