import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
   // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
 }
  const handleLoClick = () => {
   // console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
 }
  const handleClearClick = () => {
   // console.log("Uppercase was clicked");
    let newText = "";
    setText(newText);
 }
  const handleOnChange = (event) => {
   // console.log("Uppercase was clicked");
    setText(event.target.value);
 }

  const [text, setText] = useState("");
  return (
    <>
      <div>
        
          <h2 className={`text-${props.revMode}`}>{props.heading }</h2>  
          <div className="mb-3">
          <textarea className="form-control"  id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} rows="8"></textarea>
          </div>
           <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
           <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
           <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
           <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      </div>
      
      <div className="container my-3"></div>
      <h2 className={`text-${props.revMode}`}>Text Summary</h2>
      <p className={`text-${props.revMode}`}><strong>{text.split(" ").length}</strong> words and <strong>{text.length} </strong> characters.</p>
      <p className={`text-${props.revMode}`}>Reading time in minutes: <strong>{0.008 * text.split(" ").length}</strong></p>
      
      <h2 className={`text-${props.revMode}`}>Preview</h2>
      <p className={`text-${props.revMode}`}>{text}</p>

      </>
  )
}
