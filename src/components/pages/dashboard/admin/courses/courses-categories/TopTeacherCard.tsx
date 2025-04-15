import { BsStarFill } from 'react-icons/bs';

type Teacher = {
    name: string
    skill: string
    rating: number
    studentsNumber: string
}

type TopTeacherCardProps = {
    teacher: Teacher
}

const TopTeacherCard = (props: TopTeacherCardProps) => {
    const { teacher: { name, skill, rating, studentsNumber } } = props;
    return (
        <div className="flex gap-2 justify-between">
            <div className="flex gap-2 items-center justify-between">
                <div className="w-[40px] h-[40px] text-white font-semibold bg-[#8A92A6] rounded flex items-center justify-center">{name[0].toUpperCase()}</div>
                <div className="flex flex-col">
                    <h3 className="text-[#3A57E8] font-medium">{name}</h3>
                    <p className="text-[#8A92A6]">{skill}</p>
                </div>
            </div>
            <div className="flex flex-col items-end">
                <h3 className="text-[#8A92A6] font-medium flex">
                    <BsStarFill className="text-[#FFD329] text-lg mr-2 items-center" />
                    <span>{rating}</span>
                </h3>
                <p className="text-[#8A92A6] font-medium">({studentsNumber})</p>
            </div>
        </div>
    );
};

export default TopTeacherCard;