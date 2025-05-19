import { useState } from "react";

import Header from "./Header";
import ToastForm from "./ToastForm";
import ToastShelf from "../ToastShelf";
import styles from "./ToastPlayground.module.css";

function ToastPlayground() {
    const [toast, setToast] = useState([]);

    return (
        <div className={styles.wrapper}>
            <Header />
            <ToastShelf toast={toast} setToast={setToast} />
            <ToastForm setToast={setToast} />
        </div>
    );
}

export default ToastPlayground;
