import React from "react";
import '../styles/About.css';
import "bootstrap/dist/css/bootstrap.css";
import cinema from "../assets/cinema.png";

export default function About() {
    return (
        <div className="About">
            <div className="row">
                        <h1 className="m-4 text-center">About Cinematic Flirt</h1>
                    <div className="col-lg-6">
                        <img src={cinema} className="cinema img-fluid" alt="Cinema"/>
                    </div>
                    <div className="About col-lg-6">
                        <p className="m-0 text-center About">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis commodo odio aenean sed. Fringilla ut morbi tincidunt augue interdum velit euismod in. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Condimentum mattis pellentesque id nibh. Lacus viverra vitae congue eu consequat. Lobortis mattis aliquam faucibus purus in. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Aliquam purus sit amet luctus. Dignissim convallis aenean et tortor at risus viverra. Nam libero justo laoreet sit amet. Risus in hendrerit gravida rutrum quisque. Nisi est sit amet facilisis. Suscipit tellus mauris a diam maecenas sed enim. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Diam vel quam elementum pulvinar etiam non quam lacus. Est ullamcorper eget nulla facilisi etiam.
                        Vitae proin sagittis nisl rhoncus mattis. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Ut tristique et egestas quis. Quam adipiscing vitae proin sagittis. Fusce id velit ut tortor pretium viverra. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Nibh mauris cursus mattis molestie a iaculis at erat. Sem et tortor consequat id. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Aliquet risus feugiat in ante metus dictum at tempor commodo. Felis eget nunc lobortis mattis aliquam faucibus purus in. Et netus et malesuada fames ac turpis egestas. Morbi tempus iaculis urna id volutpat lacus laoreet non. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis. Varius morbi enim nunc faucibus a pellentesque sit amet. Ut faucibus pulvinar elementum integer enim. Ac turpis egestas maecenas pharetra convallis posuere morbi. Sit amet dictum sit amet justo donec enim diam vulputate. Sed velit dignissim sodales ut eu sem integer.
                        </p>
                    </div>
            </div>
        </div>
    )
}