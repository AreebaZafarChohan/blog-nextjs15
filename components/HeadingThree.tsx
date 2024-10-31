import { HeadingThreeProps } from '@/types/componentTypes';

const HeadingThree = ({h3}: HeadingThreeProps) => {
  return (
    <h3 className='text-black lg:text-2xl  md:text-2xl text-xl font-bold lg:mx-8 md:mx-8 px-6 mx-2 mb-3 uppercase'>
      {h3}
    </h3>
  );
};

export default HeadingThree;
