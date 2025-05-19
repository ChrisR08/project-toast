import { useEffect } from "react";

function useKeydown(keydown, callback) {
    useEffect(() => {
        // Logic
        const handleKeydown = (e) => {
            if (e.key === keydown) {
                callback(e);
            }
        };
        window.addEventListener(`keydown`, handleKeydown);

        // Cleanup
        return () => {
            window.removeEventListener(`keydown`, handleKeydown);
        };
    }, [callback, keydown]);
}

export default useKeydown;
