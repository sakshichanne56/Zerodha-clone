import React, { useState } from "react";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/login`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }
            );

            const data = await response.json();

            console.log("Login response:", data);

            

            if (response.ok) {

                alert("Login successful!");

                // Save username in browser
                localStorage.setItem(
                    "username",
                    data.username
                );

                // Save token
                localStorage.setItem(
                    "token",
                    data.token
                );

               // Go to dashboard
            window.location.href =
               "https://zerodha-clone-2-7k55.onrender.com/"+
    encodeURIComponent(data.username);;


            } else {

                alert(data.message);

            }

        } catch (error) {

            console.log("Login error:", error);

            alert("Unable to connect to server");

        }
    };


    return (
        <div
            style={{
                width: "400px",
                margin: "100px auto",
                padding: "30px",
                border: "1px solid #ddd",
                borderRadius: "10px"
            }}
        >

            <h2>Login</h2>

            <form onSubmit={handleLogin}>

                <div style={{ marginBottom: "15px" }}>

                    <label>Email</label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
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
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
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
                    Login
                </button>

            </form>

        </div>
    );
}

export default Login;
