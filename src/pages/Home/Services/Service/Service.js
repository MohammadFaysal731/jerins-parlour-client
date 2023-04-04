import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../../../components/PrimaryButton';

const Service = ({ service }) => {
  const {_id,title,description,price,image,shadow}=service;
  const navigate=useNavigate();
  const handelNavigate =id=>{
    navigate(`/services/${id}`);
  }
  return (
    <div
      className={`card w-full bg-base-100 hover:shadow-2xl hover:-translate-y-10 transition-all duration-300 delay-100 mt-10 ${shadow}`}
    >
      <figure className="px-10 pt-10">
        <img src={image} alt="service" className="rounded-xl w-20" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold">{title}</h2>
        <h4 className="text-xl font-semibold">$ {price} /-</h4>
        <blockquote>{description}</blockquote>
        <div onClick={()=>handelNavigate(_id)} className="card-actions">
          <PrimaryButton>Book Now</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Service;