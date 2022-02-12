import React from "react";
import Office from "../assets/office.svg";
import Person from "../assets/person.svg";

const ModalOptions = (props) => {
  return (
    <div>
      <img src={props.src} alt="office" />
      <div>{props.text}</div>
    </div>
  );
};

const Modal = () => {
  return (
    // create a modal in tailwind
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-white opacity-75"></div>
      <div className="relative bg-white rounded-lg p-6 shadow-xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-5xl inter">Join As</div>
        </div>
        <hr />
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <ModalOptions src={Office} text="Office" />
            <ModalOptions src={Person} text="Person" />
          </div>
        </div>
      </div>
    </div>
    // <div className="fixed">
    //   <div>Join As</div>
    //   <div className="flex items-center justify-evenly">
    //     <ModalOptions src={Office} text="Brand" />
    //     <ModalOptions src={Person} text="Influencer" />
    //   </div>
    // </div>
  );
};

export default Modal;
