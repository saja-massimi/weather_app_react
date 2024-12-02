import  {useState} from 'react';

function Counter (){

    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };
  
    const reset = () => {
      setCount(0);
    };

    return (
        <div className="container text-center mt-5">
          <h1>Counter</h1>
          <h2>{count}</h2>
          <div className="mt-3">
            <button className="btn btn-primary m-2" onClick={increment}>
              +
            </button>
            <button className="btn btn-danger m-2" onClick={decrement}>
              -
            </button>
            <button className="btn btn-secondary m-2" onClick={reset}>
              Reset
            </button>
          </div>
        </div>
      );
    }
    

export default Counter;