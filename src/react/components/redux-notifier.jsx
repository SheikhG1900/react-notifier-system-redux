// @flow
import * as React from 'react'
import Notifier from 'react-notifier-system'
import { connect } from 'react-redux'
import { actionTypes } from '../../redux/redux-const'

export const WrappedNotifier = class extends React.Component<{notifications: [], dispatch: Function}> {
  componentDidUpdate(prevProps: any) {
    if (this.props.notifications && this.props.notifications.length > 0
        && prevProps.notifications !== this.props.notifications) {
      this.props.dispatch({ type: actionTypes.REST })
      this.props.notifications.forEach((notification) => {
        if (notification.clear) {
          this.notifier.clearNotifications()
        } else if (notification.remove) {
          this.notifier.removeNotificationById(notification.remove)
        } else {
          this.notifier.showNotification(notification)
          this.notifier.removeNotificationById(notification.id)
        }
      })
    }
  }

  notifier: any;
  render() {
    return <Notifier ref={notifier => (this.notifier = notifier)} />
  }
}

const mapStateToProps = (state, { storeKey = 'notifications' }) => ({
  notifications: state[storeKey],
})


export default connect(mapStateToProps)(WrappedNotifier)
