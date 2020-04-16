export interface ImapResponse<responseType> {
    success: boolean,
    response: responseType,
    message: string
}


export default function mapResponse<responseType>(input: ImapResponse<responseType>): ImapResponse<responseType> {
    return input;
}