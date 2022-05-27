import React, { useRef, useState } from 'react'

const Stopwatch = () => {
    const [watch, setWatch] = useState(0);
    // const [timerId, setTimerId] = useState();
    const timerId = useRef(null)

    const start = () => {
        if (!timerId.current) {
            const id = setInterval(() => {
                setWatch((prev) => prev + 1);
            }, 1000);
            // setTimerId(id)
            timerId.current = id;
        }
        
    }
    if (watch > 10) {
        clearInterval(timerId.current);
    }
   
    const pause = () => {
        clearInterval(timerId.current);
        // setTimerId()
        timerId.current = null;
    }

    const reset = () => {
        clearInterval(timerId.current);
        // setTimerId();
        timerId.current = null;
        setWatch(0)
    }

  return (
      <div>Stopwatch
          <div>
              <h1>{ watch}</h1>
          </div>
          <div>
              <button onClick={start}>Start</button>
              <button onClick={pause}>Stop</button>
              <button onClick={reset}>Reset</button>
          </div>
    </div>
  )
}

export default Stopwatch