import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { initSaveNotesValue, initSaveNotesValueSuccessfull } from '../store/addNotes/actions';
import { useNavigate } from 'react-router-dom';
import { AppState } from '../globalStore/rootReducer';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';
import InputGroup from 'react-bootstrap/esm/InputGroup';

const AddNotes = () => {
  const [noteName, setNoteName] = useState('');
  const dispatch = useDispatch();
  const nav = useNavigate();

  const { success } = useSelector((state: AppState) => state.AddNotesReducer);

  useEffect(() => {
    if (success) {
      setNoteName('');
      nav('/');
      dispatch(initSaveNotesValueSuccessfull(false));
    }
  }, [success])

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNoteName(value);
  }

  const handleClick = () => {
    dispatch(initSaveNotesValue(noteName))
  }

  return (
    <>
      <Header />
      <Container>
        <h1 className='mt-2 text-center'>Add Notes</h1>
        <InputGroup className='mt-3'>
          <Form.Control
            type='text'
            name='addTodo' placeholder='Add note name' onChange={handleOnChange} value={noteName}
          />
          <Button disabled={noteName.trim() === ''} onClick={handleClick} variant='success'>Add Todo</Button>
        </InputGroup>
      </Container>
    </>
  )
}

export default AddNotes;

{/* <div className='add-note-wrapper'>
        <h1>Add Notes</h1>

        <div className='form-wrapper'>
          <input name='addTodo' placeholder='Todo Name' onChange={handleOnChange} value={noteName} />

          <button disabled={noteName.trim() === ''} onClick={handleClick}>Add Todo</button>
        </div>
      </div> */}