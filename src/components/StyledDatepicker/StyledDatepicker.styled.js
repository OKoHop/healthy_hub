import { createGlobalStyle, styled } from "styled-components";


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
    background-color: ${p => p.theme.colors.primaryBlack2};
    font-family: Poppins;
    border-radius: 6px; 
    z-index: 9999;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: ${p => p.theme.colors.primaryGreenLite} rgba(255, 255, 255, 0.12); 

    &::-webkit-scrollbar {
      width: 6px; 
      
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${p => p.theme.colors.primaryGreenLite};
      
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
    color: ${p => p.theme.colors.primaryGreenLite};
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
    background-color:${p => p.theme.colors.primaryBlack2};
    color:${p => p.theme.colors.primaryGray};
    font-size: 14px;
    z-index: 9999;
  }
  .react-datepicker__month-text:hover {
    color:${p => p.theme.colors.primaryGreenLite};
    cursor:pointer;
    background-color: #ffffff08;
    width:204px;
    height:24px;
   padding:2px 0 2px 16px;
    margin:-2px 0 -4px -16px;
    
  }
  
 
`;




export const TitleWrapper = styled.button`
position: relative;
height: 36px;
width: 150px;
  color: ${p => p.theme.colors.primaryWhite};
  background: transparent;
  border: none;
  
  font-weight: 400;
  line-height: 18px;
  text-align: start;

  justify-content: space-around;
  align-items: center;
  font-weight: 500;

  @media screen and (${props => props.theme.mq.mobMin}) {
    font-size: 24px;
    line-height: 1.25;
  }
  @media screen and (${props => props.theme.mq.tabMin}) {
    font-size: 30px;
    line-height: 1.2;
  }
`;
