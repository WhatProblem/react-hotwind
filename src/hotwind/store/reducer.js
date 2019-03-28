import * as action from './action-type'

const defaultState = {
    starHotwind: '初始化项目', // 初始化项目
}

export default (state = defaultState, action = {}) => {
    switch (action.type) {
        case action.START_HOTWIND:
            return {
                ...state,
                testInstruct: action.testInstruct
            }
        default:
            return state
    }
}