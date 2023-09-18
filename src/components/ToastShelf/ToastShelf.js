import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import List from "../List";

import { ToastProviderContext } from "../ToastProvider";

function ToastShelf() {
    const { toasts } = React.useContext(ToastProviderContext);

    console.log(toasts);
    return (
        <List
            as="ol"
            role="region"
            aria-live="polite"
            aria-label="Notification"
            className={styles.wrapper}>
            {toasts.map((toast) => (
                <li
                    key={toast.id}
                    className={styles.toastWrapper}>
                    <Toast
                        id={toast.id}
                        variant={toast.variant}>
                        {toast.message}
                    </Toast>
                </li>
            ))}
        </List>
    );
}

export default React.memo(ToastShelf);
