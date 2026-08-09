import { useState } from "react";

function Form() {
    // event when name changes

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const nameOnChange = (e) => {
        // console.log("NAME IS", e.target.value);
        setName(e.target.value);
    };

    const onSubmit = () => {
        console.log("Submit button clicked");
        console.log("name is", name);
        console.log("email is", email);
        console.log("password is", password);
        //request->
    };

    return (
        <div>
            <main>
                <div>
                    <div>
                        <label>Name</label>
                    </div>
                    <div>
                        <input
                            value={name} onChange={nameOnChange}
                        />
                    </div>
                </div>
            </main>

            <main>
                <div>
                    <label>Email</label>
                </div>
                <div>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </main>

            <main>
                <div>
                    <label>Password</label>
                </div>
                <div>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </main>

            <main>
                <button onClick={onSubmit}>Submit</button>
            </main>

            {/* displaying data */}
            <ul>
                <li>Name: {name}</li>
                <li>Email: {email}</li>
                <li>Password: {password}</li>
            </ul>
        </div>
    );
}

export default Form;