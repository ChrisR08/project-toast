import { createContext, useState } from "react";

export const ToastContext = createContext();

function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

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
        <ToastContext.Provider value={{ toasts, createToast, deleteToast }}>
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;
