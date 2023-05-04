import React from 'react';
import { toast } from 'react-toastify';

const ServiceDeleteModal = ({
  allService,
  setAllService,
  serviceDeleting,
  setServiceDeleting,
}) => {
  const { _id, title } = serviceDeleting;
  const handleDeleteService = (id) => {
    fetch(`http://localhost:5000/services/${id}`, {
      method: "DELETE",
      headers:{
        "content-type":"application/json",
        "authorization":`Bearer ${localStorage.getItem("accessToken")}`
      },
    })
      .then((res) => {
        if(res.status===401 || res.status===403){
          toast.error(`${title} was not deleted`)
        }
      return  res.json()
      })
      .then((data) => {
        if(data.deletedCount > 0){
           const rest = allService.filter((service) => service._id !== id);
        setAllService(rest);
        setServiceDeleting(null);
        toast.success(`${title} was deleted`)
        }
      });
  };
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="service-delete-modal"
        className="modal-toggle"
      />
      <div className="modal sm:modal-middle">
        <div className="modal-box font-bold">
          <label
            htmlFor="service-delete-modal"
            className="btn btn-primary  btn-sm btn-circle text-secondary absolute right-2 top-2"
          >
            ✕
          </label>
          <p className="py-2 text-sm md:text-xl text-primary">
            Do you rellay want ot delete this service :-
          </p>
          <h3 className="text-sm md:text-xl ">{title}</h3>
          <p className="py-4">
            <span className="text-primary">Select :-</span> Delete
            <span className="text-primary">Or</span> Cancel
          </p>
          <div className="modal-action">
            <button
              onClick={() => handleDeleteService(_id)}
              className="btn btn-primary btn-xs"
            >
              Delete
            </button>
            <label
              htmlFor="service-delete-modal"
              className="text-secondary btn btn-primary btn-xs"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDeleteModal;