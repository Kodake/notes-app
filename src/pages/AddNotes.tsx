import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { initSaveNotesValue, initSaveNotesValueSuccessfull } from '../store/addNotes/actions';
import './AddNotes.css';
import { useNavigate } from 'react-router-dom';
import { AppState } from '../globalStore/rootReducer';

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
      <div className='add-note-wrapper'>
        <h1>Add Notes</h1>

        <div className='form-wrapper'>
          <input name='addTodo' placeholder='Todo Name' onChange={handleOnChange} value={noteName} />

          <button disabled={noteName.trim() === ''} onClick={handleClick}>Add Todo</button>
        </div>
      </div>
    </>
  )
}

export default AddNotes