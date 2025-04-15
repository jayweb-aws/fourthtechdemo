import React, { useState } from 'react';
import { BiDotsVerticalRounded, BiEditAlt } from 'react-icons/bi';
import { FaAngleRight } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import DeleteCourseCategoriesModal from './DeleteCourseCategoriesModal';
import UpdateCategoryModal from './UpdateCategoryModal';

type Category = {
    id: string;
    name: string;
    description: string
}



const CoursesCategoriesCard = (props: Category) => {
    const { name, id, description } = props;
    const [activeMenu, setActiveMenu] = useState(false);
    const [showDeleteCategoriesModal, setshowDeleteCategoriesModal] = useState(false);
    const [showUpdateCategoryModal, setShowUpdateCategoryModal] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState("");

    const handleClose = () => {
        setshowDeleteCategoriesModal(false);
        setSelectedCategories("");
    }
    const handleCloseUpdateCategoryModal = () => {
        setShowUpdateCategoryModal(false);
    }

    const handleDeleteCategories = (id: string) => {
        setshowDeleteCategoriesModal(true)
        setSelectedCategories(id)
    }

    return (
        <>
            <DeleteCourseCategoriesModal
                show={showDeleteCategoriesModal}
                handleClose={handleClose}
                userId={selectedCategories}
                setActiveMenu={setActiveMenu}
            />
            <UpdateCategoryModal
                show={showUpdateCategoryModal}
                handleClose={handleCloseUpdateCategoryModal}
                setActiveMenu={setActiveMenu}
                category={{ id, name, description }}
            />
            <div className="group col-span-12 sm:col-span-6 xl:col-span-6 2xl:col-span-4 relative space-y-3 hover:shadow-2xl rounded-lg p-3 pb-12">
                <button
                    onClick={() => setActiveMenu(prev => !prev)}
                    className="text-[#130F26] text-[25px] p-2 absolute top-1 right-0"
                >
                    <BiDotsVerticalRounded />
                </button>
                <div className={`absolute shadow-2xl top-5 bg-white right-2 rounded px-1 ${activeMenu ? "block" : "hidden"}`}>
                    <button onClick={() => setShowUpdateCategoryModal(true)} className="py-2 px-3 flex justify-center items-center gap-1 border-b-2 pr-7">
                        <BiEditAlt className="bg-[#3A57E8] text-white w-[25px] h-[25px] rounded-full p-1" />
                        <span>Edit</span>
                    </button>
                    <button onClick={() => handleDeleteCategories(id)} className="py-2 px-3 flex justify-center items-center gap-1">
                        <RiDeleteBin6Line className="bg-[#bb1c1c] text-white w-[25px] h-[25px] rounded-full p-1" />
                        <span>Delete</span>
                    </button>
                </div>
                <div className="
                w-[40px] 
                h-[40px]
                bg-[#232D42]
                group-hover:bg-[#3A57E8]
                text-white 
                text-xl 
                flex 
                items-center 
                justify-center
                rounded
             "
                >{name[0].toUpperCase()}</div>
                <h3 className="font-medium text-2xl text-[#232D42] group-hover:text-[#3A57E8]">{name}</h3>
                <p className="text-[13px] text-[#8A92A6]">{description}</p>
                <button className="
            w-[25px] 
            h-[25px] 
            bg-[#3A57E8] 
            text-white
            rounded-full
            flex
            justify-center
            items-center
            p-2
            absolute
            bottom-3
            right-3
            ">
                    <FaAngleRight />
                </button>
            </div>
        </>
    );
};

export default CoursesCategoriesCard;