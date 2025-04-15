import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoIosClose } from "react-icons/io";

const SecondModalDialog = ({
  isOpen,
  closeModal,
  children,
  title,
  width,
}: {
  isOpen: any;
  closeModal: any;
  children: any;
  title: any;
  width: any;
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
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
               transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all`}
              >
                <Dialog.Title
                  as="div"
                  className="flex items-center justify-center p-2 font-medium leading-6"
                >
                  <h2 className="py-1 text-center font-poppins text-[18px] font-medium capitalize text-[#161C2D]">
                    {title}
                  </h2>
                  <button
                    onClick={closeModal}
                    className="absolute right-[7px] top-[8px] rounded-full bg-[#F3F3F3]"
                  >
                    <IoIosClose size={35} />
                  </button>
                </Dialog.Title>
                <div className="p-6">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SecondModalDialog;
