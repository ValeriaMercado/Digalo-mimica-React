import React from "react";
import { Card1 } from "./card1/Card1";
import { Card10 } from "./card10/Card10";
import { Card11 } from "./card11/Card11";
import { Card12 } from "./card12/Card12";
import { Card13 } from "./card13/Card13";
import { Card14 } from "./card14/Card14";
import { Card15 } from "./card15/Card15";
import { Card2 } from "./card2/Card2";
import { Card3 } from "./card3/Card3";
import { Card4 } from "./card4/Card4";
import { Card5 } from "./card5/Card5";
import { Card6 } from "./card6/Card6";
import { Card7 } from "./card7/Card7";
import { Card8 } from "./card8/Card8";
import { Card9 } from "./card9/Card9";

export const CardContainer = ({ card }) => {
  if (card === 1) {
    return <Card1 />;
  }

  if (card === 2) {
    return <Card2 />;
  }

  if (card === 3) {
    return <Card3 />;
  }

  if (card === 4) {
    return <Card4 />;
  }
  if (card === 5) {
    return <Card5 />;
  }
  if (card === 6) {
    return <Card6 />;
  }
  if (card === 7) {
    return <Card7 />;
  }
  if (card === 8) {
    return <Card8 />;
  }
  if (card === 9) {
    return <Card9 />;
  }
  if (card === 10) {
    return <Card10 />;
  }
  if (card === 11) {
    return <Card11 />;
  }
  if (card === 12) {
    return <Card12 />;
  }
  if (card === 13) {
    return <Card13 />;
  }
  if (card === 14) {
    return <Card14 />;
  }
  if (card === 15) {
    return <Card15 />;
  }
};
