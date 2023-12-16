import Modal from 'react-modal';
import { Form, FormBtn, H1, Input, Label, ModalWindow, P } from './Modal.style';

Modal.setAppElement('#root');

const WaterModal = ({ open, close }) => {
  return (
    <ModalWindow
      isOpen={open}
      onRequestClose={close}
      contentLabel="Example Modal"
      overlayClassName="Overlay"
    >
      <H1>Add water intake</H1>

      <div>
        <Form>
          <Label>
            How match water
            <Input type="text" name="water" placeholder="Enter milliliters" />
          </Label>
          <FormBtn type="submit">Confirm</FormBtn>
        </Form>
        <P onClick={close}>Cancel</P>
      </div>
    </ModalWindow>
  );
};
export default WaterModal;
