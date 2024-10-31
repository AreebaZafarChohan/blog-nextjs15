import { HeadingFourProps } from '@/types/componentTypes';

const HeadingFour = ({h4}: HeadingFourProps) => {
  return (
    <h4 className='text-black lg:text-xl md:text-xl text-lg font-semibold lg:mx-8 md:mx-8 px-6 mx-2'>
      {h4}
    </h4>
  );
};

export default HeadingFour;
