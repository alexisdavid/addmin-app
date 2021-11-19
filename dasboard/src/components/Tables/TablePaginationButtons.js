
const TablePaginationButtons = () => {
    return (
        <div className="d-flex justify-content-end">

        <ul className="pagination pagination-info">
        <li className="page-item">
          <a className="page-link" href="#link" aria-label="Previous">
            <span aria-hidden="true">
              <span className="material-icons">
                keyboard_arrow_left
              </span>
            </span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#link">1</a>
        </li>
        <li className="page-item active">
          <a className="page-link" href="#link">2</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#link">3</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#link">4</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#link">5</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#link" aria-label="Next">
            <span aria-hidden="true">
              <span className="material-icons">
                keyboard_arrow_right
              </span>
            </span>
          </a>
        </li>
      </ul>
        </div>
    );
};

export default TablePaginationButtons;