import { useContext } from "react";
import {
    AlertOctagon,
    AlertTriangle,
    CheckCircle,
    Info,
    X,
} from "react-feather";

import { ToastContext } from "../ToastProvider";
import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS = {
    notice: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    error: AlertOctagon,
};

function Toast({ id, variant, children }) {
    const Icon = ICONS[variant];
    const { deleteToast } = useContext(ToastContext);

    return (
        <div className={`${styles.toast} ${styles[variant]}`}>
            <div className={styles.iconContainer}>
                <Icon size={24} />
            </div>
            <p className={styles.content}>{children}</p>
            <button
                className={styles.closeButton}
                onClick={() => deleteToast(id)}
            >
                <X size={24} />
                <VisuallyHidden>Dismiss message</VisuallyHidden>
            </button>
        </div>
    );
}

export default Toast;
