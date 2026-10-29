import { useState } from "react";

const LiveInput = () => {
    const [text, setText] = useState("");
    
    const handleChange = (e) => {
        setText(e.target.value);
    }

    return(
        <>
        <input type="text"
        value={text}
        placeholder="텍스트를 입력하세요"
        onChange={handleChange}></input>
        <p>입력값 : {text}</p>
        </>
    )
}

export default LiveInput;