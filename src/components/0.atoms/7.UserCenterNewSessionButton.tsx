const UserCenterNewSessionButton = () => {
    return (
      <button className="flex items-center justify-center bg-AccentBlue p-2 rounded-2xl text-white w-[45%] hover:scale-110">
        <div className="w-[20%]">
          <p className="text-[1.9em] font-bold leading-none">+</p>
        </div>
        <div className="italic w-[80%]">
          <p className="">Nueva Sesión</p>
        </div>
      </button>
    );
  }

  export default UserCenterNewSessionButton;