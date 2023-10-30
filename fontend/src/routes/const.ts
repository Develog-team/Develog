export const ROUTE_ROOT = '';

/** 소개페이지 */
export const ROUTE_INFO = `/`;

/* 로그인 */
export const ROUTE_SIGN_IN = `${ROUTE_ROOT}/signIn`;

/* 회원가입 */
export const ROUTE_SIGN_UP = `${ROUTE_ROOT}/signUp`;

/* 목표 매인 */
export const ROUTE_GOAL = `/goal`;

/* 프로필 페이지 */
export const ROUTE_PROFILE = `/profile`;

/* 피드 메인 */
export const ROUTE_FEED = `/feed`;

/* 피드 상세 */
export const ROUTE_FEED_DETAIL =`${ROUTE_FEED}/:id`;
export const ROUTE_FEED_DETAIL_WITH_ID =(id:string) => `${ROUTE_FEED}/${id}`;