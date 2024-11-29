import { useState, useEffect } from 'react';
import './style.css';
export default function App() {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        if (counter > 2) {
            console.log(counter)
        }
    }, [counter])
    const update = () => setCounter(prev => prev + 1)

    /* useState */

    const [Islogin, setIsLogin] = useState(false);
    let ele;
    if (Islogin) {
        ele = <h1>I am loggedIn</h1>
    } else {
        ele = <h1>none</h1>
    }

    /* map */

    const arr = ['html','css','js'];
    const arr2 = arr.map((el) => {
        return el + " ==>"
    });
    console.log(arr2);

    /* note this */
    {/*password.length < 8 && accept && <p>password must be more than 8 char</p>*/}
    
    return (
        <div className="d2">
            <h3>{counter}</h3>
            <button className="b1" onClick={update}>+</button>
            <br />
            <br />
            <br />
            <br />

            {/* useState */}

            <div className="div">
                <button className="b2" onClick={() => setIsLogin(true)}>Log in</button>
                {ele}
            </div>
        </div>
    );
}