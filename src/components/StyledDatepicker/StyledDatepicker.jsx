import React, { useState, useEffect } from 'react';
import { format, startOfMonth, endOfMonth } from 'date-fns';
import DatePicker from 'react-datepicker';
import {
  CalendarGlobalStyles,
  CalendarHeader,
  TitleWrapper,
} from './StyledDatepicker.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import swgIcons from '../../images/Header/icons.svg';
import { SvgUserBtnDown } from '../Header/HeaderUserInfoNav/HeaderUserInfoNav.styled';

const StyledDatepicker = ({ onDateRangeChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const formatDateForUrl = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const updateUrlParams = (startDate, endDate) => {
    const newDateRange = `${formatDateForUrl(startDate)}${formatDateForUrl(
      endDate
    )}`;
    onDateRangeChange(newDateRange);
  };

  useEffect(() => {
    const startDate = startOfMonth(selectedDate);
    const endDate = endOfMonth(selectedDate);

    updateUrlParams(startDate, endDate);
  }, [selectedDate]);

  const rotateSvg = { transform: 'rotate(180deg)' };

  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
          updateUrlParams(startOfMonth(date), endOfMonth(date));
        }}
        onCalendarOpen={() => setIsCalendarOpen(true)}
        onCalendarClose={() => setIsCalendarOpen(false)}
        dateFormat={'dd MM yyyy'}
        calendarStartDay={1}
        showMonthYearPicker
        customInput={
          <CalendarHeader>
            <TitleWrapper>
              Months
              {!isCalendarOpen ? (
                <SvgUserBtnDown>
                  <use href={`${swgIcons}#icon-arrow-down`}></use>
                </SvgUserBtnDown>
              ) : (
                <SvgUserBtnDown style={rotateSvg}>
                  <use href={`${swgIcons}#icon-arrow-down`}></use>
                </SvgUserBtnDown>
              )}
            </TitleWrapper>
            <p>{format(selectedDate, 'MMMM')}</p>
          </CalendarHeader>
        }
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default StyledDatepicker;
