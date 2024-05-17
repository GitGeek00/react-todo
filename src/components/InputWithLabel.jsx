import { useEffect, useRef } from "react";

const InputWithLabel = ({ handleTitleChange, todoTitle, children }) => {

    const inputRef = useRef('');

    useEffect(() => {
        inputRef.current.focus();
    });

    return (
        <>
            <label htmlFor="todoTitle">{children}</label>
            <input
                ref={inputRef}
                type="text"
                id="todoTitle"
                name="title"
                onChange={handleTitleChange}
                value={todoTitle}
            />
        </>
    );
}

export default InputWithLabel;