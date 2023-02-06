import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/userSlice";

export const UserList = () => {
  const { users } = useSelector((store) => store.users);
  console.log(users);
  const dispatch = useDispatch();
  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id: id }));
  };
  const renderCard = () =>
    users.map((user) => (
      <div key={user.id} className="bg-gray-300 p-5 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-lg text-gray-700">{user.name}</h3>
          <span className="font-normal text-gray-600">{user.email}</span>
        </div>

        <div className="flex gap-2">
          <Link to={`EditUser/${user.id}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </Link>
          <button onClick={() => handleRemoveUser(user.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>
    ));
  return (
    <div id="UserList" className="grid gap-5 md:grid-cols-2">
      {users.length > 0 ? renderCard() : <p className=" text-center col-span-2 text-gray-700 font-semibold">NO USER</p>}
    </div>
  );
};
