const breakpoints = ['320', '834', '1440'];

export const theme = Object.freeze({
  // background-color: ${p => p.themStyled.colors.white};
  colors: {
    black: '#050505', 
    black2: '#0F0F0F', 
    gray: '#B6B6B6', 
    greenLite: '#E3FFA8',
    liteGreen: '#45FFBC',
    violet: '#B6C3FF',
    white: '#FFFFFF',
   
    gray1: '#292928', 
    pink: '#FFC4F7', 
    yellow: '#FFF3B7',
   
    error: '#E74A3B', 
    correct: '#3CBC81',
  },

  fontFamily: {
    poppins: "'Poppins', sans-serif",
  },

  fontWeights: {
    regular: 400, 
    medium: 500, 
    semiBold: 600, 
    bold: 700, 
  },

  fontSizes: {
    xs: '14px',
    s: '16px',
    m: '18px',
    l: '22px',
    l2: '24px',
    xl: '30px',
    xxl: '32px',
  },

  //Медіа запити, приклад
  // @media screen and(${ p => p.themStyled.mq.tablet}) {
  //    font-size: ${p => p.theme.fontSizes.l}px;
  // }
  mq: {
    mobile: `min-width: ${breakpoints[0]}px`,
    tablet: `min-width: ${breakpoints[1]}px`,
    desktop: `min-width: ${breakpoints[2]}px`, 
  },


  borders: {
    none: 'none',
    normal: '1px solid',
  },

  //Радіус
  radii: {
    normal: '12px',
  },
});