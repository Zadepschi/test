import { useEffect, useState } from "react";
import ok from './ok.png';

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopBautton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopBautton(true);
      } else {
        setBackToTopBautton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopButton && (
        <img
          src={ok}
          onClick={scrollUp}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            width: "60px",
            fontSize: "50px",
          }}
          alt="icon"
        />
      )}
    </div>
  );
};
export default BackToTopButton;
