import './App.css';
import { Route, Routes } from 'react-router-dom';
import Users from './Users';
import AddUser from './AddUser';
import EditUser from './EditUser';
function App () {
    return(
        <div className='container'>
            <Users/>
            <Routes>
                <Route path="addUser" element={<AddUser/>}/>
                <Route path="/edit/:userId" element={<EditUser/>}/>
            </Routes>
        </div>
    );
}
export default App;