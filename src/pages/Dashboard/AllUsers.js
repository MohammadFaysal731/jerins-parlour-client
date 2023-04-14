import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../components/Loading";
import AllUsersRow from "./AllUsersRow";

const AllUsers = () => {
  const {data:allUsers, isLoading, refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: () =>
      fetch("http://localhost:5000/users",{
        method:"GET",
        headers:{
          'authorization':`Bearer ${localStorage.getItem("accessToken")}`
        }
      }).then((res) => res.json()),
  });
if(isLoading){
  return <Loading/>
}
 
  return (
    <div>
      <h2 className="text-primary font-bold text-sm md:text-lg mb-5">
        Welcome to all users page
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
                <AllUsersRow key={user._id} user={user} index={index} refetch ={refetch}/>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
