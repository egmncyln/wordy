export function isNull(obj: any) {
  return obj === null;
}

export function isUndefined(obj: any) {
  return obj === undefined;
}

export function isNullOrUndefined(obj: any) {
  return isNull(obj) || isUndefined(obj);
}

export function isNullOrWhiteSpace(obj: string) {
  return isNullOrUndefined(obj) || obj.length === 0 || obj.trim().length === 0;
}