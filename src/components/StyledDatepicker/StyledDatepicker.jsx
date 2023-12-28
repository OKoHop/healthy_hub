import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux"; 
import { format, startOfMonth, endOfMonth } from "date-fns";
import DatePicker from "react-datepicker";
import { CalendarGlobalStyles, TitleWrapper } from "./StyledDatepicker.styled";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { getStats } from '../../redux/statistics/statisticOperations';

const StyledDatepicker = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDateForUrl = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }; 

  const updateUrlParams = (startDate, endDate) => {
    const startDateFormatted = formatDateForUrl(startDate);
    const endDateFormatted = formatDateForUrl(endDate);
    const dateRange = `${startDateFormatted}${endDateFormatted}`;
    
    dispatch(getStats(dateRange));
  };

  useEffect(() => {
    updateUrlParams(startOfMonth(selectedDate), endOfMonth(selectedDate));
  }, [dispatch, selectedDate]);

  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
          updateUrlParams(startOfMonth(date), endOfMonth(date));
        }}
        dateFormat={"dd MM yyyy"}
        calendarStartDay={1}
        showMonthYearPicker
        customInput={<TitleWrapper>{format(selectedDate, "MMMM")}</TitleWrapper>}
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default StyledDatepicker;
