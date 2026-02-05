import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className=" rounded-xl bg-pink-400 w-[45%] py-6 px-9">
        <h2 className="text-3xl font-semibold">{data.taskNumber.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      <div className=" rounded-xl bg-blue-400 w-[45%] py-6 px-9">
        <h2 className="text-3xl font-semibold">{data.taskNumber.active}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      <div className=" rounded-xl bg-green-400 w-[45%] py-6 px-9">
        <h2 className="text-3xl font-semibold">{data.taskNumber.completed}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      <div className=" rounded-xl bg-yellow-400 w-[45%] py-6 px-9">
        <h2 className="text-3xl font-semibold">{data.taskNumber.failed}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
    </div>
  );
}

export default TaskListNumber
