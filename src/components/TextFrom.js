import React, { useState } from "react";

export default function TextFrom(props) {

  const [text, setText] = useState("");
  const [Email, setInfo] = useState("");

  const HandleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleExtractClick = () => {
    var fromat = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/g;
    setInfo(text.match(fromat)+" ")
    if(Email == null){
      props.showAlert(" Email Extracted" , "success")
    }
    else{
      setInfo("Email Not Found")
      props.showAlert(" Email Not Found" , "warning")
    }
  };

  return (
    <>
    <div style={{ color: props.mode === 'light' ? '#212529' : 'white' }}>
    <div className="contrainer">
      <h1>Enter Your Text Below</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text}
          style={{background: props.mode==='light'?'#212529':'white', color: props.mode==='light'?'white':'#212529'}} onChange={HandleOnChange} id="exampleFormControlTextarea1" rows="12"></textarea>
        </div>
        <button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-2`} onClick={handleExtractClick}>
          Email Extractor
        </button>
      </div>
      <div className="Container my-2">
          <h1>Summary</h1>
          <p> {text.split(" ").length-1} Words and {text.length} Characters</p>
          <p>Can Read In {0.008 * text.split(" ").length} Minutes</p>
        </div>
      <div className="Container my-2">
          <h1>Extracted Email</h1>
          <p>{Email}</p>
      </div>
    </div>
    </>
  );
}
