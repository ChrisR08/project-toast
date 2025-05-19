import { useState } from "react";

import TextAreaRow from "./TextAreaRow";
import VariantsRow from "./VariantsRow";
import ButtonRow from "./ButtonRow";

import styles from "../ToastPlayground.module.css";

function ToastForm({ setToast }) {
    const [message, setMessage] = useState();
    const [variant, setVariant] = useState(`notice`);

    function submitToastMsg(e) {
        e.preventDefault();
        setToast((currentToast) => [
            ...currentToast,
            {
                message,
                variant,
                id: crypto.randomUUID(),
            },
        ]);
        setMessage("");
        setVariant("notice");
    }

    return (
        <form className={styles.controlsWrapper} onSubmit={submitToastMsg}>
            <TextAreaRow message={message} setMessage={setMessage} />
            <VariantsRow variant={variant} setVariant={setVariant} />
            <ButtonRow />
        </form>
    );
}

export default ToastForm;
