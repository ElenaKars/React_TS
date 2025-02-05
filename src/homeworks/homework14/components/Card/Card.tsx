import { useContext } from "react";
import Message from "../Message/Message";
import { CardWrapper, Username } from "./styles";
import { BlogContext } from "../BlogManagement/BlogManagement";

function Card() {
    const postMessage = useContext(BlogContext);
    return (
        // <CardWrapper>
        <CardWrapper isShowResult={!!postMessage}>
            <Username>Tom Smith</Username>
            <Message />
        </CardWrapper>
    );
};

export default Card;