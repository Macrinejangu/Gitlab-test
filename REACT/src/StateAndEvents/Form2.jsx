import { useState } from "react";

function Form2() {
    const [input, setInput] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    });

    const handleChange = (e) => {
        setInput({
            ...input, //Object passed by reference/It's important to clone. Alternative to (...) is using StructuredClone().
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = () => {
        console.log("Form submitted");
        console.log("Name:", input.name);
        console.log("Email:", input.email);
        console.log("Phone:", input.phone);
        console.log("Password:", input.password);
    };

    return (
        <div>
            <h1>Registration Form</h1>

            <div>
                <label>Name</label>
                <input
                name="name" 
                value={input.name} 
                onChange={handleChange}
                />
            </div>

            <div>
                <label>Email</label>
                <input
                name="email" 
                value={input.email} 
                onChange={handleChange}
                />
            </div>

            <div>
                <label>Phone</label>
                <input
                name="phone" 
                value={input.phone} 
                onChange={handleChange}
                />
            </div>

            <div>
                <label>Password</label>
                <input
                    type="password" 
                    name="password" 
                    value={input.password} 
                    onChange={handleChange}
                />
            </div>

            <button onClick={onSubmit}>Submit</button>

            <h2>Current State</h2>

            <ul>
                <li>Name: {input.name}</li>
                <li>Email: {input.email}</li>
                <li>Phone: {input.phone}</li>
                <li>Password: {input.password}</li>
            </ul>
        </div>
    );
}

export default Form2;