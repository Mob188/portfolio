export const ProjectDescription = (props) => {
  const { title, image } = props;
  return (
    <div className="flex items-center flex-col gap-4">
      <h2 className="text-2xl w-4/6 flex justify-center">{title}</h2>
      <div className=" w-4/6   bg-gray-400 dark:bg-[#131e2c] rounded-2xl shadow-xl border border-gray-700 p-5">
        <img
          className="rounded-2xl shadow-xl border border-gray-700"
          src={image}
        />
      </div>
    </div>
  );
};
