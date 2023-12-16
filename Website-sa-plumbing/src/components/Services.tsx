// import { Modal } from "flowbite-react";
// import { useState } from "react";

interface SectionProps {
  title: string;
  img: string;
  description: string;
}

const Services: React.FC<SectionProps> = (props) => {
  // const [openModal, setOpenModal] = useState(false);
  return (
    // <>
    //   <div
    //     onClick={() => setOpenModal(true)}
    //     className="h-96 w-96 flex flex-col justify-center items-center m-5 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-lg hover:border-b-2 hover:border-blue-600 hover:rounded-b-none"
    //   >
    //     <div className="flex flex-row">
    //       <div>
    //         <img
    //           src={props.img}
    //           alt="SA plumbing"
    //           className="w-14 h-14 md:w-20 md:h-20"
    //         />
    //       </div>
    //     </div>
    //     <div className="flex flex-col items-center">
    //       <span className="m-1 text-2xl">{props.title}</span>
    //       <p className="w-1/2">{props.description}</p>
    //     </div>
    //   </div>
    //   <Modal
    //     className="bg-blue-300"
    //     show={openModal}
    //     onClose={() => setOpenModal(false)}
    //   >
    //     <Modal.Header className="border-b-2 border-blue-600">
    //       {props.title}
    //     </Modal.Header>
    //     <Modal.Body>
    //       <div className="space-y-6 flex items-center justify-center">
    //         <p className="text-center m-2 w-1/3">{props.description}</p>
    //       </div>
    //     </Modal.Body>
    //   </Modal>
    // </>
    <>
      <div className=" min-h-full h-80 flex flex-col justify-center max-w-lg bg-white border shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-10 rounded-lg hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] m-2 duration-100">
        <div className="flex flex-col items-center">
          <img src={props.img} alt="SA Icon" className="w-12 h-12" />
          <div className=" text-center text-xl m-5 font-semibold">
            {props.title}
          </div>
          <p className="text-center text-sm text-gray-500">
            {props.description}
          </p>
        </div>
      </div>
    </>
  );
};
export default Services;
