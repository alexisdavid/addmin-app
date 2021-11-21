import React ,{useEffect, useState} from "react";

export default function Alert({ type = "success", text = "", message = "" ,show,setShow}) {
  //  primary
  // secondary
  // info
  // success
  // danger
  // warning
  const [open, setOpen] = useState(false);
  useEffect(()=>{
if(show){
    setTimeout(() => {
        setShow({type:'',text:'',message:'',show:false})
    }, 5000);
}
  },[show])
  return (
    <div className=" ">
      {show && <div className=' animate__animated animate__fadeIn'>
        <div class={`alert alert-${type} text-white`} role="alert">
          <strong>{text}</strong> {message}
        </div>
      </div>}
    </div>
  );
}
