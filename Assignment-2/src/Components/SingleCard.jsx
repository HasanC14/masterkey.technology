const SingleCard = ({ alphabet, HandleOutputString }) => {
  return (
    <div
      className="flex justify-center
     rounded-lg shadow-md p-6 bg_glass custom-border hover:scale-105 transition-all ease-in-out duration-700 text-2xl font-bold text-white"
      onClick={() => HandleOutputString(alphabet)}
    >
      {alphabet}
    </div>
  );
};

export default SingleCard;
