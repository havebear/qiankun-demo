import { initGlobalState, type MicroAppStateActions } from 'qiankun'
const initialState = { token: '', theme: 'light' }
const actions: MicroAppStateActions = initGlobalState(initialState)

export default actions