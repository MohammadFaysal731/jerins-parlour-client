import React from "react";
import { toast } from "react-toastify";

const AllUsersRow = ({ user, index, refetch, setUserDeleting }) => {
  const {  email, role } = user;
  const makeAdmin = () => {
    fetch(`https://concerned-colt-skirt.cyclic.app/user/admin/${email}`, {
      method: "PATCH",
      headers: {
        "content-type":"application/json",
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

  return (
    <tr className="font-bold">
      <th className="text-primary">{index + 1}</th>
      <td className="text-sky-500">{email}</td>
      <td className="text-green-500">
        {role !== "admin" ? (
          <button onClick={makeAdmin}>Make Admin</button>
        ) : (
          "Admin"
        )}
      </td>
      <td className="text-red-500">
        {/* The button to open modal */}
        <label
          onClick={() => setUserDeleting(user)}
          htmlFor="user-delete-modal"
          className="text-red-500 cursor-pointer"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default AllUsersRow;
