import ContentHeader from "../../layout/ContentHeader";
import CrudController from "../../controller/CrudController";
import { useEffect, useState } from "react";

const Index = () => {
  const breadcrumb = [
    // {
    //   title: "index",
    //   url: "index",
    // },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    CrudController.home()
      .then((res) => {
        if (res.data.status_code === 200) {
          setData(res.data.categories);
          console.log(data);
        }
      })
      .catch((err) => {
        console.log("error");
      })
      .finally(() => {
        console.log("finally");
      });
  }, []);

  //   console.log(CrudController.home());

  return (
    <>
      <ContentHeader name="Crud" breadcrumb={breadcrumb} />
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">All Data</h3>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <table
                    id="example2"
                    className="table table-bordered table-hover"
                  >
                    <thead>
                      <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {data.map((v) => {
                        return (
                          <tr>
                            <td>1</td>
                            <td>Internet Explorer 4.0</td>
                            <td>Win 95+</td>
                            <td>X</td>
                          </tr>
                        );
                      })} */}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>3</th>
                        <th>Browser</th>
                        <th>Platform(s)</th>
                        <th>CSS grade</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                {/* /.card-body */}
              </div>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </section>
      {/* /.content */}
    </>
  );
};
export default Index;
