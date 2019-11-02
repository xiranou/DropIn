import React from "react";
import CenteredColumns from "./CenteredColumns";
import "./ContentCards.scss";
import Card from "./Card";

function ContentCards({ classes, focusedClassId }) {
  return (
    <CenteredColumns>
      {classes.map(classDetails => {
        const isFocused = focusedClassId === classDetails.id;

        return (
          <Card
            classDetails={classDetails}
            isFocused={isFocused}
            key={`class-card-${classDetails.id}`}
          />
        );
      })}
    </CenteredColumns>
  );
}

export default ContentCards;
