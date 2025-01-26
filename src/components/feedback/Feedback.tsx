import { useState } from "react";
import "./styles.css";
import Button from "../Button/Button";
import likeIcon from "../../assets/like-icon.svg";
import dislikeIcon from "../../assets/dislike-icon.svg";

function Feedback() {
  const [countLikes, setLikes] = useState<number>(0);
  const [countDislikes, setDislikes] = useState<number>(0);

  const incrLikes = () => {
    setLikes((state) => state + 1);
  };
  const incrDislikes = () => {
    setDislikes((state) => state + 1);
  };

  const reset = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedback-wrapper">
      <div className="feedback-container">
        <div className="counter">{countLikes}</div>
        <div className="button-wrapper">
          <Button
            type='button'
            name="Like"
            onClick={incrLikes}
            imgSrc={likeIcon}
            altImg="Like Icon"
          />
        </div>
        <div className="button-wrapper">
          <Button
            type='button'
            name="Dislike"
            onClick={incrDislikes}
            imgSrc={dislikeIcon}
            altImg="Dislike Icon"
          />
        </div>
        <div className="counter">{countDislikes}</div>
      </div>
      <div className="button-wrapper">
        <Button type='button' id="reset-button" name="RESET" onClick={reset} />
      </div>
    </div>
  );
}

export default Feedback;
