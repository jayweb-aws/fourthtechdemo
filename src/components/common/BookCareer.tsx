const BookCareer = () => {
  return (
    <div className="bg-gray-800">
      <div className="container flex sm:flex-row flex-col justify-between items-center space-y-2 sm:space-y-0 text-white py-6 sm:px-0 px-4">
        <p className="basis-1/3">Book Your Career Assessment</p>
        <p className="basis-1/3 text-justify">
          Fill out this form to book your Career assessment and we will be in
          touch with career paths, Bootcamp matches, costs, payment options, and
          timelines.
        </p>
        <div className="basis-1/3 flex justify-center items-center">
          <button className="btn-white px-24">Book Here</button>
        </div>
      </div>
    </div>
  );
};

export default BookCareer;
