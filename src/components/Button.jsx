const Button = ({ icono, handleClick }) => {
  return (
    <button
      type="button"
      className="h-8 w-8 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500"
      onClick={handleClick}
    >
      {icono}
    </button>
  );
};

export default Button;
