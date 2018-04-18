import { actionTypes } from '../redux-const'

const { SHOW_NOTIFICATION, REMOVE_NOTIFICATION, CLEAR_NOTIFICATIONS, REST } = actionTypes
export default (state = [], action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return [...state, action.notification]
    case REMOVE_NOTIFICATION:
      const filteredList = state.filter(notification => !notification.id || notification.id !== action.id)
      filteredList.push({ remove: action.id })
      return filteredList
    case CLEAR_NOTIFICATIONS:
      return [{ clear: true }]
    case REST:
      return []

    default:
      return state
  }
}
