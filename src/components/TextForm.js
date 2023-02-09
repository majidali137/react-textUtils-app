import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }

    const handleLoClick = () =>{
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Remove Extra Spaces!", "success")
    }
    const handleClearClick = ()=> {
        let newText = ''
        setText(newText)
        props.showAlert("Text Clearted!", "success")
    }

    const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="form-group">
        <textarea className="form-control" value={text} onChange={handleOnChange}style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
       </div>
     <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase </button> 
     <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase </button> 
     <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces </button> 
     <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text </button> 
 </div>
 <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} Characters</p>
    <p>{0.008 * text.split(" ").length } Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox about to preview it here."}</p>
 </div>
 </>

  )
}
