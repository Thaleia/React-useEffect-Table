import { useEffect,useState } from "react";

export default function ValidateInputField() {
    const [input, setInput] = useState("");
    const [isValid, setIsValid] = useState(false);

    const inputHandler = e => {
        setInput(e.target.value);
    };

    useEffect(() => {
        if(input.length < 5 || /\d/.test(input)) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }, [input]);

    return (
        <>
            <h1>Validate input field for 5 or more non-numerical characters</h1>
        </>
    )
}