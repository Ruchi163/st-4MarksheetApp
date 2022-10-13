
import './App.css';
import NavBar from './components/NavBar';
import { ProjectST4 } from './components/ProjectST4';
import AllUsers from './components/AllUsers';
import { AddUsers } from './components/AddUsers';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { EditUsers } from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route path='/' element={<ProjectST4/>}/>
            <Route path='/all' element={<AllUsers/>}/>
            <Route path='/add' element={<AddUsers/>}/>
            <Route path='/edit/:id' element={<EditUsers/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
