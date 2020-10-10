import { isPlatformBrowser } from '@angular/common';
import { ClassProvider, FactoryProvider, InjectionToken, PLATFORM_ID } from '@angular/core';

export const WINDOW_TOKEN = new InjectionToken<any>('WindowToken');

/* Define abstract class for obtaining reference to the global window object. */
export abstract class WindowRef {
  get nativeWindow(): Window | Record<string, any> {
    throw new Error('Not implemented.');
  }
}

/* Define class that implements the abstract class and returns the native window object. */
export class BrowserWindowRef extends WindowRef {
  constructor() {
    super();
  }

  get nativeWindow(): Window | Record<string, any> {
    return window;
  }
}

/* Create an factory function that returns the native window object. */
export const windowFactory = (
  browserWindowRef: BrowserWindowRef,
  platformId: Record<string, any>,
): Window | Record<string, any> => {
  if (isPlatformBrowser(platformId)) {
    return browserWindowRef.nativeWindow;
  }
  return {};
};

/* Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. */
const browserWindowProvider: ClassProvider = {
  provide: WindowRef,
  useClass: BrowserWindowRef,
};

/* Create an injectable provider that uses the windowFactory function for returning the native window object. */
const windowProvider: FactoryProvider = {
  provide: WINDOW_TOKEN,
  useFactory: windowFactory,
  deps: [WindowRef, PLATFORM_ID],
};

export const WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];
