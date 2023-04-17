import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url) =>{
    const [state, setState] = useState()
    const [hasError, setHasError] = useState(false) //estado para el error
    useEffect(() => { 
    

    axios.get(url) //hago la peticion con el metodo get
       .then(res => {
                    setState(res.data)
                    setHasError(false) //controlo las promesas
                    })
       .catch(err => {
                     console.log(err)
                     setHasError(true)
                     })
       
        
    
    }, [url])

    return [state,hasError] //retorno el estado y el rror en un arreglo

}

export default useFetch 