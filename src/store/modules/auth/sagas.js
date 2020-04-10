import { all, takeLatest, put, call } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signFailure } from './actions';

export function* SignIn({ payload }) {
    try {
        const { email, password } = payload;

        const response = yield call(api.post, 'sessions', {
            email,
            password,
        });

        const { token, user } = response.data;

        if (!user.provider) {
            console.tron.error('Este usuário não é um prestador');
        }

        yield put(signInSuccess(token, user));

        api.defaults.headers.Authorization = `Bearer ${token}`;

        history.push('/deliveries');
    } catch (error) {
        yield put(signFailure());
    }
}

export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', SignIn),
    takeLatest('persist/REHYDRATE', setToken),
]);
