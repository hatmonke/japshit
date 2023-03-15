import { useState, useEffect } from "react";



export default function Timer(timestamp: number) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter === 0) {
      setCounter(timestamp);
    }

    counter > 0 && setTimeout(() => setCounter((counter - 1)), 1000);
  }, [counter, timestamp]);


  return <>{new Date(1000 * counter).toISOString().substr(11, 8)}</>
}