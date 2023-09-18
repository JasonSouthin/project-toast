import React from "react";

function useToggle(initialValue = false) {
    if (typeof initialValue !== "boolean") {
        throw new Error(
            `Unrecognized value: ${initialValue}, please supply a boolean value`
        );
    }

    const [value, setValue] = React.useState(initialValue);

    const toggleValue = React.useCallback(() => {
        setValue((currentValue) => !currentValue);
    }, []);

    return [value, toggleValue];
}

export default useToggle;
