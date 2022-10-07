
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ViewNotes from './pages/ViewNotes';
import AddNotes from './pages/AddNotes';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ViewNotes />}></Route>
        <Route path='/add-note' element={<AddNotes />}></Route>
      </Routes>
    </div>
  );
}

export default App;
