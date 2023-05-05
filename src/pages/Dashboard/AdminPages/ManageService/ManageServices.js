import React, { useEffect, useState } from "react";
import Loading from "../../../../components/Loading";
import ServiceDeleteModal from "../../../../components/Modals/ServiceDeleteModal";
import ServiceUpdateModal from "../../../../components/Modals/ServiceUpdateModal";
import ManageServiceRow from "./ManageServiceRow";
const ManageServices = () => {
  const [allService, setAllService] = useState([]);
  const [updateService, setUpdateService] = useState(null);
  const [serviceDeleting, setServiceDeleting] = useState(null);
  useEffect(() => {
    fetch(`https://concerned-colt-skirt.cyclic.app/services`,{
      method:"GET",
      headers:{
        "content-type":"application/json",
        "authorization":`Bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setAllService(data);
      });
  }, [allService]);

  return (
    <div className="">
      <h2 className="text-primary text-center text-sm md:text-lg mb-5 font-bold">
        Welcome to manage services page :- {allService?.length}
      </h2>
    {!allService?.length ? <Loading/> : <div className="grid grid-cols-1">
        <div className="overflow-x-auto">
          <table className="table table-normal w-full ">
            {/* head */}
            <thead>
              <tr>
                <th className="text-primary">SL</th>
                <th className="text-orange-500">Service Name</th>
                <th className="text-sky-500">Description</th>
                <th className="text-purple-500">Price</th>
                <th className="">Image</th>
                <th className="text-green-500">Update</th>
                <th className="text-red-500">Delete</th>
              </tr>
            </thead>
            <tbody>
              {allService?.map((services, index) => (
                <ManageServiceRow
                  services={services}
                  key={services._id}
                  index={index}
                  setServiceDeleting={setServiceDeleting}
                  setUpdateService={setUpdateService}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>}
      {/* update service modal */}
      {updateService && (
        <ServiceUpdateModal
          updateService={updateService}
          setUpdateService={setUpdateService}
        />
      )}
      {/* service delete modal */}
      {serviceDeleting && (
        <ServiceDeleteModal
          allService={allService}
          setAllService={setAllService}
          serviceDeleting={serviceDeleting}
          setServiceDeleting={setServiceDeleting}
        />
      )}
    </div>
  );
};

export default ManageServices;
