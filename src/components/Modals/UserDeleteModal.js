import React from 'react';
import { toast } from 'react-toastify';

const UserDeleteModal = ({ userDeleting, refetch, setUserDeleting }) => {
  const { email } = userDeleting;
  const handelDeleteUser = (email) => {
    fetch(`https://concerned-colt-skirt.cyclic.app/user/${email}`, {
      method: "DELETE",
      headers:{
        "content-type":"application/json",
        "authorization":`Bearer ${localStorage.getItem("accessToken")}`
      },
    })
      .then((res) => {
        if(res.status === 401 || res.status === 403){
          toast.error(`${email} was not deleted`)
        }
        return res.json()
      })
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          setUserDeleting(null)
          toast.success(`${email} was deleted`);
        }
      });
  };
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="user-delete-modal" className="modal-toggle" />
      <div className="modal sm:modal-middle">
        <div className="modal-box font-bold">
          <label
            htmlFor="user-delete-modal"
            className="btn btn-primary  btn-sm btn-circle text-secondary absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-primary text-sm md:text-lg">
            Are you sure, you want delete this user :- {email}{" "}
          </h3>
          <p className="py-4">
            <span className="text-primary">Select :-</span> Delete{" "}
            <span className="text-primary">Or</span> Cancel
          </p>
          <div className="modal-action">
            <button
              onClick={() => handelDeleteUser(email)}
              className="btn btn-primary btn-xs text-secondary"
            >
              Delete
            </button>

            <label
              htmlFor="user-delete-modal"
              className="btn btn-primary btn-xs text-secondary"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDeleteModal;