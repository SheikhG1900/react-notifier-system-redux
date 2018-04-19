# React Notifier System

[![npm version](https://badge.fury.io/js/react-notifier-system-redux.svg)](https://badge.fury.io/js/react-notifier-system-redux) [![Dependency Status](https://david-dm.org/sheikhG1900/react-notifier-system-redux.svg)](https://david-dm.org/sheikhG1900/react-notifier-system-redux) [![devDependency Status](https://david-dm.org/sheikhG1900/react-notifier-system-redux/dev-status.svg)](https://david-dm.org/sheikhG1900/react-notifier-system-redux#info=devDependencies) [![Build Status](https://travis-ci.org/SheikhG1900/react-notifier-system-redux.svg?branch=master)](https://travis-ci.org/SheikhG1900/react-notifier-system-redux) [![Coverage Status](https://coveralls.io/repos/github/SheikhG1900/react-notifier-system-redux/badge.svg?branch=master)](https://coveralls.io/github/SheikhG1900/react-notifier-system-redux?branch=master)

> Redux implementation of [react-notifier-system](https://github.com/sheikhG1900/react-notifier-system).

<a href="https://igorprado.github.io/react-notification-system/"><img width="728" src="https://github.com/igorprado/react-notification-system/raw/master/example/src/images/screenshot.jpg" alt="Screenshot"></a>

## Installing

```
npm install react-notifier-system-redux
```

## Using

For optimal appearance, this component **must be rendered on a top level HTML element** in your application to avoid position conflicts.


```js
import * as React from 'react'
import Notifier from 'react-notifier-system-redux'

const App = class extends React.Component<{}> {
  addOrUpdateMyNotification = () => this.notifier.showNotification({
    message: 'My Notification',
    level: 'info',
    title: 'My Notification Title',
    id: 'mynotification',
  })

  addNotification = () => this.notifier.showNotification({
    message: 'New Notification',
    level: 'info',
    title: 'New Notification Title',
  })

  removeMyNotification = () => this.notifier.removeNotificationById('mynotification')

  notifier: any
  render() {
    return (
      <div>
        <Notifier ref={notifier => this.notifier = notifier} />
        <button onClick={this.addOrUpdateMyNotification}>Add or update my notification</button>
        <button onClick={this.removeMyNotification}>Remove my notification</button>
        <button onClick={this.addNotification}>Add new notification</button>
      </div>
    )
  }
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById('app')
);
```

## Methods

### `showNotification(notification)` 

Add or update a notification object. This displays the notification based on the [object](https://github.com/igorprado/react-notification-system#creating-a-notification) you passed.
It updates the notification if save `id`' found in current notification list, otherwise it adds this notification.

### `removeNotificationById(notificationId)`

Remove the notification by `id`.

## Roadmap

* Redux implementation

