import { ReactNode } from 'react';
import type { Metadata } from 'next';
import Sidebar from './_components/Sidebar';

export const metadata: Metadata = {
  title: 'TrendWave | Dashboard',
  description: 'A Ecommerce Dashboard',
};

const Dashbooardlayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <main className="flex-1 w-full">{children}</main>
    </div>
  );
};

export default Dashbooardlayout;