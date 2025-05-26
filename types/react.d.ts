import * as React from 'react';

declare global {
  namespace React {
    interface MouseEvent<T = Element> extends UIEvent<T> {
      clientX: number;
      clientY: number;
      pageX: number;
      pageY: number;
      preventDefault(): void;
      stopPropagation(): void;
    }
  }
} 