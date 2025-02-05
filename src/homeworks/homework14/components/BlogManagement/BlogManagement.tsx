import { BlogManagementWrapper, ButtonStyled, InputStyled } from "./styles";
import Card from "../Card/Card";
import { ChangeEvent, createContext, useState } from "react";

export const BlogContext = createContext<string>('');

function BlogManagement() {
    const [message, setMessage] = useState<string>('');
    const [postedMessage, setPostedMessage] = useState<string>("");

    const onChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    const postMessage = () => setPostedMessage(message);
    setMessage("");

    return (
        <BlogContext.Provider value={postedMessage}>
            <BlogManagementWrapper>
                <InputStyled name='inputMessage' type="textarea" placeholder="Enter your message..." onChange={onChangeMessage} value={message} />
                <ButtonStyled name="POST" type="button" onClick={postMessage} />
                <Card />
            </BlogManagementWrapper>
        </BlogContext.Provider >
    );
}

export default BlogManagement;