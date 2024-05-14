import { useState } from "react";
import "./index.css"

export default function App() {
  const[myStep,setMyStep] = useState(1);
  const[myCount,setMyCount]=useState(0);

  function handleReset() {
    setMyCount(0)
    setMyStep(1)
}

const date = new Date()
  date.setDate(date.getDate() + myCount);

  return (
    <>
      <div className="cn">
        <div>
          <input type="range" min='0' max='10' value={myStep} onChange={(e) => setMyStep(Number(e.target.value))} />
          <span>Step: { myStep}</span>
        </div>
            

   {/*    <button onClick={()=>myStep>1 ? setMyStep(myStep-1): ""}> - </button>
        <span> Step: {myStep} </span>
      <button onClick={()=>setMyStep((c)=>c+1)}> + </button>    */}    
    </div>

    <div className="cn">
      <button onClick={()=>setMyCount((c)=>c-myStep)}> - </button>        
        <input type="text" value={myCount} onChange={(e)=>setMyCount(Number(e.target.value))}/>
      <button onClick={()=>setMyCount((c)=>c+myStep)}> + </button>
      </div>
        <span> Count: {myCount} </span>
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

        { (myCount!==0 || myStep !== 1) ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>):null } 
    </div>
    </>
  );
}

