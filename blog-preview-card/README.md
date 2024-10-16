# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Blog preview card solution](#frontend-mentor---blog-preview-card-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot](./images/Screenshot%20from%202024-10-15%2011-02-20.png)

### Links

- Solution URL: [This repo](https://github.com/sashauly/blog-preview-card)
- Live Site URL: [GitHub Pages](https://sashauly.github.io/blog-preview-card/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- normalize.css
- vite for local development(instead of Live Preview Extension)

### What I learned

- How to use variable fonts in CSS

  ```css
  @font-face {
    font-family: Figtree;
    src: url("/assets/fonts/Figtree-VariableFont_wght.ttf") format("truetype");
    font-weight: 500 800;
    font-style: normal;
  }
  ```

- First time I used native CSS nesting with BEM

  ```css
  .card{
    ...
    .card__image {
      ...
    }
    .card__content {
      ...
    }
    .card__author {
      ...
    }
  }
  ```

## Author

- Frontend Mentor - [@sashauly](https://www.frontendmentor.io/profile/sashauly)
- Telegram - [@sashauly](https://t.me/sashauly)
