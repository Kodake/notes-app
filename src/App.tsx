
import { Routes, Route } from 'react-router-dom';
import ListNotes from './pages/ListNotes';
import AddNotes from './pages/AddNotes';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ListNotes />}></Route>
        <Route path='/add-note' element={<AddNotes />}></Route>
      </Routes>
    </div>
  );
}

export default App;
