import { AxiosResponse, AxiosError } from 'axios';
import { createReducer, createAction, createAsyncAction, ActionType } from 'typesafe-actions';

// 1. action type
const INIT = 'INIT' as const;
const INIT_REQUEST = 'INIT_REQUEST' as const;
const INIT_SUCCESS = 'INIT_SUCCESS' as const;
const INIT_FAILURE = 'INIT_FAILURE' as const;

// FIXME: Async action
interface RequestPayloadType {}
interface ResponsePayloadType {}

// FIXME: Async action
export const getAsyncInit = createAsyncAction(INIT_REQUESET, INIT_SUCCESS, INIT_FAILURE)<RequestPayloadType, AxiosResponse<ResponsePayloadType>, AxiosError>;

// 2. action func
export const getInit = createAction(INIT, ({ key, value }) => ({ key, value }))();

// 3. ready action type
const actions = { getInit };
type InitAction = ActionType<typeof actions>;

// 4. ready state type
type InitState = {
  value: string;
};

// 5. state
const initState: InitState = {
  value: 'Hi, Redux',
};

// 6. reducer
const initReducer = createReducer<InitState, InitAction>(initState, {
  [INIT_REQUEST]: (state: InitState, action: any) => ({
    ...state,
    value: state.value,
  }),
});

export default initReducer;
