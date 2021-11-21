
import React, { useState, useEffect } from "react";
import CardHeader from "../../../components/Tables/CardHeader";
import TableContainer from "../../../components/Tables/TableContainer";
import TablePaginationButtons from "../../../components/Tables/TablePaginationButtons";
import Wraptable from "../../../components/Tables/WrapTable";
import SimpleTable from "../../../components/Tables/SimpleTable";
import Layout from "../../Layout";
import ModalComponent from "../../../components/ModalComponent/ModalComponent";
import Request from "../../../utils/http";
import fetchNextData from "../../components/fetchNexData";
import Alert from "../../../components/Alerts/Alert";
const request=new Request()
const columns = [
  {
    label: "Nombre",
    body: "departmentName",
    customClass:
      "text-uppercase text-secondary text-xxs font-weight-bolder opacity-7",
  },
  {
    label: "",
    body: "departmentName",
    customClass:
      "text-uppercase text-secondary text-xxs font-weight-bolder opacity-7",
      customRender: (valor) => (
       
        <div className="d-flex">
          <button class="btn btn-icon btn-2  " type="button" data-bs-toggle="modal" data-bs-target="#addUser">
            <span class="btn-inner--icon">
              <i class="material-icons text-info">edit</i>
            </span>
          </button>
          <button class="btn btn-icon btn-2  " type="button">
            <span class="btn-inner--icon ">
              <i class="material-icons text-primary">delete</i>
            </span>
          </button>
        </div>
      ),
  },
];
export default function Department() {
  const [data, setData] = useState([]);
  const [department, setDepartment] = useState({ id: 0, name: '' });
  const [groups, setGroups] = useState([]);
  const [options, setOptions] = useState({ links: [] });
  const[alert,setAlert]=useState({type:'',text:'',message:'',show:false})


  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let depts = await fetchNextData("departments/getDepartments?page=1", {});
    setData(depts.data);
    setOptions({ ...options, links: depts.links });
  };

  const fetchData = async (url, options) => {
    let d = url.lastIndexOf("/");
    let users = await fetchNextData(
      `departments/${url.substr(d + 1)}`,
      options
    );
    setData(users.data);
    setOptions({ links: users.links });
  };
 
  const addLine = () => {
    let copia = JSON.parse(JSON.stringify(groups));
    copia.push({ departments_id: 0, descriptions: "", active: 0 });
    setGroups(copia);
  };
  const handleChangeLines = (e, key) => {
    let copia = JSON.parse(JSON.stringify(groups));
    if (e.target.name === "nombre") {
      copia[key].descriptions = e.target.value;
    } else {
      copia[key].active = e.target.checked == false ? 0 : 1;
    }
    setGroups(copia);
  };
const handleDelete=(posicion)=>{
  let copia = JSON.parse(JSON.stringify(groups))
  copia.splice(posicion,1)
  setGroups(copia)
}
  const close=()=>{
    setGroups([])
    setDepartment({ id: 0, name: '' })
  }

  const handleSumbit=async()=>{
    let data = {
      id:department.id,
      departmentName: department.name,
      groups: groups
    }
    const  response = await request.post('departments/save', data)
    console.log("🚀 ~ file: Department.js ~ line 101 ~ handleSumbit ~ response", response)
    if (response && response.statusCode==200) {
      if (response.resultsuccess) {
        setAlert({type:'success',text:'',message:'Guardado con exito',show:true})
        
      }else{
        setAlert({type:'danger',text:'',message:'No puedes dejar espacios en blanco',show:true})
      }
    }else{
      setAlert({type:'danger',text:'',message:'error',show:true})
    }
  }
  return (
    <Layout>
      
      <Wraptable>
        <ModalComponent
          content={
            <DepartmentForm 
            addLine={addLine}
            handleChangeLines={handleChangeLines} 
            handleDelete={handleDelete}
            department={department}
            setDepartment={setDepartment}
            groups={groups}
            alert={<Alert type={alert.type} text={alert.text} message={alert.message} show={alert.show} setShow={setAlert}/>}
            />
          }
          icon={"person_add"}
          titleButton={"Agregar"}
          modalName={"Nuevo departamento"}
          close={close}
          handleSubmit={handleSumbit}
        />
        <CardHeader nameTable={"Departamentos y grupos"} searchable={true} />
        <TableContainer>
          <SimpleTable columns={columns} data={data} />
        </TableContainer>
      </Wraptable>
      <TablePaginationButtons options={options} fetchData={fetchData} />
    </Layout>
  );
}

export const DepartmentForm = ({addLine,department,setDepartment,handleChangeLines,handleDelete,groups,alert}) => {
 
  return (
    <>
    {alert}
      <div className="row d-flex">
        <div class="input-group input-group-outline mb-4 col-md-12">
          <label class="form-label">Nombre de departamento</label>
          <input
            type="text"
            class="form-control"
            value={department.name}
            onChange={(e) => setDepartment({...department,name:e.target.value})}
          />
        </div>
        <div className="form-group col-md-12 d-flex justify-content-end">
          <button className="btn btn-outline-warning btn-sm " onClick={addLine}>
            <i className="feather icon-plus-circle"></i> Nuevo Grupo
          </button>
        </div>
        <div className="form-group col-md-12">
          <table className="table table-hanan table-striped ">
            <thead>
              <tr>
                <th>Nombre de Grupo</th>
                <th>Activo</th>
                <th></th>
              </tr>
            </thead>
            </table>
            <div
              style={{ height: "330px", width: "100%", overflowY: "scroll" }}
            >
              <table className="table table-hanan table-striped ">
                <tbody>
                  {groups.map((group, i) => (
                    <tr key={i}>
                      <td>
                        <div class="input-group input-group-outline mb-4 col-md-12">
                          <input type="text"
                            class="form-control"
                            className={`form-control ${group.descriptions.length < 1 ? "border-danger" : "" } `}
                            name="nombre"
                            value={group.descriptions}
                            onChange={(e) => handleChangeLines(e, i)}
                            placeholder="Departamento"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="custom-control custom-checkbox ">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id={`customCheck${i}`}
                            name="activo"
                            checked={group.active == 0 ? false : true}
                            onChange={(e) => handleChangeLines(e, i)}
                          />
                          <label
                            className="custom-control-label"
                            for={`customCheck${i}`}
                          ></label>
                        </div>
                      </td>
                      <td>
                        <button class="btn btn-icon btn-2  " type="button" onClick={e=>handleDelete(i)}>
                          <span class="btn-inner--icon d-flex justify-content-end">
                            <i class="material-icons text-primary">delete</i>
                          </span>
                        </button>
                      </td>
                    </tr>
                  ))}
                  {/* <Refill numColumns={5 - groups.length} rows={2} /> */}
                </tbody>
              </table>
            </div>
          
        </div>
      </div>
    </>
  );
};
