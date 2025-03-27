declare module 'tableau-api' {
  export class Viz {
    constructor(container: HTMLElement, url: string, options?: {
      hideTabs?: boolean;
      hideToolbar?: boolean;
      width?: string;
      height?: string;
      onFirstInteractive?: () => void;
      onError?: () => void;
    });
    dispose(): void;
  }
} 