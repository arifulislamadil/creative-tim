import { createContext, useEffect, useState } from "react";
import "./DashBoard.css"

export const UserData = createContext();
const DashBoard = () => {
    const [user, setUser] = useState(6);
    return (
        <div> 
            <h3>From DashBoard</h3>
        </div>
    );
};

export default DashBoard;