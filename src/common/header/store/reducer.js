import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true)
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false)
    case actionTypes.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
      // state.set('list', action.data).set('totalPage', action.totalPage)
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }

  // if (action.type === actionTypes.SEARCH_FOCUS) {
  //   // immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象
  //   return state.set('focused', true)
  // }
  // if (action.type === actionTypes.SEARCH_BLUR) {
  //   return state.set('focused', false)
  // }
  // if (action.type === actionTypes.CHANGE_LIST) {
  //   return state.set('list', action.data)
  //   // console.log(action)
  //   // return state
  // }
  // return state
}