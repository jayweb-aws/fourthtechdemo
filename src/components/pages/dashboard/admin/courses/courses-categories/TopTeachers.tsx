import TopTeacherCard from "./TopTeacherCard";

const TopTeachers = () => {
    const teachers = [
        {
            id: 1,
            name: "Robert Fox",
            skill: "UI/UX Designer",
            rating: 3.5,
            studentsNumber: "225k"
        },
        {
            id: 2,
            name: "Robert Fox",
            skill: "UI/UX Designer",
            rating: 3.5,
            studentsNumber: "225k"
        },
        {
            id: 3,
            name: "Robert Fox",
            skill: "UI/UX Designer",
            rating: 3.5,
            studentsNumber: "225k"
        },
    ]
    return (
        <div>
            <h2 className="text-[#232D42] font-semibold text-xl">Top Teachers</h2>
            <div className="mt-4 space-y-3">
                {teachers.map(teacher => {
                    return <TopTeacherCard
                        key={teacher.id}
                        teacher={teacher}
                    />
                })}
            </div>
        </div>
    );
};

export default TopTeachers;