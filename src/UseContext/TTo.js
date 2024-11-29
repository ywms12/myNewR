import { Zen } from './Usecont';
import { useContext } from 'react';
/*

    <Zen.Consumer>
        {(e) => {return(<h3>{e}</h3>)}}
    </Zen.Consumer >

*/
function TTo() {
    const n = useContext(Zen)
    return (
        <div>
            <h1>{n}</h1>
        </div>
    );
}
export default TTo;