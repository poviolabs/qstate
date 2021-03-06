import { Options, QueryParametar } from './types';

export const isQPdefined = (qp: QueryParametar): boolean =>
  qp.key != null && qp.value != null && qp.value.length > 0;

export const isExcluded = (
  name: string,
  options: Options | undefined,
): boolean | undefined => options?.exclude?.includes(name);

export const updateQueryString = (qs: string): void => {
  const url = `${window.location.pathname}?${qs}`;

  window.history.replaceState(null, '', url);
};
