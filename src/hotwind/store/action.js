import * as action from './action-type'

// 项目开始指令
export const startHotwind = (testInstruct) => ({
    type: action.START_HOTWIND,
    testInstruct
})

export const addRoute = (routeStatus) => ({
    type: action.ADD_ROUTE,
    routeStatus
})