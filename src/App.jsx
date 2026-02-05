import React, {useContext, useEffect } from 'react'
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { useState } from 'react';
import { AuthContext } from './context/AuthProvider';


const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext);
  
  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if (loggedInUser)
  //     {
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // },[authData])

  const handleLogin = (email, password) => {
    
    if (email == "admin@example.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    }

    else if (authData && authData.employees) {
      const employee = authData.employees.find(
        (e) => e.email == email && e.password == password,
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" }),
        );
      }
    } else {
      alert("Invalid credentials");
    }
  }

  


  useEffect(() => {
    setLocalStorage()
    getLocalStorage()
  },[])

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData}/> : null)}

      {/* <EmployeeDashboard/> */}

      {/* <AdminDashboard /> */}
      
    </>
  );
}

export default App
