import React from "react";
import useKeydown from "../../hooks/use-keydown.hook";

export const ToastProviderContext = React.createContext();

function ToastProvider({ children }) {
    const [toasts, setToasts] = React.useState([
        {
            message: "Hello world !",
            variant: "notice",
            id: crypto.randomUUID(),
        },
    ]);

    const createToast = React.useCallback(
        (message, variant) => {
            const nextToast = [
                ...toasts,
                {
                    message,
                    variant,
                    id: crypto.randomUUID(),
                },
            ];

            setToasts(nextToast);
        },
        [toasts]
    );

    const dismissToast = React.useCallback(
        (id) => {
            const nextToasts = toasts.filter((toast) => {
                return toast.id !== id;
            });

            setToasts(nextToasts);
        },
        [toasts]
    );

    const dismissAllToast = React.useCallback(() => {
        setToasts([]);
    }, []);

    useKeydown("escape", dismissAllToast);

    return (
        <ToastProviderContext.Provider
            value={{
                createToast,
                dismissToast,
                toasts,
            }}>
            {children}
        </ToastProviderContext.Provider>
    );
}

export default ToastProvider;
