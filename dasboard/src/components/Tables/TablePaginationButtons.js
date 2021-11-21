import React,{useState,useEffect} from "react";
const TablePaginationButtons = (props) => {
  const { options,fetchData } = props;
    const [navs,setNavs]=useState([])
   useEffect(() =>{
       if (options.links.length>0) {
           setNavs(options.links)
       }
   },[props])
    return (
        <div className="d-flex justify-content-end">

        <ul className="pagination pagination-primary">
        {navs.map((option, index)=>(
                        
                        <li className={`page-item ${option.active&&'active'}`}  key={index}>
                            <button className={`page-link ${option.url==null&&'disabled'}`} disabled={option.url==null?true:false} onClick={e=>fetchData(option.url,{})}>
                                {index ==0?(
                                <a className="page-link" href="#link" aria-label="Previous">
                                  <span aria-hidden="true">
                                    <span className="material-icons">
                                      keyboard_arrow_left
                                    </span>
                                  </span>
                                </a>
                             ):index==(options.links.length-1)?(
                              <a className="page-link" href="#link" aria-label="Next">
                              <span aria-hidden="true">
                                <span className="material-icons">
                                  keyboard_arrow_right
                                </span>
                              </span>
                            </a>
                             ):option.label}
                            </button>
                        </li>
                   
           
                ))}
        <li className="page-item">
          
        </li>
        {/* <li className="page-item">
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
        </li> */}
      </ul>
        </div>
    );
};

export default TablePaginationButtons;