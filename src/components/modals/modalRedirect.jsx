export const ModalRedirect = (props) => {
  const { closeModal } = props;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-[#1e293b] p-6 rounded-lg shadow-lg w-80 relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
        >
          ✕
        </button>
        <h2 className="text-lg font-bold mb-4 text-center">Repositorios</h2>
        <div className="flex flex-col space-y-2 items-center">
          <a
            href="https://github.com/Mob188/CaliFront"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            🔹 Frontend
          </a>
          <a
            href="https://github.com/Mob188/CaliBack"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            🔸 Backend
          </a>
        </div>
      </div>
    </div>
  );
};
