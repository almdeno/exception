# exception

- version: v0.0.1
- url: 

## ExceptionProps

```ts
export interface ExceptionProps {
    id: string;
    internalMessageShort: string;
    internalMessageLong: string;
    userMessageShort: string;
    userMessageLong: string;
}
```

## Exception
```ts
export class Exception {
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

