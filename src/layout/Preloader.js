import React from "react";

const Preloader = () => {
  return (
    <>
      <div className="preloader flex-column justify-content-center align-items-center">
        <img
          className="animation__wobble"
          src={
            process.env.PUBLIC_URL +
            "/admin/assets/" +
            "dist/img/AdminLTELogo.png"
          }
          alt="AdminLTELogo"
          height={60}
          width={60}
        />
      </div>
    </>
  );
};
export default Preloader;
