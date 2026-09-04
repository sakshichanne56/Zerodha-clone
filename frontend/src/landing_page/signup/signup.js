import React, { useState } from "react";

function Signup() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch(`${process.env.REACT_APP_API_URL}/signup`, {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password
                })
            });

            const data = await response.json();

            if (response.ok) {

                alert("Signup successful!");

                setUsername("");
                setEmail("");
                setPassword("");

            } else {

                alert(data.message);

            }

        } catch (error) {

            console.log(error);

            alert("Something went wrong. Please try again.");

        }
    };


    return (

        <div style={{
            width: "400px",
            margin: "100px auto",
            padding: "30px",
            border: "1px solid #ddd",
            borderRadius: "10px"
        }}>

            <h2>Signup</h2>

            <form onSubmit={handleSignup}>

                <div style={{ marginBottom: "15px" }}>

                    <label>Username</label>

                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "5px"
                        }}
                    />

                </div>


                <div style={{ marginBottom: "15px" }}>

                    <label>Email</label>

                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "5px"
                        }}
                    />

                </div>


                <div style={{ marginBottom: "15px" }}>

                    <label>Password</label>

                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "5px"
                        }}
                    />

                </div>


                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: "#387ed1",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
                >
                    Sign Up
                </button>

            </form>

        </div>

    );
}

export default Signup;
