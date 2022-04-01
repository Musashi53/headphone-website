import { Scroll } from "./styles";

const ScrollUp = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Scroll onClick={() => scrollUp()}>
      <i className="ri-arrow-up-s-line"/>
    </Scroll>
  );
};

export default ScrollUp;