import { useState } from "react";
import "./index.css"

export default function App() {
  const[myStep,setMyStep] = useState(1);
  const[myCount,setMyCount]=useState(0);

const date = new Date()
  date.setDate(date.getDate() + myCount);

  return (
    <>
    <div className="cn">
      <button onClick={()=>myStep>1 ? setMyStep(myStep-1): ""}> - </button>
        <span> Step: {myStep} </span>
      <button onClick={()=>setMyStep((c)=>c+1)}> + </button>       
    </div>

    <div className="cn">
      <button onClick={()=>setMyCount((c)=>c-myStep)}> - </button>
        <span> Count: {myCount} </span>
      <button onClick={()=>setMyCount((c)=>c+myStep)}> + </button>
      </div>

      <div className="cn">
        <p>
          <span>{myCount === 0
            ? " Today is "
            : myCount > 0
              ? `${myCount} days from today is `
              :`${Math.abs(myCount)} days ago was `
            }</span>
          <span>{date.toDateString()}</span>
          
        </p>

    </div>
    </>
  );
}

