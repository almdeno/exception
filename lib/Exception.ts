export interface ExceptionProps {
    id: string;
    internalMessageShort: string;
    internalMessageLong: string;
    userMessageShort: string;
    userMessageLong: string;
}

export class Exception {
    private readonly _id: string;
    private readonly _internalMessageShort: string;
    private readonly _internalMessageLong: string;
    private readonly _userMessageShort: string;
    private readonly _userMessageLong: string;
    constructor(exceptionProps: ExceptionProps) {
        this._id = exceptionProps.id;
        this._internalMessageShort = exceptionProps.internalMessageShort;
        this._internalMessageLong = exceptionProps.internalMessageLong;
        this._userMessageShort = exceptionProps.userMessageShort;
        this._userMessageLong = exceptionProps.userMessageLong;
    }

    get errorMessage(): string {
        return `Error ID: ${this._id}. Message: ${this._internalMessageShort}.`;
    }

    get id(): string {
        return this._id;
    }

    get internalMessageShort(): string {
        return this._internalMessageShort;
    }

    get internalMessageLong(): string {
        return this._internalMessageLong;
    }

    get userMessageShort(): string {
        return this._userMessageShort;
    }

    get userMessageLong(): string {
        return this._userMessageLong;
    }
}

export const UnexpectedException = new Exception({
    id: 'UNEXPECTED_EXCEPTION';
    internalMessageShort: 'An unexpected exception occurred';
    internalMessageLong: 'An unexpected exception occurred';
    userMessageShort: 'An unexpected exception occurred';
    userMessageLong: 'An unexpected exception occurred';
});
