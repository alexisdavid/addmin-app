

const TableContainer = ({ children }) => {
    return (
        <div className="card-body px-0 pb-2">
            <div className="table-responsive p-0">
                <table className="table align-items-center justify-content-center mb-0">
                     {children}
                </table>
            </div>
        </div>

    )
}

export default TableContainer
