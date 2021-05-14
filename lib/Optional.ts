import {Err, Ok, Result} from "./Result.ts";
import {Exception} from "./Exception.ts";

export const InvalidOptionalGetException = new Exception({
    id: 'INVALID_OPTIONAL_GET',
    internalMessageShort: 'Invalid Optional Get.',
    internalMessageLong: 'An invalid optional was accessed using get.',
    userMessageShort: 'Invalid Optional Get.',
    userMessageLong: 'An invalid optional was accessed using get.',
});

export class Optional<T> {
    constructor(private readonly value?: T | null) {
    };

    public get(): Result<T> {
        if(this.value) {
            return Ok<T>(this.value);
        } else {
            return Err(InvalidOptionalGetException);
        }
    }

    public isPresent(): boolean {
        return !!this.value
    }

    public isEmpty(): boolean {
        return !this.value
    }

    public ifPresent(func: (val: T) => void) {
        if (this.value) {
            func(this.value);
        }
    }

    public orElse(val: T): T {
        if (this.value) {
            return this.value;
        } else {
            return val;
        }
    }

    public orElseGet(val: () => T): T {
        if (this.value) {
            return this.value;
        } else {
            return val();
        }
    }
}
