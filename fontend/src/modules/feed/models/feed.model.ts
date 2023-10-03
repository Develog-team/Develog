import { PaginateResult, userPrimary } from "modules/common";

//목록 미리보기
export interface feedPrev {
    key:number;
    user: userPrimary;
    regDt: string;
    contents: feedPrevContent;
}

//미리보기 컨텐츠
interface feedPrevContent {
    content?: string;
    url?: string;
}

export interface feedListResponse{
    value: PaginateResult<feedPrev>; 
}

