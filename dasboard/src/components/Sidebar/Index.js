import React, { useEffect, useState } from 'react'
import Request from '../../utils/http'
import { NameInformation, ListModules } from './components/Components'
const request = new Request()


export default function Sidebar() {
  const [modules, setModules] = useState([])
  useEffect(() => {
    getMenus()
  }, []);
  const getMenus = async () => {
    const response = await request.get('menusList/getMenus')
    if (response && response.statusCode == 200) {
    
      setModules(response.result.menus)
    }
  }
  return (
    <aside className=" sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-white" id="sidenav-main">
      <NameInformation name={'DGDevelopers'} icon={"fas fa-times p-3 cursor-pointer text-dark opacity-0 position-absolute end-0 top-0 d-none d-xl-none"} image={"../assets/img/logo-ct-dark.png"} />
      <hr className="horizontal light mt-0 mb-2" />
      <div className=" containerScroll collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main">
        <ListModules modules={modules} />
      </div>

    </aside>
  )
}
