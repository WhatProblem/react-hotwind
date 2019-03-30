import * as action from './action-type'

const defaultState = {
    starHotwind: '初始化项目', // 初始化项目
    tagViews: [], // 导航过的地址集合
}

export default (state = defaultState, action = {}) => {
    // console.log(state)
    // console.log(action)
    switch (action.type) {
        case 'START_HOTWIND':
            return {
                ...state,
                starHotwind: action.testInstruct
            }
        case 'ADD_ROUTE':
            return refreshSate(state, action)
        default:
            return state
    }
}

export const refreshSate = (state, action) => {
    state.tagViews.push(action.routeStatus)
    return state
}