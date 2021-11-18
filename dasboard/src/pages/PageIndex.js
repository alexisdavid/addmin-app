import React,{useState,useEffect} from 'react';
import Request from '../utils/http'

var base64 = require('base-64');  
const request = new Request();




const PageIndex = (props) => {
    const {history}=props;
    const [credentials,setCredentials] = useState({user:'',password:''})
    useEffect(() => {
        const isAuth = window.sessionStorage.getItem("token");
        if (isAuth)  history.push('/home');
      });
    const handleChange=(e) =>   setCredentials({...credentials,[e.target.name]:e.target.value})

    const login =async (e)=>{
        e.preventDefault();
        let userInfo;
        const response = await request.post('auth/login',{userCode:credentials.user,password:credentials.password}) 
        if (response && response.statusCode==200 ) {
            let token = {
             user:response.result.user,
              token: response.result.access_token
            };
            let datos = JSON.stringify(token);
            userInfo = base64.encode(datos);
            window.sessionStorage.setItem("token", JSON.stringify(userInfo));
            window.location.replace('/home');
            // history.push('/home')
            
          }
    }
 
    return (
        
     <>
       
  <main className="main-content  mt-0">
    <div className="page-header align-items-start min-vh-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')"}}>
      <span className="mask bg-gradient-dark opacity-6"></span>
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-4 col-md-8 col-12 mx-auto">
            <div className="card z-index-0 fadeIn3 fadeInBottom">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                  <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Iniciar Sesion</h4>
             
                </div>
              </div>
              <div className="card-body">
                <form role="form" className="text-start" onSubmit={login}>
                  <div className="input-group input-group-outline my-3">
                    <label className="form-label">Usuario</label>
                    <input type="text" name='user' className="form-control"/>
                  </div>
                  <div className="input-group input-group-outline mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name='password' className="form-control"/>
                  </div>
                
                  <div className="text-center">
                    <button type="submit" className="btn bg-gradient-primary w-100 my-4 mb-2" onClick={login}>Login</button>
                  </div>
                  <p className="mt-4 text-sm text-center">
                    No recuerdas tu password??
                    <span className="text-primary text-gradient font-weight-bold"> contacta a sistemas</span>  
                  </p> 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  </main>
     
     
     </>
    );
};

export default PageIndex;