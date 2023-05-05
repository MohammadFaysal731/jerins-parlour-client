import { useEffect } from "react";

const useTitle = title =>{
  useEffect(()=>{
    document.title = `${title} - Jerins Palour`
  },[title])
}

export default useTitle;