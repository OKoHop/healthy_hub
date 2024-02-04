import { createGlobalStyle, styled } from 'styled-components';

export const CalendarGlobalStyles = createGlobalStyle`
  .react-datepicker__wrapper {
    position: relative;
    z-index: 9999;
  }
  .react-datepicker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 212px;
    height: 144px;
    padding: 10px 0 0 16px;
    background-color: ${(p) => p.theme.colors.primaryBlack2};
    box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.20);
    font-family: Poppins;
    border-radius: 6px; 
    z-index: 9999;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: ${(p) =>
      p.theme.colors.primaryGreenLite} rgba(255, 255, 255, 0.12); 

    &::-webkit-scrollbar {
      width: 6px; 
      
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${(p) => p.theme.colors.primaryGreenLite};
      
      border-top-right-radius: 12px; 
    border-bottom-right-radius: 12px;
    
    }

    &::-webkit-scrollbar-track {
      background-color: rgba(255, 255, 255, 0.12);
      border-top-right-radius: 12px; 
    border-bottom-right-radius: 12px;
    }
  }
  
  .react-datepicker__month-container {
    margin-top: 10px;
    float: inherit;
    box-sizing: border-box;
    
  }

  .react-datepicker__current-month {
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    color: ${(p) => p.theme.colors.primaryGreenLite};
  }
 
  
  
  .react-datepicker__monthPicker {
    display: flex;
    gap: 8px;
    flex-direction: column;
    justify-content: space-between;
    z-index: 9999;
    margin: 0;
  }
  .react-datepicker__month-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
    z-index: 9999;
  }
  .react-datepicker__month--text {
    margin-left:-16px;
    padding:2px 0 2px 16px;
    background-color:${(p) => p.theme.colors.primaryBlack2};
    color:${(p) => p.theme.colors.primaryGray};
    font-size: 14px;
    z-index: 9999;
  }
  .react-datepicker__month-text:hover {
    color:${(p) => p.theme.colors.primaryGreenLite};
    cursor:pointer;
    background-color: #ffffff08;
    width:204px;
    height:24px;
   padding:2px 0 2px 16px;
    margin:-2px 0 -4px -16px;
    
  }
  .react-datepicker__aria-live{
    display: none;
  }
  .react-datepicker__navigation{
    background-color: transparent;
    border: none;
  }
.react-datepicker__navigation-icon.react-datepicker__navigation-icon--previous,
.react-datepicker__navigation-icon.react-datepicker__navigation-icon--next {
  display: none;
}

.react-datepicker__navigation.react-datepicker__navigation--previous,
.react-datepicker__navigation.react-datepicker__navigation--next
 {
  position: relative;
}

.react-datepicker__navigation.react-datepicker__navigation--previous::before {
  color:${(p) => p.theme.colors.primaryGreenLite};
  content: "<";
  position: absolute;
  top: 7px;
  left: 50%;
  height: 30px;
  width: 30px;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.react-datepicker__navigation.react-datepicker__navigation--next::before {
  color:${(p) => p.theme.colors.primaryGreenLite};
  content: ">";
  position: absolute;
  top: -10px;
  left: 50px;
  height: 30px;
  width: 30px;

  z-index: 1;
}
.react-datepicker__header.react-datepicker-year-header{
  position: absolute;
  top: 2px;
  left: 33px;

}
`;

export const CalendarHeader = styled.div`
  max-width: 100%;
  width: 274px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    @media screen and (${(props) => props.theme.mq.mobMin}) {
      font-size: 18px;
      line-height: 24px;
    }
  }
  @media (${(p) => p.theme.mq.tabMin}) {
    width: 739px;
  }

  @media (${(p) => p.theme.mq.deskMin}) {
    width: 1330px;
  }
`;

export const TitleWrapper = styled.button`
  position: relative;
  color: ${(p) => p.theme.colors.primaryWhite};
  background: transparent;
  border: none;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;

  @media screen and (${(props) => props.theme.mq.mobMin}) {
    font-size: 24px;
    line-height: 1.25;
  }
  @media screen and (${(props) => props.theme.mq.tabMin}) {
    font-size: 30px;
    line-height: 1.2;
  }
`;
