import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import CardHeader from "../../../components/Tables/CardHeader";
import TableContainer from "../../../components/Tables/TableContainer";
import Wraptable from "../../../components/Tables/WrapTable";
import SimpleTable from "../../../components/Tables/SimpleTable";
import TablePaginationButtons from "../../../components/Tables/TablePaginationButtons";
import fetchNextData from "../../components/fetchNexData";
import AddUser from "./components/AddUser";

const UsersComponent = () => {
  const columns = [
    {
      label: "Nombre",
      body: "nombre",
      customClass:
        "text-uppercase text-secondary text-xxs font-weight-bolder opacity-7",
    },
    {
      label: "Usuario",
      body: "codigo",
      customClass:
        "text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2",
    },
    {
      label: "Departamento",
      body: "departmentName",
      customClass:
        "text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2",
    },
    {
      label: "Email",
      body: "email",
      customClass:
        "text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2",
    },
    {
      label: "Grupo",
      body: "descriptions",
      customClass:
        "text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2",
    },
    {
      label: "",
      body: "id",
      customClass:
        "text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2",
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

  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState([]);
  const [edit, setEdit] = useState(false);

  const [isOpen, setOpen] = useState(false);
  const [options, setOptions] = useState({
    next: "Siguiente",
    previous: "Anterior",
    links: [],
  });

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    let users = await fetchNextData("users/usersList?page=1", {});
  
    setData(users.data);
    setOptions({ ...options, links: users.links });
  }

  const fetchData = async (url, options) => {
    let d = url.lastIndexOf("/");
    let users = await fetchNextData(`users/${url.substr(d + 1)}`, options);
    setData(users.data);
    setOptions({ next: "Siguiente", previous: "Anterior", links: users.links });
  };
  const handleEdit = (user) => {
    setOpen(true);
    setEdit(!edit);
    setDataEdit(user);
  };
  return (
    <Layout>
      <Wraptable>
          <AddUser title={''} />
        <CardHeader
          nameTable={"DGDevelopers > Table > Users"}
          searchable={true}
        />
        <TableContainer>
          <SimpleTable columns={columns} data={data} />
        </TableContainer>
      </Wraptable>
      <TablePaginationButtons options={options} fetchData={fetchData} />
    </Layout>
  );
};

export default UsersComponent;
