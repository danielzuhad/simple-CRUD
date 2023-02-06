import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "../redux/userSlice";

export const EditUser = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.users);
  const existingUser = users.filter((user) => user.id === params.id);
  const { name, email } = existingUser[0];
  const [values, setValues] = useState({
    name,
    email,
  });

  const handleEditUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      editUser({
        id: params.id,
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
  };
  return (
    <div id="EditUser">
      <div id="AddUser" className="flex flex-col">
        {/* Name */}
        <label>Name</label>
        <input className="bg-gray-200 py-2 px-3 border-2 outline-none" label="name" type="text" onChange={(e) => setValues({ ...values, name: e.target.value })} value={values.name} placeholder="ur name" />
        {/* Email */}
        <label className="mt-5">Email</label>
        <input className="bg-gray-200 py-2 px-3 border-2 outline-none" label="Email" type="text" onChange={(e) => setValues({ ...values, email: e.target.value })} value={values.email} placeholder="urname@gmail.com" />

        <button className="bg-indigo-600 text-white py-2 px-6 my-10 rounded hover:bg-indigo-700" onClick={handleEditUser}>
          Edit
        </button>
      </div>
    </div>
  );
};
