import React, {useState} from 'react'

export default function Textform(props) {


     const handleUpClick = ()=>
     {
        console.log('Clicked' + text);
         let uppercase = text.toUpperCase();
        setText(uppercase);
        props.showAlert ("Converted to UpperCase", "success");
     }

           const handleLoClick = ()=>
           {
        console.log('Clicked' + text);
         let lowercase = text.toLowerCase();
        setText(lowercase);
        props.showAlert ("Converted to LowerCase", "success");
           }

           const handleClearClick = ()=>{
            console.log('Clicked' + text);
             let clearcase = " ";
            setText(clearcase);
               }

const handleCopyClick = ()=>{
  let tp = document.getElementById("myBox")
  tp.select();
  navigator.clipboard.writeText(tp.value);
}


const handleExtraSpaces = (event)=>{
  let removespace = text.split(/[ ]+/);
  setText(removespace.join(" "));
  props.showAlert ("Extra Spaces has been removed", "success");
}

     const handleOnChange = (event)=>{
        console.log('On Chnaged');
        setText(event.target.value)
     }

    const [text, setText] = useState('Enter the text');
  //  setText =('New Text');

  return (
    <>
   
    <div className="container" style={{color: props.mode === 'light'?'black': 'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            
              <textarea className="form-control" value={text} onChange = {handleOnChange} id="myBox" rows="12" style={{color: props.mode === 'light'?'black': 'white', backgroundColor: props.mode === 'light'?'white': '#363636'}}></textarea>
              
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick} >Covert the text to UpperCase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick} >Covert the text to LowerCase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
<button className="btn btn-primary mx-1" onClick={handleCopyClick} >Copy Text</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'light'?'black': 'white'}}>
      <h1>Text Summary</h1>
      <p>These are {text.split(" ").length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Read Minutes</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter some text here"}</p>
    </div>

    </>
  )
}