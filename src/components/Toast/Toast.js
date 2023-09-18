import React from "react";
import {
    AlertOctagon,
    AlertTriangle,
    CheckCircle,
    Info,
    X,
} from "react-feather";
import IconButton from "../IconButton";
import { ToastProviderContext } from "../ToastProvider";

import styles from "./Toast.module.css";
import VisuallyHidden from "../VisuallyHidden";

const ICONS_BY_VARIANT = {
    notice: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    error: AlertOctagon,
};

function Toast({ children, variant = "notice", id, ...delegated }) {
    const { dismissToast } = React.useContext(ToastProviderContext);
    const Icon = ICONS_BY_VARIANT[variant];

    return (
        <div
            className={`${styles.toast} ${styles[variant]}`}
            {...delegated}>
            <div className={styles.iconContainer}>
                <Icon />
            </div>
            <div className={styles.content}>
                <VisuallyHidden>{`${variant} -`}</VisuallyHidden>
                {children}
            </div>
            <IconButton
                icon={X}
                action={"Dismiss message"}
                id={id}
                onClick={() => dismissToast(id)}
            />
        </div>
    );
}

export default Toast;
