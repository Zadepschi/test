import { useEffect, useState } from "react";

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
          src="https://cdn.icon-icons.com/icons2/2020/PNG/512/arrow_cloud_up_upload_icon_123722.png"
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
