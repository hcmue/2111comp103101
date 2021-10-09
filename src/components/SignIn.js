import React from "react";
import { useInput } from "../customHooks/useInput";

export const SignInForm = () => {
    const email = useInput("");
    const password = useInput("");

    const submitForm = (event) => {
        event.preventDefault();
        console.log("email", email.value);
        console.log("password", password.value);
    };
    return (
        <form onSubmit={submitForm}>
            <h3>Sign in</h3>
            <input placeholder="Email" {...email} />
            <br />
            <input placeholder="Password" type="password" {...password} />
            <button type="submit">Sign in</button>
        </form>
    );
};