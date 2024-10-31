import { ParagraphProps } from '@/types/componentTypes';
import React from 'react'

const Paragraph = ({text} : ParagraphProps) => {
  return (
    <p className='text-black md:text-lg lg:text-lg text-sm font-normal lg:mx-8 md:mx-8 px-6 mx-2 mb-8'>
      {text}
    </p>
  );
};

export default Paragraph;
