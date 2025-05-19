import { memo } from "react";
import Button from "../../../Button";

import styles from "../../ToastPlayground.module.css";

function ButtonRow() {
    return (
        <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                <Button>Pop Toast!</Button>
            </div>
        </div>
    );
}

export default memo(ButtonRow);
