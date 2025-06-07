'use client';

import { PersistGate } from 'redux-persist/integration/react';
import { ReactNode } from 'react';
import { persistor } from '@/redux/store';

export default function PersistProvider({ children }: { children: ReactNode }) {
  return <PersistGate loading={null} persistor={persistor}>{children}</PersistGate>;
}