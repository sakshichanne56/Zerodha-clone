import React from "react";

function Logout() {

    const handleLogout = () => {

        // Remove login information
        localStorage.removeItem("username");
        localStorage.removeItem("token");

        // Go back to frontend login page
        window.location.href =
            "https://zerodha-clone-1-wp2c.onrender.com/login";


    };

    return (
        <button
            onClick={handleLogout}
            style={{
                padding: "8px 20px",
                border: "1px solid #387ed1",
                borderRadius: "5px",
                backgroundColor: "white",
                color: "#387ed1",
                cursor: "pointer"
            }}
        >
            Logout
        </button>
    );
}

export default Logout;
