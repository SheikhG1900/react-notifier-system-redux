import React, { Component } from 'react'
import TestUtils from 'react-dom/test-utils'
import Enzyme , { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureStore from 'redux-mock-store'
import { WrappedNotifier } from 'react/components/redux-notifier'
import reducer from 'redux/reducers/notification-reducer'
import { actionTypes } from 'redux/redux-const'
import { clearNotifications, removeNotification, showNotification } from 'redux/actions/notification-action-creators'

//congifure mock store
const middlewares = []
const initialState = {}
const mockStore = configureStore(middlewares)
const store = mockStore(initialState)


// Configure Enzyme
Enzyme.configure({ adapter: new Adapter() })

const notification1 = {
  message: 'Notification 1',
  level: 'info',
  title: 'Notification 1 Title',
  id: 'notification1',
}

const notificationAnonymous = {
  message: 'Notification Anonymous',
  level: 'info',
  title: 'Notification Anonymous Title',
}

let notifications = []
const wrapper = mount(<WrappedNotifier dispatch={store.dispatch} notifications={[]}/>)

beforeEach(() => {
    
})

test('Redux - add notification1 (with id)', () => {
  notifications = reducer(notifications, showNotification(notification1))
  expect(notifications.length).toEqual(1)  
})

test('Redux - add anonymous notification (without id)', () => {
  notifications = reducer(notifications, showNotification(notificationAnonymous))
  expect(notifications.length).toEqual(2)  
})

test('Redux - add notification1 (with id) - Again', () => {
  notifications = reducer(notifications, showNotification(notification1))
  expect(notifications.length).toEqual(3)  
})

test('Redux - remove notification1 (with id)', () => {
  notifications = reducer(notifications, removeNotification(notification1.id))
  expect(notifications.length).toEqual(2)  
  expect(notifications[1].remove).toEqual(notification1.id)
})

test('Redux - clear notifications', () => {
  notifications = reducer(notifications, clearNotifications())
  expect(notifications.length).toEqual(1)  
  expect(notifications[0].clear).toEqual(true)
})

test('Redux - reset notifications', () => {
  notifications = reducer(notifications, { type: actionTypes.REST })
  expect(notifications.length).toEqual(0)  
})

test('Redux - unknown action', () => {
  const notificationsAfter = reducer(notifications, { type: 'xyz' })
  expect(notifications === notificationsAfter).toEqual(true)  
})

test('React - notifications', () => {
  notifications = reducer(notifications, clearNotifications())
  notifications = reducer(notifications, showNotification(notification1))
  notifications = reducer(notifications, showNotification(notificationAnonymous))
  notifications = reducer(notifications, removeNotification(notification1.id))
  notifications = reducer(notifications, showNotification(notification1))

  wrapper.setProps({ notifications })

})

