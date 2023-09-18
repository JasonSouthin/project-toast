import React from "react";

function useKeydown(key, callback) {
    React.useEffect(() => {
        function handleDismiss(event) {
            if (event.code === key) {
                callback();
            }
        }

        window.addEventListener("keydown", handleDismiss);

        return () => {
            window.removeEventListener("keydown", handleDismiss);
        };
    }, [callback, key]);
}

export default useKeydown;
