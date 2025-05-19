import { memo } from "react";
import styles from "../../ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function VariantsRow({ variant, setVariant }) {
    return (
        <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                {VARIANT_OPTIONS.map((option, index) => {
                    return (
                        <label key={option} htmlFor={`variant-${option}`}>
                            <input
                                id={`variant-${option}`}
                                type="radio"
                                name="variant"
                                value={option}
                                checked={option === variant}
                                onChange={() => setVariant(option)}
                            />
                            {option}
                        </label>
                    );
                })}
            </div>
        </div>
    );
}

export default memo(VariantsRow);
