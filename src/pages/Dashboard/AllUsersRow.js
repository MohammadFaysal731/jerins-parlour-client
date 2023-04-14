import React from "react";
import { toast } from "react-toastify";

const AllUsersRow = ({ user, index, refetch }) => {
  const {_id, email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error(`Failed to make an admin ${email}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`${email} is now an admin`);
        }
      });
  };
const handelDeleteUser = id =>{
  fetch(`http://localhost:5000/user/${id}`,{
    method:"DELETE"
  })
    .then((res) => res.json())
    .then((data) => {
      if(data.deletedCount > 0){
        refetch()
        toast.success(`successfully delete a user`)
      }
    });
}
  return (
    <tr className="font-bold">
      <th className="text-primary">{index + 1}</th>
      <td className="text-sky-500">{email}</td>
      <td className="text-green-500">
        {role !== "admin" ? <button onClick={makeAdmin}>Make Admin</button>:"Admin"}
      </td>
      <td className="text-red-500">
        <button onClick={()=>handelDeleteUser(_id)}>Remove</button>
      </td>
    </tr>
  );
};

export default AllUsersRow;
