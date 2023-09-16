import {Effect, Model} from 'dva-core-ts';
import {Reducer} from 'redux';

export interface HomeState {
  num: number;
}

interface HomeModule extends Model {
  namespace: 'home';
  state: HomeState;
  reducers: {
    add: Reducer<HomeState>;
  };
  effects: {
    asyncAdd: Effect;
  };
}

const initialState = {
  num: 0,
};

const homeModule: HomeModule = {
  namespace: 'home',
  state: initialState,
  reducers: {
    add(state = initialState, {payload}) {
      return {
        ...state,
        num: state.num + payload.num,
      };
    },
  },
  effects: {
    asyncAdd() {},
  },
};

export default homeModule;
