export const ROUTE_ROOT = '';

/** 소개페이지 */
export const ROUTE_INFO = `/`;

/* 로그인 */
export const ROUTE_SIGN_IN = `${ROUTE_ROOT}/oauth`;

/* 로그인 - 리다이렉트 처리 */
export const ROUTE_SIGN_HANDLER = `${ROUTE_SIGN_IN}/redirect/:id`;
export const ROUTE_SIGN_HANDLER_WITH_ID = (id:string) =>  `${ROUTE_SIGN_HANDLER}/${id}`;

/* 회원가입 */
export const ROUTE_SIGN_UP = `${ROUTE_ROOT}/signUp`;

/* 목표 매인 */
export const ROUTE_GOAL = `goals`;
export const ROUTE_GOAL_MY = 'my';
export const ROUTE_GOAL_LIST = `:goalId`;
export const ROUTE_EXECUTION_GOAL_LIST = `:executionId`;
export const ROUTE_GOAL_WRITE = `write`;
export const ROUTE_GOAL_REWRITE = `rewrite`;

/* 옵저빙 매인 */
export const ROUTE_OBSERVE = `observe`;

/* 프로필 페이지 */
export const ROUTE_PROFILE = `/profile`;

/* 피드 메인 */
export const ROUTE_FEED = `/feed`;

/* 피드 상세 */
export const ROUTE_FEED_DETAIL =`${ROUTE_FEED}/:id`;
export const ROUTE_FEED_DETAIL_WITH_ID =(id:string) => `${ROUTE_FEED}/${id}`;
