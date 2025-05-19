import { createContext, useState, useCallback } from "react";
import useKeydown from "../../hooks/useKeydown";
export const ToastContext = createContext();

function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const handleEscape = useCallback(() => setToasts([]), []);
    useKeydown("Escape", handleEscape);

    function createToast(message, variant) {
        setToasts((currentToast) => [
            ...currentToast,
            {
                message,
                variant,
                id: crypto.randomUUID(),
            },
        ]);
    }

    function deleteToast(id) {
        const newToast = toasts.filter((item) => item.id !== id);
        setToasts(newToast);
    }

    return (
        <ToastContext value={{ toasts, createToast, deleteToast }}>
            {children}
        </ToastContext>
    );
}

export default ToastProvider;
