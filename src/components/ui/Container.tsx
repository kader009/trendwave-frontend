import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return <div className='w-full h-full mx-[100px]'>{children}</div>;
};

export default Container;
