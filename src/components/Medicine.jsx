import React, {useState, useEffect} from 'react';
import PuffLoader from "react-spinners/PuffLoader";

const Medicine = () => {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])


  return (
    <div>
       
        {
            loading ? 
            <PuffLoader color="#36d7b7" />
            :
            <h1>Hello world</h1>
        }
    </div>
  )
}

export default Medicine