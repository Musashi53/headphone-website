import { useState } from "react";
import { Scroll } from "./styles";

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState<boolean>(true);
  return (
    <Scroll showScroll={showScroll}>
      <i className="ri-arrow-up-s-line"/>
    </Scroll>
  );
};

export default ScrollUp;