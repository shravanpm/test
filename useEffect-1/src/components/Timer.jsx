import React,{useEffect, useState} from 'react'

const Timer = () => {
    const [timer, setTimer] = useState(5)

    useEffect(() => {
        
        
            const id = setInterval(() => {
                if (timer > 10) {
                    clearInterval(this.id);
                } else {
                    setTimer((prev)=>prev+1)
               }
            }, 1000)    
        return () => {
            clearInterval(id)
        }
        
    },[])
  return (
      <div><h1>Timer : { timer}</h1></div>
  )
}

export default Timer