import { useContext } from "react";
import { MessageWrapper } from "./styles";
import { BlogContext } from "../BlogManagement/BlogManagement";


function Message() {
    const message = useContext(BlogContext);
    return (
        <MessageWrapper>{message ? message : "nothing to post yet"}
        </MessageWrapper>
    );
}

export default Message;