import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditUser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:9000/users/${userId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError('حدث خطأ أثناء جلب بيانات المستخدم');
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  const handleChange = (e) => {
    const { name, email, password, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
      [email]: value,
      [password]: value
    }));
  };

  const handleSubmit = async (e) => {
    //e.preventDefault();
    try {
      const response = await fetch(`http://localhost:9000/users/${userId}`, {
        method: 'PUT', // أو 'PATCH' حسب ما يدعمه API الخاص بك
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // بعد التحديث الناجح، يمكنك إعادة توجيه المستخدم أو عرض رسالة نجاح
      //history.push('/users'); // إعادة توجيه إلى صفحة المستخدمين
    } catch (error) {
      setError('حدث خطأ أثناء تحديث بيانات المستخدم');
      console.error('Error updating user:', error);
    }
  };

  if (loading) {
    return <div>جارٍ تحميل البيانات...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="EditU">
        <h2>Update Data</h2>
        <form className='form' onSubmit={handleSubmit}>
          <label>
            name :
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            email:
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            password:
            <input
              type="char"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </label>
          {/* أضف المزيد من الحقول حسب الحاجة */}
          <button className='btn btn-primary' type="submit">تحديث</button>
        </form>
      </div>
      <br />
    </div>
  );
};

export default EditUser;
