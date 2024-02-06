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
import { useState } from 'react';
import LoaderWithBackdrop from '../../LoaderSpinner';

Modal.setAppElement('#root');

const WaterModal = ({ open, close }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const waterData = form.elements.water.value;
    if (waterData.trim() === '') {
      setLoading(false);
      return;
    }
    await dispatch(saveWaterIntake(waterData));
    close();
    setLoading(false);
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
              type="number"
              name="water"
              placeholder="Enter milliliters"
              autoComplete="off"
              max={7000}
            />
          </Label>
          <FormBtn type="submit">Confirm</FormBtn>
        </Form>
        <CancelBtn onClick={close}>Cancel</CancelBtn>
      </div>
      {loading && <LoaderWithBackdrop />}
    </ModalWindow>
  );
};
export default WaterModal;
