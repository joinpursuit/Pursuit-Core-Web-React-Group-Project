import React , {useState} from "react";


const DisplayUserInfo = () => {
    const [user, setUser] = useState([]);

    const fetchData = async (url) => {
        try{
            let res = await axios.get(url);
            debugger
            
        } catch (error) {
            setUser([])
            console.log(error)
        }
    }
};

export default DisplayUserInfo;
