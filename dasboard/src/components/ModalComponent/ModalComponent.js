import React from "react";

export default function ModalComponent(props) {
    const {content,icon,titleButton,modalName,close,handleSubmit}=props
  return (
    <>
      <div className=" m-2 mb-3">
        <button
          type="button"
          className="btn btn-outline-info"
          data-bs-toggle="modal"
          data-bs-target="#showModal"
        >
          <i className="material-icons text-info">{icon}</i>
          {titleButton}
        </button>
      </div>
      <Modal modalName={modalName} close={close} handleSubmit={handleSubmit}>
        {content}
      </Modal>
    </>
  );
}
const Modal=({children,modalName,close,handleSubmit})=>{
    return (
        <div className="modal fade" id="showModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title font-weight-normal" id="exampleModalLabel">{modalName}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                {children}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn bg-gradient-secondary" onClick={close} data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" className="btn bg-gradient-primary"  onClick={handleSubmit}>Guardar</button>
                </div>
                </div>
            </div>
        </div>
    )
}
