import { lazy } from 'react';

export const SignInPage = lazy(() => import('./SignIn'));
export const SignUpPage = lazy(() => import('./SignUp'));
export const OAuthPage = lazy(() => import('./OAuthRedirectHandler'));
