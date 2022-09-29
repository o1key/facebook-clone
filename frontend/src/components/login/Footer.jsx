import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        {[...Array(3)].map((x, i) => (
          <div key={i} className="wave" id={`wave${i}`}></div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
