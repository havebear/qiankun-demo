import { initGlobalState } from 'qiankun'

const initialState = { token: '', theme: 'light' }
const actions = initGlobalState(initialState)

export default actions