import React from "react";
import styles from "./IconButton.module.css";

function IconButton({
    children,
    icon: Icon = "",
    action = "Icon",
    className = "",
    ...delegated
}) {
    const buttonClass = `${styles.button} ${className}`;
    return (
        <button
            {...delegated}
            className={buttonClass}
            type="button"
            aria-live="off"
            aria-label={action}>
            <span>
                <Icon
                    strokeWidth={1.5}
                    size={24}
                />
            </span>
            <span>{children}</span>
        </button>
    );
}

export default IconButton;
