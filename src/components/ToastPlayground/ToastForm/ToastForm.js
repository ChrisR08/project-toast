import { useState, useContext } from "react";

import TextAreaRow from "./TextAreaRow";
import VariantsRow from "./VariantsRow";
import ButtonRow from "./ButtonRow";

import styles from "../ToastPlayground.module.css";
import { ToastContext } from "../../ToastProvider";

function ToastForm() {
    const [message, setMessage] = useState("");
    const [variant, setVariant] = useState(`notice`);

    const { createToast } = useContext(ToastContext);

    function submitToastMsg(e) {
        e.preventDefault();
        createToast(message, variant);
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
