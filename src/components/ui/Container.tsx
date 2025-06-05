import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return <div className='mx-[4rem]'>{children}</div>;
};

export default Container;
