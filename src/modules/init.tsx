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
interface InitAction = ActionType<typeof actions>;

// 4. ready state type
interface InitState = {
  count: number;
};

// 5. FIXME: state 
const initState: InitState = {
  count: 0
}

// 6. reducer
const reducer = createReducer<InitState, InitAction>(initState, {
  [INIT_REQUEST]: (state) => ({ count: state.count + 1 }),
});

export default reducer;
