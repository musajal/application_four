import { useState } from "react";

function App() {
  const[employee, setEmployee] = useState({name:'', role:''})


  return (
    <div>
      <input type="text" name="name" value={employee.name} onChange={e=>setEmployee({...employee, name:e.target.value})}/>
      <input type="text" name="role" value={employee.role} onChange={e=>setEmployee({...employee,role:e.target.value})}/><br></br>
      <span>Name is:- {employee.name}</span><br></br>
      <span>Role is is:- {employee.role}</span>
      <h3>{JSON.stringify(employee)}</h3>

    </div>
  );
}

export default App;
