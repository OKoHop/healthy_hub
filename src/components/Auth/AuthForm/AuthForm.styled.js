import styled from 'styled-components';

export const InputsBlock = styled.div.attrs((props) => ({
  hasbackbutton: props.hasbackbutton ? 'true' : undefined,
}))`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: ${(props) => (props.hasbackbutton ? '24px' : '40px')};
  @media (${(p) => p.theme.mq.desktop}) {
    max-width: 328px;
  }
`;

export const StyledRadioGroup = styled.div.attrs((props) => ({
  row: props.row ? 'true' : undefined,
}))`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (${(p) => p.theme.mq.tablet}) {
    flex-direction: ${(props) => (props.row ? 'column' : 'row')};
  }

  @media (${(p) => p.theme.mq.desktop}) {
    max-width: 444px;
    flex-direction: column;
  }
`;

export const ButtonsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  @media (${(p) => p.theme.mq.desktop}) {
    max-width: 212px;
  }
`;
