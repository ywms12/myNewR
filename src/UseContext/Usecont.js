import { createContext } from "react";
import TTo from './TTo';

export const Zen = createContext();
function Usecont () {
    return(
        <div>
            <Zen.Provider value="react">
                <TTo/>
            </Zen.Provider>
        </div>
    );
}
export default Usecont;