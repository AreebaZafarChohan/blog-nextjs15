import { HeadingTwoProps } from '@/types/componentTypes';

const HeadingTwo = ({h2}: HeadingTwoProps) => {
  return (
    <h2 className='text-blue-950 lg:text-3xl md:text-3xl text-2xl font-bold lg:mx-8 md:mx-8 px-6 mx-2 mb-6 uppercase'>
      {h2}
    </h2>
  );
};

export default HeadingTwo;
