import { AxiosResponse, AxiosError } from 'axios';
import { createReducer, createAction, createAsyncAction, ActionType } from 'typesafe-actions';

// action type
const INIT = 'INIT' as const;
const INIT_REQUEST = 'INIT_REQUEST' as const;
const INIT_SUCCESS = 'INIT_SUCCESS' as const;
const INIT_FAILURE = 'INIT_FAILURE' as const;

// FIXME: 여기서 interface의 의미, 용도가 뭐야?
interface requestPayloadType {}

interface successPayloadType {}

// action func
export const getInit = createAction(INIT, ({ ...param }) => ({ ...param }));

// ready action type
const actions = { getInit };
type InitAction = ActionType<typeof actions>;

// ready state type
interface initState = {
  count: number;
};

// reducer
const reducer = createReducer<initState, InitAction>(initState, {
  [INIT_REQUEST]: (state) => ({ count: state.count + 1 }),
});

export default reducer;
