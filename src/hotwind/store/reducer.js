import * as action from './action-type'

const defaultState = {
    starHotwind: '初始化项目', // 初始化项目
}

export default (state = defaultState, action = {}) => {
    switch (action.type) {
        case 'START_HOTWIND':
            return {
                ...state,
                starHotwind: action.testInstruct
            }
        default:
            return state
    }
}