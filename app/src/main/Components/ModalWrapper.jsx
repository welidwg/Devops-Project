export default function ModalWrapper(props) {
  return (
    <div className="modal fade " id={props.id} tabIndex="-1">
      <div className={`modal-dialog ${props.size}`} role="document">
        <div className="modal-content bg-dark">
          <div className="modal-header">
            <h5 className="modal-title color-1 fw-bold" id="modalTitleId">
              {props.title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{props.children}</div>
        </div>
      </div>
    </div>
  );
}
