import React from "react";
import styles from "./TextArea.module.css";

function TextArea(
    { id: textAreaId, label, value, ...delegated },
    ref
) {
    const generatedId = React.useId();
    const id = textAreaId || generatedId;

    return (
        <div>
            <label
                htmlFor={`message-${id}`}
                className={styles.label}
                style={{ alignSelf: "baseline" }}>
                {label}
            </label>
            <textarea
                {...delegated}
                ref={ref}
                id={`message-${id}`}
                className={styles.messageInput}
                value={value}
            />
        </div>
    );
}

export default React.forwardRef(TextArea);
