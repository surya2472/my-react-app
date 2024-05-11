import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to Uppercase!","success");
    }

    const handleLowClick=()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to Lowercase!","success");
    }

    const handleClearClick=()=>{
        //console.log("Uppercase was clicked" + text);
        let newText ='';
        setText(newText);
        props.showAlert("Text cleared!","success");
    }

    const handleOnChange=(event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }

    const handleCopy =() =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!","success");
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces!","success");
    }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark' ? 'white':'#042743'}}>
        <h1>{props.heading}</h1>    
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark' ? '#13466e' : 'white',color:props.mode==='dark' ? 'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>

        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color:props.mode==='dark' ? 'white':'#042743'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>It took {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above text box to preview it here"}</p>
    </div>
    </>
  )
}
