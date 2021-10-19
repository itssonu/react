import React from "react";

const ContentHeader = (props) => {
  return (
    <div>
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>{props.name}</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="fake_url">Home</a>
                </li>
                {props.breadcrumb.map((v, k) => (
                  <li key={k} className="breadcrumb-item">
                    <a href={v.url}>{v.title}</a>
                  </li>
                ))}
                <li className="breadcrumb-item active">{props.name}</li>
              </ol>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
    </div>
  );
};

export default ContentHeader;
