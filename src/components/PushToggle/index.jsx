import React from 'react';
import './styles.css';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';

export default class PushToggle extends React.Component {
   render() {
       return <div className="push">
            <NotificationsOffIcon className='push__image'/>
       </div>
   }
}
