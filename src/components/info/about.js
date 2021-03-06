import React, { Component } from 'react';

export default class About extends React.Component {
  render() {
    return (
        <article className="about">
            <h4 id="about-paragraph-1">The Digital City Series is a photographic project of digitally constructed city portraits from around the world. These portraits are created by splicing together diverse scenes from each city to form a singular square composition. The images are composed in a seamless fashion that invite the viewer to enter the picture and experience different parts of the city as one.</h4>
            <h4 id="about-paragraph-2" className="about-italic">"In Cubist artworks, objects are analyzed, broken up and reassembled in an abstracted form—instead of depicting objects from one viewpoint, the artist depicts the subject from a multitude of viewpoints to represent the subject in a greater context."<span id="about-reference-number" className="about-superscript"> 1</span></h4>
            <h4 id="about-paragraph-3">In the modern world, it is now possible to manipulate the photographic image with greater detail and accuracy. This series analyzes our environments in a greater context, by breaking up and reassembling the city into a realistic view, using digital technology to make context smoother.</h4>
            <p id="about-footnote-1">1. Jean Metzinger, 'Note sur la peinture', Pan (Paris), October-November 1910</p>
            <p id="about-footnote-2">Wikipedia, Cubism, opening summary, footnote [3]</p>
        </article>
    );
  }
}
