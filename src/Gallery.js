import React from "react";
import "./Gallery.css"

export function Profile() {
    return (
        <img className="edit_img"
            src="https://i.imgur.com/MK3eW3As.jpg"
            alt="Katherine Coleman Goble Johnson"
        />
    );
};

export default function Gallery() {
    return (
        <section>
            <h1>Amazing Scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}