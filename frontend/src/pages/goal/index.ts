import { lazy } from 'react';

export const GoalMainPage = lazy(() => import('./GoalMain'));

export const GoalPage = lazy(() => import('./MyGoal'));
export const GoalsubPage = lazy(() => import('./Goalsub'));
export const WriteGoalPage = lazy(() => import('./WriteGoal'));

export const ExecutionGoalPage = lazy(() => import('./ExecutionGoal'));

export const ObservePage = lazy(() => import('./Observe'));
