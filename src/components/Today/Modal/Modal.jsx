import Modal from 'react-modal';
import {
  Form,
  FormBtn,
  H1,
  Input,
  Label,
  ModalWindow,
  CancelBtn,
} from './Modal.styled';
import { useDispatch } from 'react-redux';
import { saveWaterIntake } from '../../../redux/Today/Water/operations';
import { getDailyStatistics } from '../../../redux/Today/Food/operations';

Modal.setAppElement('#root');

const WaterModal = ({ open, close }) => {
  const dispatch = useDispatch();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const waterData = form.elements.water.value;
    dispatch(saveWaterIntake(waterData));
    dispatch(getDailyStatistics());
    close();
  };

  return (
    <ModalWindow
      isOpen={open}
      onRequestClose={close}
      contentLabel="Example Modal"
      overlayClassName="Overlay"
    >
      <H1>Add water intake</H1>

      <div>
        <Form onSubmit={handleSubmitForm}>
          <Label>
            How much water
            <Input
              type="text"
              name="water"
              placeholder="Enter milliliters"
              autoComplete="off"
            />
          </Label>
          <FormBtn type="submit">Confirm</FormBtn>
        </Form>
        <CancelBtn onClick={close}>Cancel</CancelBtn>
      </div>
    </ModalWindow>
  );
};
export default WaterModal;
