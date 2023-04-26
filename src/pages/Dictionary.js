import React from "react";
import { Bookmark } from "../components/Bookmark/Bookmark";
import { Navbar } from "../components/Navbar/Navbar";

export function Dictionary() {

    return (
        <div className="App">
            <Navbar />
            <header>
                <blockquote>
                    <h1>
                        My K Star Dictionary
                    </h1>
                    <footer>
                        <h2>
                            Find meanings and save for quick reference
                        </h2>
                    </footer>
                </blockquote>
                <Bookmark />
            </header>
        </div>
    );
};
