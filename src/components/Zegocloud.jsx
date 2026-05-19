import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom";

const Zegocloud = () => {
    const [value, setValue] = useState();
    const navigate = useNavigate();

    const joinNow = useCallback(
        () => {
            navigate(`/room/${value}`);    // /room/value
        },
        [navigate,value],
    )

    return (
        <>
            <input type="text" placeholder="enter room id" onChange={(e) => setValue(e.target.value)} />
            <button onClick={joinNow}>Join</button>
        </>
    )
}

export default Zegocloud
