export type signRequestT = 'google' | 'kakao' | 'naver';


export interface signReRequestT{
    type: signRequestT;
    code: string;
}