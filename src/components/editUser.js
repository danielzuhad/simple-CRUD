import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const EditUser = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleEditUser = () => {
    setValues({ name: "", email: "" });
    console.log(values);
    navigate("/");
  };
  return (
    <div id="EditUser">
      <div id="AddUser" className="flex flex-col">
        {/* Name */}
        <label>Name</label>
        <input
          className="bg-gray-200 py-2 px-3 border-2 outline-none"
          label="name"
          type="text"
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          value={values.name}
          placeholder="ur name"
        />
        {/* Email */}
        <label className="mt-5">Email</label>
        <input
          className="bg-gray-200 py-2 px-3 border-2 outline-none"
          label="Email"
          type="text"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          value={values.email}
          placeholder="urname@gmail.com"
        />

        <button
          className="bg-indigo-600 text-white py-2 px-6 my-10 rounded hover:bg-indigo-700"
          onClick={handleEditUser}
        >
          Edit
        </button>
      </div>
    </div>
  );
};
