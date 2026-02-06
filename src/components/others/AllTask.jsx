import React, { useContext } from 'react'
import {AuthContext} from '../../context/AuthProvider'

const AllTask = () => {

  const authData = useContext(AuthContext);
  

  return (
    <div className="bg-[#1c1c1c] p-5  rounded mt-5 overflow-auto">
      <div className="bg-blue-950 mb-2  py-2 px-4 flex justify-between rounded ">
        <h2 className="text-lg font-bold w-1/5">Employee Name</h2>
        <h3 className="text-lg font-bold w-1/5"> New Task</h3>
        <h5 className="text-lg font-bold w-1/5">Active </h5>
        <h5 className="text-lg font-bold w-1/5">Completed</h5>
        <h5 className="text-lg font-bold w-1/5">Failed</h5>
      </div>

      <div className=' overflow-auto'>
        {authData.employees.map(function (elem,idx) {
          return (
            <div key={idx}  className="bg-blue-500 mb-2  py-2 px-4 flex justify-between rounded ">
              <h2 className="text-lg font-semibold w-1/5 text-blue-950">{elem.firstname}</h2>
              <h3 className="text-lg font-semibold w-1/5 text-blue-800">{elem.taskNumber.newTask} </h3>
              <h5 className="text-lg font-semibold w-1/5 text-blue-800">{elem.taskNumber.active}</h5>
              <h5 className="text-lg font-semibold w-1/5 text-blue-800">{elem.taskNumber.completed}</h5>
              <h5 className="text-lg font-semibold w-1/5 text-blue-800">{elem.taskNumber.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllTask
