import React from "react";

import Button from "../Button";
import Radio from "../Radio";
import TextArea from "../TextArea";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import toast from "../../../assets/toast.png";
import { ToastProviderContext } from "../ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
    const { createToast } = React.useContext(ToastProviderContext);

    const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
    const [message, setMessage] = React.useState("");

    const handleSumbitToast = React.useCallback(
        (event) => {
            event.preventDefault();

            createToast(message, variant);

            setMessage("");
            setVariant(VARIANT_OPTIONS[0]);
        },
        [createToast, message, variant]
    );

    return (
        <form
            onSubmit={handleSumbitToast}
            className={styles.wrapper}>
            <header>
                <img
                    alt="Cute toast mascot - https://www.vecteezy.com/"
                    src={toast}
                />
                <h1>Toast Playground</h1>
            </header>

            <ToastShelf />

            <div className={styles.controlsWrapper}>
                <div className={styles.row}>
                    <label
                        htmlFor="message"
                        className={styles.label}
                        style={{ alignSelf: "baseline" }}>
                        Message
                    </label>
                    <div className={styles.inputWrapper}>
                        <TextArea
                            value={message}
                            onChange={(event) =>
                                setMessage(event.target.value)
                            }
                            required
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>Variant</div>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                        {VARIANT_OPTIONS.map((tentitiveVariant) => {
                            return (
                                <Radio
                                    required
                                    name="radio-group-1"
                                    key={tentitiveVariant}
                                    checked={
                                        variant === tentitiveVariant
                                    }
                                    value={tentitiveVariant}
                                    onChange={(event) =>
                                        setVariant(event.target.value)
                                    }
                                />
                            );
                        })}
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label} />
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                        <Button type="submit">Pop Toast!</Button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default ToastPlayground;
