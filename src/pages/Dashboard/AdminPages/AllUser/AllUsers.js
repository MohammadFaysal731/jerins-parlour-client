import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loading from "../../../../components/Loading";
import UserDeleteModal from "../../../../components/Modals/UserDeleteModal";
import AllUsersRow from "./AllUsersRow";

const AllUsers = () => {
  const [userDeleting, setUserDeleting] = useState(null);
  const {data:allUsers, isLoading, refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: () =>
      fetch("http://localhost:5000/users",{
        method:"GET",
        headers:{
          "content-type":"application/json",
          'authorization':`Bearer ${localStorage.getItem("accessToken")}`
        }
      }).then((res) => res.json()),
  });
if(isLoading){
  return <Loading/>
}
 
  return (
    <div>
      <h2 className="text-center text-primary font-bold text-sm md:text-lg mb-5">
        Welcome to all users page :- {allUsers?.length}
      </h2>
      <div className="grid grid-cols-1">
        <div className="overflow-x-auto">
          <table className="table table-normal w-full ">
            {/* head */}
            <thead>
              <tr>
                <th className="text-primary">SL</th>
                <th className="text-sky-500">Email</th>
                <th className="text-green-500">Make Admin</th>
                <th className="text-red-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {allUsers?.map((user, index) => (
                <AllUsersRow
                  key={user._id}
                  user={user}
                  index={index}
                  refetch={refetch}
                  setUserDeleting={setUserDeleting}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {userDeleting && (
        <UserDeleteModal
          userDeleting={userDeleting}
          refetch={refetch}
          setUserDeleting={setUserDeleting}
        />
      )}
    </div>
  );
};

export default AllUsers;
