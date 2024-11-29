import { useState , useEffect } from 'react';
function App() {
    const [users , setUsers] = useState([]);
    const [filteredUsers , setFilteredUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    const handleChange = (e) =>{
        const filter = users.filter(
            user => user.name.toLowerCase().includes(e.target.value)
        )
        setFilteredUsers(filter)
    }
    return(
        <div>
            <input type="text" onInput={handleChange}/>
            {filteredUsers.map(
                user => <p key={user.id}>{user.name}</p>
            )}
        </div>
    );
}
export default App;