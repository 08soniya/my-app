import React, {useState} from 'react';

export default function TextForm(props) {
  const handleOnChange = (event) => {
    //console.log("On change");
    setText(event.target.value)
  }
  const handleUpClick = () => {
    //console.log(text);
    let newText = text.toUpperCase()
    setText(newText);
    props.showAlert("Text transfoerm to uppercase",'success')
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase()
    setText(newText);
    props.showAlert("Text transform to Lowercase",'success')
  }
  const handleFirstClick = () => {
    let newText = text.toLowerCase().replace(/\b[a-z]/g, (letter) => {
        return letter.toUpperCase();
    });
    setText(newText);
    props.showAlert("First Letter Capital",'success')
  }
  const handleCopy = () => {
    let copy = document.getElementById('textBox');
    copy.select();
    navigator.clipboard.writeText(copy.value);
    props.showAlert("Text Copy to Clipboard",'success')
  }

  const handleExtraSpace = () => {
    setText(text.replace(/\s+/g,' ').trim());
    props.showAlert("Extra space remove",'success')
  }

  const handleClearClick = () => {
    setText("")
  }
  const [text,setText] = useState("Enter your value");
  return (
    <div className={`mt-4 text-${props.mode==='dark'?'light':'dark'}`}>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          {props.alert.msg}
        </div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className={`form-control mb-4 text-${props.mode==='dark'?'light':'dark'}`} value={text} onChange={handleOnChange} id="textBox" rows="8" style={{backgroundColor: props.mode==='dark'?'#252f3e':'#fff'}}></textarea>
            <button className="btn btn-primary mx-1 " onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleFirstClick}>Convert to First Letter in Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Extra Space Remove</button>
            <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear</button>
        </div>
        <hr />
        <h2>Your text details-</h2>
        <p>{text.split(" ").length} words and {text.length} characters.</p>
        <h2>Your Preview</h2>
        <p>{text===''?'Please Enter your Text to preview':text}</p>
    </div>
  )
}
