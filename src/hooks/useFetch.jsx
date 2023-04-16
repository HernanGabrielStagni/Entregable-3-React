import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url) =>{
    const [state, setState] = useState()

    useEffect(() => { 
    

    axios.get(url) //hago la peticion con el metodo get
       .then(res => setState(res.data)) //controlo las promesas
       .catch(err => console.log(err))
        
    
    }, [])

    return state //retorno el estado
}

export default useFetch 