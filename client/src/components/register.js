// import {useState, useEffe}

import { useState } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage"

const initialValues = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    showAlert: true
}

function Register() {

    const [values, setValue] = useState(initialValues);

    const handleChange = (e) => {
        console.log(e.target);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    return (
        <Wrapper className='full-page'>
            <form className="form" onSubmit={handleSubmit}>
                <Logo />
                {values.showAlert && <Alert />}
                <h3>Login</h3>
                <FormRow
                    labelText="Name"
                    type='text'
                    value={values.name}
                    handleChange={handleChange}
                    name="Name"
                />
                <FormRow
                    labelText="Email"
                    type="email"
                    value={values.email}
                    handleChange={handleChange}
                    name="email"
                />
                <FormRow
                    labelText="Password"
                    type="password"
                    value={values.password}
                    handleChange={handleChange}
                    name="password"
                />
                <button className="btn btn-block" type="submit">Submit</button>
            </form>
        </Wrapper>
    )
}

export default Register;
