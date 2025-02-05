import { Alert } from '../../assets/svg';

interface IErrorMessageProps {
  message?: string;
}

export const ErrorMessage = ({
  message = 'Something went wrong. Please try again.',
}: IErrorMessageProps) => {
  return (
    <div className='flex flex-col items-center'>
      <div
        className='flex items-center gap-2 rounded border border-red-400 bg-red-100 px-4 py-2 text-red-700'
        role='alert'
      >
        <img src={Alert} alt='Error' className='h-8 w-8' />
        <span>{message}</span>
      </div>
    </div>
  );
};
