import { AxiosResponse, AxiosError } from 'axios';
import { createReducer, createAction, createAsyncAction, ActionType } from 'typesafe-actions';

// 1. action type
const INIT = 'INIT' as const;
const INIT_REQUEST = 'INIT_REQUEST' as const;
const INIT_SUCCESS = 'INIT_SUCCESS' as const;
const INIT_FAILURE = 'INIT_FAILURE' as const;

// FIXME: 여기서 interface의 의미, 용도가 뭐야?
interface requestPayloadType {}

interface successPayloadType {}

// 2. action func
export const getInit = createAction(INIT, ({ ...param }) => ({ ...param }));

// 3. ready action type
const actions = { getInit };
export type InitAction = ActionType<typeof actions>;

// 4. ready state type
export type InitState = {
  count: number;
};

// 5. FIXME: state
const initState: InitState = {
  count: 1,
};

// 6. reducer
const counter = createReducer<InitState, InitAction>(initState, {
  [INIT_REQUEST]: (state: InitState, action: any) => ({
    ...state,
    count: state.count + 1,
  }),
});

export default counter;
