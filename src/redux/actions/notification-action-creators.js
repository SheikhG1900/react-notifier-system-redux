
import { actionTypes } from '../redux-const'

const { SHOW_NOTIFICATION, REMOVE_NOTIFICATION, CLEAR_NOTIFICATIONS } = actionTypes
export const showNotification = notification => ({
  type: SHOW_NOTIFICATION,
  notification,
})

export const removeNotification = id => ({
  type: REMOVE_NOTIFICATION,
  id,
})

export const clearNotifications = () => ({
  type: CLEAR_NOTIFICATIONS,
})

