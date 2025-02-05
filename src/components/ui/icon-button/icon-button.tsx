interface IIconButtonProps {
  icon: string;
  alt: string;
  onClick: () => void;
  disabled?: boolean;
}

export const IconButton = ({ icon, alt, onClick, disabled = false }: IIconButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className='cursor-pointer rounded bg-gray-200 p-3 active:bg-yellow-400 disabled:cursor-not-allowed disabled:bg-gray-300'
    >
      <img src={icon} alt={alt} />
    </button>
  );
};
