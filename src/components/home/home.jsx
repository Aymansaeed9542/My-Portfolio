import React from "react";
import Navbar from "../navbar/Navbar";
import Background from "../Background/Background";
import Content from "../Content/Content";
import Styles from "../Styles/Styles";

export default function Home() {
    return (
        <div className="min-h-screen bg-black relative overflow-hidden ">
            <Background />
            <Navbar />
            <Content />
            <Styles />
        </div>
    );
}
 