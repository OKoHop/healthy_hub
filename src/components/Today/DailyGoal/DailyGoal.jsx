import {
  StyledDiv,
  StyledDiv2,
  StyledH3,
  StyledP,
  StyledSpan,
  StyledSubtitle,
  Thumb,
} from './DailyGoal.style';

const DailyGoal = () => {
  return (
    <Thumb>
      <StyledSubtitle>Daily goal</StyledSubtitle>

      <StyledDiv>
        <StyledDiv2>
          <svg stroke="#45FFBC" width={80} height={80}>
            <path
              width={80}
              height={80}
              strokeWidth="0.8"
              strokeMiterlimit="10"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              d="M20.786 16.347c3.778 0 6.84-3.062 6.84-6.84s-3.062-6.84-6.84-6.84c-3.778 0-6.84 3.062-6.84 6.84s3.062 6.84 6.84 6.84zM8.48 25.92c2.268 0 4.107-1.839 4.107-4.107s-1.839-4.106-4.107-4.106c-2.268 0-4.106 1.838-4.106 4.106s1.838 4.107 4.106 4.107zM22.16 29.333c1.885 0 3.413-1.528 3.413-3.413s-1.528-3.413-3.413-3.413v0c-1.885 0-3.413 1.528-3.413 3.413s1.528 3.413 3.413 3.413v0z"
            ></path>
          </svg>
          <div>
            <StyledH3>Calories</StyledH3>
            <StyledP>1700</StyledP>
          </div>
        </StyledDiv2>
        <StyledDiv2>
          <svg stroke="#B6C3FF" width={80} height={80}>
            <path
              strokeWidth="0.8"
              strokeMiterlimit="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M24 20v5.333c0 2.2-1.8 4-4 4h-8c-2.2 0-4-1.8-4-4v-6.693l5.187 0.027c0.973 0 1.933 0.226 2.813 0.666s1.84 0.667 2.827 0.667h5.173z"
            ></path>
            <path
              strokeWidth="0.8"
              strokeMiterlimit="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M24 14.44v5.56h-5.173c-0.987 0-1.947-0.227-2.827-0.667s-1.84-0.666-2.813-0.666l-5.187-0.027v-4.2c0-0.614 0.347-1.453 0.787-1.894l2.826-2.826c0.24-0.24 0.387-0.587 0.387-0.934v-2.12h8v2.12c0 0.347 0.147 0.694 0.387 0.934l2.826 2.826c0.44 0.44 0.787 1.28 0.787 1.894z"
            ></path>
            <path
              strokeWidth="0.6"
              strokeMiterlimit="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M24 21.333v-1.333M8 19.973v-1.333"
            ></path>
            <path
              strokeWidth="0.8"
              strokeMiterlimit="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.334 6.666h-6.667c-1.107 0-2-0.906-2-2s0.893-2 2-2h6.667c1.106 0 2 0.907 2 2s-0.894 2-2 2z"
            ></path>
          </svg>
          <div>
            <StyledH3>Water</StyledH3>
            <StyledP>
              1500 <StyledSpan>ml</StyledSpan>
            </StyledP>
          </div>
        </StyledDiv2>
      </StyledDiv>
    </Thumb>
  );
};

export default DailyGoal;
