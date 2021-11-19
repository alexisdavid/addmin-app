import React,{useState} from 'react'
import {Link} from 'react-router-dom'
export const NameInformation = ({ name, image, icon }) => (
    <div className="sidenav-header">
      <i className={icon} aria-hidden="true" id="iconSidenav"></i>
      <Link className="navbar-brand m-0" to={'/home'} >
        <img src={image} className="navbar-brand-img h-100" alt="main_logo" />
        <span className="ms-1 font-weight-bold text-white">{name}</span>
      </Link>
    </div>
  )
 export const SubModule =({name,icon,url})=>(
   <Link to={url}>
    <span className="nav-link text-white ml-3 d-flex justify-content-center">
        <div className="text-white text-center me-2 d-flex ">
          <i className="material-icons opacity-10">{icon}</i>
        </div>
        <span className="nav-link-text ms-1">{name}</span>
      </span>
   </Link>
  )
 export const Module = ({icon,name,subMenus}) =>{
        const [clicked,setClicked]=useState(false)
        const handleClick =()=>setClicked(!clicked)
    return <li className="nav-item">
      <span className="nav-link text-white "onClick={handleClick}>
        <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
          <i className="material-icons opacity-10">{icon}</i>
        </div>
        <span className="nav-link-text ms-1">{name}</span>
      </span>
     {clicked && <ul className="navbar-nav pl-5 ">
        {subMenus.map(subMenu =>(<SubModule name={subMenu.submodule} icon={subMenu.icon}  handleClick={handleClick} url={subMenu.url} />))}
      </ul>}
    </li>
 } 
  
 export const ListModules = ({ modules }) => (
    <ul className="navbar-nav ">
      <li className="nav-item">
        <Link className="nav-link text-white active bg-gradient-info" to={'/home'}>
          <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
            <i className="material-icons opacity-">dashboard</i>
          </div>
          <span className="nav-link-text ms-1">Home</span>
        </Link>
      </li>
     {modules.map((module)=> <Module icon={module.icon} name={module.module} subMenus={module.submenusList} key={module.id}/>)}
  
    </ul>
  )