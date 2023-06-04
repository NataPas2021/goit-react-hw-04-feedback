import css from './Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({message}) => {
    return (
        <>
        <h2 className={css.notification}>{message}</h2>
        </>
    )
}

export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired
}