export enum HTTP_METHOD {
  DELETE = 'DELETE',
  GET = 'GET',
  PATCH = 'PATCH',
  POST = 'POST',
  PUT = 'PUT',
}

export const JSON_HEADER = { 'Content-Type': 'application/json' };

export const isBrowser = typeof window !== 'undefined';

export const isClient = Boolean(
  typeof window !== 'undefined' && window.document
);

export const locationOrigin = (): string => {
  if (typeof globalThis !== 'undefined') {
    return globalThis.location.origin;
  }

  return 'localhost';
};

export const isLocalhost = (): boolean => {
  if (typeof globalThis !== 'undefined') {
    return globalThis.origin.includes('localhost');
  }

  return false;
};

export const isValidUrl = (string: string): boolean => {
  try {
    new URL(string);
    return true;
  } catch {
    return false;
  }
};


export const removeQueryParameters = (): void => {
  if (typeof globalThis !== 'undefined') {
    globalThis.history.replaceState(
      undefined,
      '',
      globalThis.location.pathname
    );
  }
};

export const successfullySettledPromises = async <Type>(
  promises: Array<Promise<Type>>
): Promise<Type[]> => {
  const data = await Promise.allSettled(promises);

  const returnData: Type[] = [];

  for (const promise of data) {
    if (promise.status === 'fulfilled') {
      returnData.push(promise.value);
    }
  }

  return returnData;
};

export const swrFetcher = async <ResponseType>(
    ...arguments_: [input: RequestInfo, init?: RequestInit]
): Promise<ResponseType> => {
  return fetch(...arguments_).then(async response => {
    return (await response.json()) as ResponseType;
  });
};

