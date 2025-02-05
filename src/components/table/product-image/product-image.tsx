import ImagePlaceholder from '../../../assets/svg/image-placeholder.svg';

interface IProductImageProps {
  alt: string;
  src?: string;
}

export const ProductImage = ({ alt, src }: IProductImageProps) => {
  return (
    <div className='mx-auto h-13 w-13 overflow-hidden'>
      <img src={src || ImagePlaceholder} alt={alt} className='h-full w-full object-cover' />
    </div>
  );
};
