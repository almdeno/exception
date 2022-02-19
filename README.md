# safety

- version: v0.0.5
- url: https://raw.githubusercontent.com/almdeno/safety/0.0.5/

## background information

- https://blog.logrocket.com/pattern-matching-and-type-safety-in-typescript-1da1231a2e34/
- https://dev.to/_gdelgado/type-safe-error-handling-in-typescript-1p4n

## usage

## Exception

```ts
import {Exception, ExceptionProps} from 'safety/mod.ts';
```

### ExceptionProps

```ts
interface ExceptionProps {
    id: string;
    internalMessageShort: string;
    internalMessageLong: string;
    userMessageShort: string;
    userMessageLong: string;
}
```

### Exception
```ts
class Exception {
    constructor(exceptionProps: ExceptionProps) {
        this._id = exceptionProps.id;
        this._internalMessageShort = exceptionProps.internalMessageShort;
        this._internalMessageLong = exceptionProps.internalMessageLong;
        this._userMessageShort = exceptionProps.userMessageShort;
        this._userMessageLong = exceptionProps.userMessageLong;
    }
    
    get errorMessage(); // `Error ID: ${id}. Message: ${internalMessageShort}.`
    get id();
    get internalMessageShort();
    get internalMessageLong();
    get userMessageShort();
    get userMessageLong();
}
```

## Result

```ts
import {
    ifOk,
    ifErr,
    isOk,
    isErr,
    ResultOk,
    ResultErr,
    Result,
    Ok,
    Err
} from 'safety/mod.ts';
```

### ResultOk

```ts
interface ResultOk<T> {
    isError: false,
    value: T
}
```

### ResultErr

```ts
interface ResultErr {
    isError: true,
    error: Error,
    exception: Exception
}
```

### Result

```ts
type Result<T> = ResultErr | ResultOk<T>;
```

### Ok

```ts
function Ok<T>(value: T): ResultOk<T> {}
```

### Err

```ts
function Err(exception: Exception): ResultErr {}
```

### isOk

```ts
function isOk<T>(val: Result<T>): boolean {}
```

### isErr

```ts
function isErr<T>(val: Result<T>): boolean {}
```

### ifOk

```ts
function ifOk<T>(val: Result<T>, cb: (v: T) => void): void {}
```

### ifErr

```ts
function ifErr<T>(val: Result<T>, cb: (v: Exception) => void): void {}
```


## Optional

```ts
import {Optional, InvalidOptionalGetException} from 'safety/mod.ts';
```

### Optional

```ts
class Optional<T> {
    constructor(private readonly value?: T | null) {};
    public get(): Result<T> {}
    public isPresent(): boolean {}
    public isEmpty(): boolean {}
    public ifPresent(func: (val: T) => void) {}
    public orElse(val: T): T {}
    public orElseGet(val: () => T): T {}
}
```

### InvalidOptionalGetException

```ts
const InvalidOptionalGetException = new Exception({
    id: 'INVALID_OPTIONAL_GET',
    internalMessageShort: 'Invalid Optional Get.',
    internalMessageLong: 'An invalid optional was accessed using get.',
    userMessageShort: 'Invalid Optional Get.',
    userMessageLong: 'An invalid optional was accessed using get.',
});
```
