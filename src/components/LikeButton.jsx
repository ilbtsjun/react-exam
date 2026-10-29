import { useState } from "react";

const LikeButton = () => {
    const [count , setCount] = useState(0);
    
    const handleCount = () => {
        setCount(count + 1);
    }

    return (
    <>
        <p>좋아요{count}</p>
        <button onClick={handleCount}>👍</button>
    </>
    );
}

export default LikeButton;