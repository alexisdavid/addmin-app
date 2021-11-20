import FormUser from "./FormUser"
const AddUser=({title,icon='',userInformation})=>{
return (
    <>
   <div className=' m-2 mb-3'>
    <button type="button" className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#addUser">
        <i className='material-icons text-info' >person_add</i>{title}</button>
   </div>
   <Modal modalName={'Nuevo Usuario'} >
        <FormUser/>
   </Modal>
        
   </>
)
}
export default AddUser

const Modal=({children,modalName})=>{
    return (
        <div className="modal fade" id="addUser" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                    <button type="button" className="btn bg-gradient-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn bg-gradient-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    )
}