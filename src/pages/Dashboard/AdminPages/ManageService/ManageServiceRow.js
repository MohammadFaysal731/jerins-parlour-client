import React from 'react';

const ManageServiceRow = ({
  services,
  setServiceDeleting,
  setUpdateService,
  index,
}) => {
  const { title, description, price, image } = services;
  return (
    <tr className="font-bold">
      <th className="text-primary">{index + 1}</th>
      <td className="text-orange-500">{title}</td>
      <td className="text-sky-500" title={description}>
        {description.slice(0, 20)}
      </td>
      <td className="text-purple-500">${price} /-</td>
      <td>
        <img src={image} alt="" className="w-12 rounded-full" />
      </td>
      <td className="text-green-500">
        {/* The button to open modal */}
        <label
          onClick={() => setUpdateService(services)}
          htmlFor="service-update-modal"
          className="cursor-pointer"
        >
          Update
        </label>
      </td>
      <td className="text-red-500">
        {/* The button to open modal */}
        <label
          onClick={() => setServiceDeleting(services)}
          htmlFor="service-delete-modal"
          className="cursor-pointer"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ManageServiceRow;