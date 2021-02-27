import { createAction } from '@reduxjs/toolkit';

export const api = createAction('api');
export const apiSuccess = createAction('apiSuccess');
export const apiFailed = createAction('apiFailed');
