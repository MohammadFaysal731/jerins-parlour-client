import React from 'react';
import { toast } from 'react-toastify';

const UserDeleteModal = ({ userDeleting, refetch, setUserDeleting }) => {
  const { email } = userDeleting;
  const handelDeleteUser = (email) => {
    fetch(`http://localhost:5000/user/${email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          setUserDeleting(null)
          toast.success(`successfully delete a user`);
        }
      });
  };
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="delete-modal"
            className="btn btn-primary  btn-sm btn-circle text-secondary absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-primary font-bold text-sm md:text-lg">
            Are you sure, you want delete this user :- {email}{" "}
          </h3>
          <p className="py-4">delete Or cancel</p>
          <div className="modal-action">
            <button
              onClick={() => handelDeleteUser(email)}
              className="btn btn-primary btn-xs text-secondary"
            >
              Delete
            </button>

            <label
              htmlFor="delete-modal"
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