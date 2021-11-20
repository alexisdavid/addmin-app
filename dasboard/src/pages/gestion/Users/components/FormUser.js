import React from 'react'

export default function FormUser() {
    return (
        <div>
             <div class="input-group input-group-outline mb-4">
      <label class="form-label">Nombre</label>
      <input type="text" class="form-control"/>
    </div>
             <div class="input-group input-group-outline mb-4">
      <label class="form-label">Usuario</label>
      <input type="text" class="form-control"/>
    </div>
             <div class="input-group input-group-outline mb-4">
      <label class="form-label">Email</label>
      <input type="text" class="form-control"/>
    </div>
    <div class="input-group input-group-static mb-4">
     <label for="exampleFormControlSelect1" class="ms-0">Departamento</label>
     <select class="form-control" id="exampleFormControlSelect1">
       <option>1</option>
       <option>2</option>
       <option>3</option>
       <option>4</option>
       <option>5</option>
     </select>
   </div>
    <div class="input-group input-group-static mb-4">
     <label for="exampleFormControlSelect1" class="ms-0">Grupo</label>
     <select class="form-control" id="exampleFormControlSelect1">
       <option>1</option>
       <option>2</option>
       <option>3</option>
       <option>4</option>
       <option>5</option>
     </select>
   </div>
             <div class="input-group input-group-outline mb-4">
      <label class="form-label">Password</label>
      <input type="password" class="form-control"/>
    </div>
        </div>
    )
}
