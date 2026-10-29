import { useEffect } from "react";

const Page = () => {
    useEffect(() => {
        console.log("페이지 로딩...");
    },[]);

    return (
        <>
        <p>페이지</p>
        </>
    )
}

export default Page;