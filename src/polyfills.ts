/* Polyfills for Safari 15 / iOS 15 (iPhone 7) */

// Object.hasOwn — ES2022, Safari 15.4+
if (typeof Object.hasOwn !== "function") {
  Object.hasOwn = function hasOwn(obj: object, key: PropertyKey): boolean {
    return Object.prototype.hasOwnProperty.call(obj, key);
  };
}

// Array.prototype.at — ES2022, Safari 15.4+
if (!Array.prototype.at) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.at = function at(index: number) {
    const len = this.length;
    const i = index >= 0 ? index : len + index;
    return i >= 0 && i < len ? this[i] : undefined;
  };
}

// String.prototype.at — ES2022, Safari 15.4+
if (!String.prototype.at) {
  // eslint-disable-next-line no-extend-native
  String.prototype.at = function at(index: number) {
    const len = this.length;
    const i = index >= 0 ? index : len + index;
    return i >= 0 && i < len ? this[i] : undefined;
  };
}

// String.prototype.replaceAll — ES2021, Safari 13.1+
if (!String.prototype.replaceAll) {
  // eslint-disable-next-line no-extend-native
  (String.prototype as any).replaceAll = function (
    search: string | RegExp,
    replace: any
  ) {
    if (search instanceof RegExp) {
      if (!search.global) {
        throw new TypeError("replaceAll must be called with a global RegExp");
      }
      return this.replace(search, replace);
    }
    return this.split(search).join(replace);
  };
}

// structuredClone — Safari 15.4+
if (typeof globalThis.structuredClone !== "function") {
  globalThis.structuredClone = function structuredClone<T>(value: T): T {
    return JSON.parse(JSON.stringify(value));
  };
}

// Array.prototype.findLast — ES2023, Safari 15.4+
if (!Array.prototype.findLast) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.findLast = function findLast<T>(
    this: T[],
    predicate: (value: T, index: number, array: T[]) => boolean
  ): T | undefined {
    for (let i = this.length - 1; i >= 0; i--) {
      if (predicate(this[i], i, this)) return this[i];
    }
    return undefined;
  };
}

// Array.prototype.findLastIndex — ES2023, Safari 15.4+
if (!Array.prototype.findLastIndex) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.findLastIndex = function findLastIndex<T>(
    this: T[],
    predicate: (value: T, index: number, array: T[]) => boolean
  ): number {
    for (let i = this.length - 1; i >= 0; i--) {
      if (predicate(this[i], i, this)) return i;
    }
    return -1;
  };
}
