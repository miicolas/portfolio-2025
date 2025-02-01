import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

export default function ScrollSmooth({ children, duration }: { children: ReactNode, duration: number }) {

  return (
    <ReactLenis root options={{ duration: duration, smoothWheel: true }}>
    {children}
  </ReactLenis>
  )
}