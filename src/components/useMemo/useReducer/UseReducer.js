import React, { useReducer } from "react";
// useReducer
//1.Init state : 0
//2. Actions: UP (state+1)   Down  (state-1)
//3. Reducer
//4. dipacth

//init
const initState = {
  job: "",
  jobs: [],
};

//Actions
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DEL_JOB = "del_job";

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};
const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};
//reducer

const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOB:
      return {
        ...state,
        job: [...state.jobs, action.payload],
      };
    default:
      throw new Error("false");
  }
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const { job, jobs } = state;
  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
  };
  return (
    <div>
      <h1 style={{ color: "red" }}>UseReducer Todo</h1>
      <input
        placeholder="Enter ..."
        value={job}
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job} &times;</li>
        ))}
      </ul>
    </div>
  );
};

export default UseReducer;
