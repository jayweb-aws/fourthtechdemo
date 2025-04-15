import CoursesCategoriesCard from "./CoursesCategoriesCard";
type now = {
  categories: any[];
};
const CoursesCategories = (props: now) => {
  const { categories } = props;

  return (
    <div className="grid grid-cols-12 gap-4">
      {categories.map(
        ({
          id,
          createdAt,
          name,
          description,
        }: {
          id: string;
          createdAt: string;
          name: string;
          description: string;
        }) => {
          return (
            <CoursesCategoriesCard
              key={id}
              id={id}
              name={name}
              description={description}
            />
          );
        }
      )}
    </div>
  );
};

export default CoursesCategories;
