const breakpoints = ['320', '833', '834', '1439', '1440'];

export const theme = Object.freeze({
  // Colors / Example: background-color: ${p => p.theme.colors.white};
  colors: {
    // Primary
    primaryWhite: '#FFFFFF',
    primaryBlack: '#050505',
    primaryViolet: '#B6C3FF',
    primaryBlack2: '#0F0F0F',
    primaryLiteGreen: '#45FFBC',
    primaryGray: '#B6B6B6',
    primaryGreenLite: '#E3FFA8',
    // Secondary
    secondaryGray1: '#292928',
    secondaryPink: '#FFC4F7',
    secondaryYellow: '#FFF3B7',
    // InputValid
    error: '#E74A3B',
    correct: '#3CBC81',
  },

  fontWeights: {
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

  // Animation / Example: transition: ${p => p.theme.transition.customTrans};
  transition: {
    customTrans: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // Media request / Example: @media (${ p => p.theme.mq.tablet}) {

  mq: {
    mobMin: `min-width: ${breakpoints[0]}px`, //320
    mobMax: `max-width: ${breakpoints[1]}px`, //833
    tabMin: `min-width: ${breakpoints[2]}px`, // 834
    tabMax: `max-width: ${breakpoints[3]}px`, //1439
    deskMin: `min-width: ${breakpoints[4]}px`, //1440
  },
});
