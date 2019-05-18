import React from "react";
import TweenMax from "gsap";

const ClearButton = props => {
  const { clearCompleted } = props;

  const onClickHandler = event => {
    if (clearCompleted()) {
        console.log('hey');
      let clearButton = event.target;

      TweenMax.fromTo(
        clearButton,
        0.05,
        { x: "-5" },
        {
          x: "5",
          yoyo: true,
          repeat: 3,
          onComplete: () => {
            TweenMax.to(clearButton, 0.01, { x: "0" });
          }
        }
      );

      TweenMax.fromTo(
        clearButton,
        0.06,
        { background: "#2C8DA6" },
        { background: "#d43232", yoyo: true, repeat: 3 }
      );
    }
  };

  return (
    <button className="clear-button" onClick={onClickHandler}>
      Clear Completed
    </button>
  );
};

export default ClearButton;
