
export interface IReturn<T>
{
    createResponse(): T;
}

export interface IReturnVoid
{
    createResponse(): void;
}

export interface IHasSessionId
{
    sessionId: string;
}

export interface IHasBearerToken
{
    bearerToken: string;
}

export interface IPost
{
}

export interface IGet
{
}



// @DataContract
export class ResponseError
{
    public constructor(init?:Partial<ResponseError>) { (<any>Object).assign(this, init); }
    // @DataMember(Order=1, EmitDefaultValue=false)
    public errorCode: string;

    // @DataMember(Order=2, EmitDefaultValue=false)
    public fieldName: string;

    // @DataMember(Order=3, EmitDefaultValue=false)
    public message: string;

    // @DataMember(Order=4, EmitDefaultValue=false)
    public meta: { [index:string]: string; };
}

// @DataContract
export class ResponseStatus
{
    public constructor(init?:Partial<ResponseStatus>) { (<any>Object).assign(this, init); }
    // @DataMember(Order=1)
    public errorCode: string;

    // @DataMember(Order=2)
    public message: string;

    // @DataMember(Order=3)
    public stackTrace: string;

    // @DataMember(Order=4)
    public errors: ResponseError[];

    // @DataMember(Order=5)
    public meta: { [index:string]: string; };
}



export class shortenLinkResponse
{
    public constructor(init?:Partial<shortenLinkResponse>) { (<any>Object).assign(this, init); }
    public url: string;
    public expires: string;
    public sms_errors: string[];
}

// @Route("/link", "POST")
export class shortenLinkRequest implements IReturn<shortenLinkResponse>
{
    public constructor(init?:Partial<shortenLinkRequest>) { (<any>Object).assign(this, init); }
    public url: string;
    public lifetime_days: number;
    public sms_numbers: string[];
    public sms_message: string;
    public createResponse() { return new shortenLinkResponse(); }
    public getTypeName() { return 'shortenLinkRequest'; }
}


