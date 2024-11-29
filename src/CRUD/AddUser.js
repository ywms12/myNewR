import React, { useState } from 'react';
import './App.css';
function AddUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    //const [nextId, setNextId] = useState(1);

    // دالة لمعالجة إرسال النموذج
    const handleSubmit = async (e) => {
        e.preventDefault(); // منع إعادة تحميل الصفحة

        // إنشاء كائن المستخدم الجديد
        const newUser = {
            //id: nextId,
            name,
            email,
            password
        };

        try {
            const response = await fetch('http://localhost:9000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // إعادة تعيين الحقول بعد الإرسال الناجح
            setName('');
            setEmail('');
            setPassword('');
            //setNextId(nextId + 1);
            setMessage('تم إضافة المستخدم بنجاح!');
        } catch (error) {
            console.error('Error adding user:', error);
            setMessage('حدث خطأ أثناء إضافة المستخدم.');
        }
    };
    return (
        <div>
            <div className="addU">
                <form className="form" onSubmit={handleSubmit}>
                    <label>name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <br />
                    <br />
                    <label>email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <br />
                    <br />
                    <label>password</label>
                    <input
                        type="char"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className='btn btn-primary' type="submit">Add User</button>
                </form>
            </div>
            <br />
        </div>
    );
}
export default AddUser;