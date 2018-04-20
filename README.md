# React Notifier System

[![npm version](https://badge.fury.io/js/react-notifier-system-redux.svg)](https://badge.fury.io/js/react-notifier-system-redux) [![Dependency Status](https://david-dm.org/sheikhG1900/react-notifier-system-redux.svg)](https://david-dm.org/sheikhG1900/react-notifier-system-redux) [![devDependency Status](https://david-dm.org/sheikhG1900/react-notifier-system-redux/dev-status.svg)](https://david-dm.org/sheikhG1900/react-notifier-system-redux#info=devDependencies) [![Build Status](https://travis-ci.org/SheikhG1900/react-notifier-system-redux.svg?branch=master)](https://travis-ci.org/SheikhG1900/react-notifier-system-redux) [![Coverage Status](https://coveralls.io/repos/github/SheikhG1900/react-notifier-system-redux/badge.svg?branch=master)](https://coveralls.io/github/SheikhG1900/react-notifier-system-redux?branch=master)

> Redux implementation of [react-notifier-system](https://github.com/sheikhG1900/react-notifier-system).

> Indirect redux implementation of [react-notification-system](https://igorprado.github.io/react-notification-system), with edit and remove options.

> The alternative of [react-notification-system-redux](https://github.com/gor181/react-notification-system-redux)

<a href="https://igorprado.github.io/react-notification-system/"><img width="728" src="https://github.com/igorprado/react-notification-system/raw/master/example/src/images/screenshot.jpg" alt="Screenshot"></a>

## Installing

```
npm install react-notifier-system-redux
```

## Using

### redux store configuration
```js
import {createStore, combineReducers} from 'redux';
import {reducer as notifications} from 'react-notifier-system-redux';

export function configureStore(initialState = {}) {
  return createStore(
    combineReducers({
      
      // storeKey. You can keep it as you want. Its default value is "notifications" 
      notifications,
      .....,
      ...

    }),
    initialState
  );
}
```
### add react notifier redux component
For optimal appearance, this component **must be rendered on a top level HTML element** in your application to avoid position conflicts.

```js
import * as React from 'react'
import { Notifier } from 'react-notifier-system-redux'

const App = () => (
  <div>
    {/* optional property [storeKey="notifications"]. storeKey is only required when it is configured other then "notifications". See your store configuration */}
    <Notifier />
  </div>
)

ReactDOM.render(
  React.createElement(App),
  document.getElementById('app')
);
```

### example of dispatching actions
```js
import React from 'react'
import { connect } from 'react-redux'
import { showNotification, clearNotifications, removeNotification } from  'react-notifier-system-redux'

const DispatchigExample = class extends React.Component<{dispatch: func}> {
  dispatchNotificationActions() {
      const { dispatch } = this.props
      dispatch(clearNotifications())

      dispatch(showNotification({
        message: 'Notification 1',
        level: 'error',
        title: 'Notification 1 Title',
        autoDismiss: 0,
        id: 'notification-1',
      }))

      dispatch(showNotification({
        message: 'Notification 2',
        level: 'error',
        title: 'Notification 2 Title',
        autoDismiss: 0,
        id: 'notification-2',
      }))

      dispatch(showNotification({
        message: 'Notification New',
        level: 'error',
        title: 'Notification New Title',
        autoDismiss: 0,
      }))

      // "notification-2" will never be shown as it is removed.
      dispatch(removeNotificationById('notification-2'))
    }

  render() {
    return (
      <div>
        <button onClick={this.dispatchNotificationActions}>Dispatch Notification Actions</button>
      </dev>
    )
  }
}

// connect is used to get dispatch method.
export default connect()(DispatchigExample)

```
