import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { IoIosClose } from "react-icons/io";

const ModalDialog = ({ isOpen, closeModal, children, title, width }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                style={{
                  maxWidth: `${width}px`,
                }}
                className={` w-full
               transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all`}
              >
                <Dialog.Title
                  as="div"
                  className="flex justify-between font-medium leading-6"
                >
                  <h2 className="text-[18px]">{title}</h2>
                  <button onClick={closeModal} className="hidden">
                    <IoIosClose size={28} />
                  </button>
                </Dialog.Title>
                <div>{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalDialog;
