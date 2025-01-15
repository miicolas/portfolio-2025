'use client'

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

export default function ScrollSmooth({ children }: { children: ReactNode }) {

  return (
    <ReactLenis root options={{ duration: 2, smoothWheel: true }}>
    {children}
  </ReactLenis>
  )
}