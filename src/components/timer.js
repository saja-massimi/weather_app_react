import {useState, useEffect , useRef} from 'react'

function Timer(){

const [isRunning, setIsRunning] = useState(false);
const [elapsedTime, setElapsedTime] = useState(0);

const intervalRef = useRef(null);
const startRef = useRef(0);

useEffect( () => {
if(isRunning){
    
   intervalRef.current =  setInterval(()=>{
        setElapsedTime(Date.now() - startRef.current)
    },10);

    
}

return () => {
        clearInterval(intervalRef.current);
    }

},

[isRunning]);

    const stop = () => {
setIsRunning(false);
    }

    const start = () => {
setIsRunning(true);
startRef.current = Date.now()- elapsedTime;
    }

    const reset = () => {
setElapsedTime(0);
setIsRunning(false);
    }

    const formatTime = (time) =>{

        let hours =  Math.floor(elapsedTime/ (1000*60*60));
        let minutes =  Math.floor(elapsedTime/ (1000*60) % 60);

        let seconds =  Math.floor(elapsedTime/ (1000) % 60);
        let milliSeconds =  Math.floor(elapsedTime % (1000) / 10);

        return `${hours}:${minutes}:${seconds}:${milliSeconds} ` ;
    }

    return <>
        <div className="container text-center mt-5">
        <h1>Timer App</h1>
        <h2>{formatTime()}</h2>


        <div className="mt-3">
        </div>

        <button className="btn btn-primary m-2" onClick={start}>
             Start
            </button>
            <button className="btn btn-danger m-2" onClick={stop}>
              Stop
            </button>
            <button className="btn btn-secondary m-2" onClick={reset}>
              Reset
            </button>

        </div>
</>
} 

export default Timer;