import { useState, useEffect } from "react";
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending,setIsPending]=useState(false)
  const [error,setError]= useState(null)

  useEffect(() => {
    const controller = new AbortController()  // for cleanup
    const fetchData = async ()=>{
      setIsPending(true)
      try{
        const res = await fetch(url,{signal:controller.signal}); //when fetch is aborted the controller sends an AbortError
        if(!res.ok){
          throw new Error(res.statusText)
        }

        const json = await res.json();
        setIsPending(false)
        setData(json)
        setError(null)
      }catch(err){
        if(err.name ==="AbortError"){
          console.log("the fetch was aborted")
        }else{
          setIsPending(false)
          setError("Could not fetch the data")
        }
      }
    }
    // Invoking the function so that it gets invoked when calling from other components
    fetchData()
    // clean up for useEffect, whenever any component using this hook unmounts the cleanup function will fire
    return()=>{
      controller.abort()
    }
  }, [url]);
  return {data,isPending,error} 
};
