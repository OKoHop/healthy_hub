import styled from 'styled-components';

export const InputsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: ${(props) => (props.$hasBackButton ? '24px' : '40px')};
  @media (${(p) => p.theme.mq.deskMin}) {
    max-width: 328px;
  }
`;

export const StyledRadioGroup = styled.div.attrs((props) => ({
  row: props.row ? 'true' : undefined,
}))`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (${(p) => p.theme.mq.tabMin}) {
    flex-direction: ${(props) => (props.row ? 'column' : 'row')};
  }

  @media (${(p) => p.theme.mq.deskMin}) {
    max-width: 444px;
    flex-direction: column;
  }
`;

export const ButtonsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  @media (${(p) => p.theme.mq.deskMin}) {
    max-width: 212px;
  }
`;

export const GenderLabel = styled.span`
  color: ${(p) => p.theme.colors.primaryWhite};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: -8px;
`;
