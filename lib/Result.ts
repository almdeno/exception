import {Exception} from "./Exception.ts";

export interface ResultOk<T> {
    isError: false,
    value: T
}

export interface ResultErr {
    isError: true,
    error: Error,
    exception: Exception
}

export type Result<T> = ResultErr | ResultOk<T>;

export function Ok<T>(value: T): ResultOk<T> {
    return {
        isError: false,
        value
    };
}

export function Err(exception: Exception): ResultErr {
    return {
        isError: true,
        error: new Error(exception.errorMessage),
        exception
    };
}

export function isOk<T>(val: Result<T>): boolean {
    return val.isError === false;
}

export function isErr<T>(val: Result<T>): boolean {
    return val.isError === true;
}

export function ifOk<T>(val: Result<T>, cb: (v: T) => void): void {
    if(val.isError === false) {
        cb(val.value);
    }
}

export function ifErr<T>(val: Result<T>, cb: (v: Exception) => void): void {
    if(val.isError === true) {
        cb(val.exception);
    }
}
