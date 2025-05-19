import { memo, useRef, useEffect } from "react";

import styles from "../../ToastPlayground.module.css";

function TextAreaRow({ message, setMessage }) {
    const textareaRef = useRef();

    useEffect(() => {
        textareaRef.current.focus();
    }, [message]);

    return (
        <div className={styles.row}>
            <label
                htmlFor="message"
                className={styles.label}
                style={{ alignSelf: "baseline" }}
            >
                Message
            </label>
            <div className={styles.inputWrapper}>
                <textarea
                    id="message"
                    className={styles.messageInput}
                    value={message}
                    onChange={(e) => setMessage(e.target.value.trim())}
                    ref={textareaRef}
                />
            </div>
        </div>
    );
}
export default memo(TextAreaRow);
