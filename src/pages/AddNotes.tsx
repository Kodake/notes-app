import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import { getNotesValue } from '../store/actions';
import './AddNotes.css';

const AddNotes = () => {
  const [noteName, setNoteName] = useState('');
  const dispatch = useDispatch();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNoteName(value);
  }

  const handleClick = () => {
    dispatch(getNotesValue(noteName))
  }

  return (
    <>
      <Header />
      <div className='add-note-wrapper'>
        <h1>Add Notes</h1>

        <div className='form-wrapper'>
          <input name='addTodo' placeholder='Todo Name' onChange={handleOnChange} />

          <button onClick={handleClick}>Add Todo</button>
        </div>
      </div>
    </>
  )
}

export default AddNotes