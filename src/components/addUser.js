import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/userSlice";
import { v4 as uuidv4 } from "uuid";

export const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleAddUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      addUser({
        id: uuidv4(),
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
  };

  return (
    <div id="AddUser" className="flex flex-col">
      <label>Name</label>
      <input className="bg-gray-200 py-2 px-3 border-2 outline-none" label="name" type="text" onChange={(e) => setValues({ ...values, name: e.target.value })} value={values.name} placeholder="ur name" />
      <label className="mt-5">Email</label>
      <input className="bg-gray-200 py-2 px-3 border-2 outline-none" label="Email" type="text" onChange={(e) => setValues({ ...values, email: e.target.value })} value={values.email} placeholder="urname@gmail.com" />

      <button className="bg-indigo-600 text-white py-2 px-6 my-10 rounded hover:bg-indigo-700" onClick={handleAddUser}>
        Submit
      </button>
    </div>
  );
};
