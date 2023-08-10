import React, {useState}  from 'react'

export default function TextForm(props) {
  const [text, setText]= useState('');

  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText); 
    props.showAlert('Converted to UpperCase!','success');
  }

  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to LowerCase!','success');

  }
  const handleClear=()=>{
    let newText='';
    setText(newText);
    props.showAlert('Text cleared!','success');

  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const handleCopy=()=>{
    let text=document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text copied to clipboard! ','success');

  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert('Extra spaces removed!','success');

  }
  const handleCapitalize=()=>{
    let arr1=text.split(' ');
    

    for(let i=0;i<arr1.length;i++){
      // console.log(no,ele);
      // no+=1;
      arr1[i]=arr1[i].charAt(0).toUpperCase()+arr1[i].slice(1);
    }
    const capitalText=arr1.join(' ');
    setText(capitalText);
    props.showAlert('Text capitalized!','success');

  }


 



  return (
    <>
    <div className={`container text-${props.mode === 'light'?'dark':'light'}`}>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" id="mybox" rows="8" onChange={handleOnChange}
        value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white' ,          color:props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to UPPERCASE</button>
      <button className="btn btn-primary m-3 m-lg-2" onClick={handleLoClick}>Convert to lowercase</button>
      <button className="btn btn-primary m-3 m-lg-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary m-3 m-lg-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-primary m-3 m-lg-2" onClick={handleCapitalize}>Capitalize Sentence</button>

      <button className="btn btn-primary m-3 m-lg-2" onClick={handleClear}>Clear Text</button>

      

    </div>

    <div className={`container my-4 text-${props.mode === 'light'?'dark':'light'}`}>
      <h2>Your Text Summary</h2>
      <p>{text.split(' ').length} words and {text.length} Characters</p>
      <p>{0.008 * text.split(' ').length} Minutes will be taken to read </p>
    <h2 >Preview</h2>
    <p>{text.length>0?text:'Enter something in the box to preview it here'}</p>
    </div>
        </>
  )  
}
