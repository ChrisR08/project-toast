import Header from "./Header";
import ToastForm from "./ToastForm";
import ToastShelf from "../ToastShelf";
import styles from "./ToastPlayground.module.css";

function ToastPlayground() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <ToastShelf />
            <ToastForm />
        </div>
    );
}

export default ToastPlayground;
