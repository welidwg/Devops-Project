import WrapperDash from "./Layout/WrapperDash";

export default function IndexDashboard(props) {
  return (
    <WrapperDash>
      <div className="row" data-aos="zoom-in" data-aos-duration="1000">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Vous avez</h3>
              <p className="card-text">Cars</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Title</h3>
              <p className="card-text">Text</p>
            </div>
          </div>
        </div>
      </div>

      <h5>test</h5>
    </WrapperDash>
  );
}
