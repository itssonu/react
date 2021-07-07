import React from "react";

const Ui = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default Ui;
