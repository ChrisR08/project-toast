import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toast, setToast }) {
    return (
        <ol className={styles.wrapper}>
            {toast?.map(({ message, variant, id }) => {
                return (
                    <li key={id} className={styles.toastWrapper}>
                        <Toast
                            toast={toast}
                            setToast={setToast}
                            id={id}
                            variant={variant}
                        >
                            {message}
                        </Toast>
                    </li>
                );
            })}
        </ol>
    );
}

export default ToastShelf;
