import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";
import styles from '../../../Styles/Common/ToastContainer/ToastContainer.module.css';
const ToastContainer = ({ type = "info", message, status }) => {
    if (!status) return null;

    const icons = {
        success: <FaCheckCircle className={styles.icon} />,
        error: <FaTimesCircle className={styles.icon} />,
        warning: <FaExclamationTriangle className={styles.icon} />,
        info: <FaInfoCircle className={styles.icon} />,
    };

    return (
        <div className={`${styles.ToastContainer} ${styles[type]}`}>
            {icons[type]}
            <span>{message}</span>
        </div>
    );
};

export default ToastContainer
