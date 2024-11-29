import './App.css';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    // حالة لتخزين المستخدمين
    const [users, setUsers] = useState([]);
    // حالة لتحديد المستخدم المرئي
    const [visibleUser, setVisibleUser] = useState(null);

    // دالة لجلب بيانات المستخدمين من API
    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:9000/users'); // تأكد من صحة الرابط
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    // استخدام useEffect لجلب البيانات عند تحميل المكون
    useEffect(() => {
        fetchUsers();
    }, []);

    // دالة لعرض معلومات المستخدم
    const showUserInfo = (user) => {
        setVisibleUser(user);
    };

    // دالة لإخفاء معلومات المستخدم
    const hideUserInfo = () => {
        setVisibleUser(null);
    };

    // For delete
    const deleteUser = (user) => {
        Swal.fire({
            title: `Are you sure to delete ? ${user.name}`,
            showCancelButton: true
        })
        .then((data) =>{
            if(data.isConfirmed){
                fetch(`http://localhost:9000/users/${user.id}`,{
                    method: "DELETE",
                })
                .then((res) => res.json())
                .then(() => fetchUsers())
            }
        })
    }

    return (
        <div className="users">
            <div className="container">
                <div className="users-list">
                    <h2>Users List</h2>
                    <Link className="btn btn-success" to="addUser">Add User</Link>
                    <table border="1" className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">name</th>
                                <th scope="col">operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => showUserInfo(user)}>show</button>
                                        <button onClick={() => deleteUser(user)} className="btn btn-danger">delete</button>
                                        <Link to={`edit/${user.id}`} className="btn btn-dark">edit</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* عرض معلومات المستخدم المحدد */}
                    {visibleUser && (
                        <div style={{ marginTop: '20px', borderRadius: '15px' , border: '1px solid black', padding: '10px' }}>
                            <h3>User Informations</h3>
                            <p><span className="sp">ID:</span> {visibleUser.id}</p>
                            <p><span className="sp">Name:</span> {visibleUser.name}</p>
                            <p><span className="sp">Email:</span> {visibleUser.email}</p>
                            <p><span className="sp">Password:</span> {visibleUser.password}</p>
                            <button className="btn btn-danger" onClick={hideUserInfo}>إخفاء</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Users;