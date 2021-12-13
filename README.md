# Space tourism website
Space tourism is human space travel for recreational purposes. There are several different types of space tourism, including orbital, suborbital, and lunar space tourism.

Choose us for this adventure. See the places to explore. Please get to know the crew and the technologies that make it possible.

## Table of contents

- [Space tourism website](#space-tourism-website)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [Highlights](#highlights)
      - [Handling GraphQL client](#handling-graphql-client)
      - [CSS Modules](#css-modules)
    - [Continued development](#continued-development)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information
### Screenshot

![Live website](../readme-assets/readme-assets/../space-tourism.gif)

### Links

- Live Site URL: [React front-end](https://react-spacetourism.vercel.app/)

## My process

### Built with
- Semantic HTML5 markup
- SASS
- CSS Modules
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- Apollo GraphQL

### Highlights
#### Handling GraphQL client
```tsx
  // handling errors
  if (error) return <ErrorHandler error={error} />;
  // handling data
  else if (page) {
    const { crew }: { crew: PageData[] } = data;
    return (
      <article className={`${styles["crew"]}`}>
        ...
      </article>
    );
  }
  // handling loading
  else return <Spinner />;
```
#### CSS Modules

Adding component specific classes with CSS mdoules.
```tsx
  import styles from "./crew.module.scss";

  <article className={`${styles["crew"]}`}>
        <h1 className={styles["crew-title"]}>
          <span>02 </span>MEET YOUR CREW
        </h1>

        <img src={page.img} alt={page.name} className={styles["crew-img"]} />

        <nav className={styles["crew-list"]}>
          <button
            onClick={() => setPage({ ...crew[0], img: commander })}
          ></button>
          <button
            onClick={() => setPage({ ...crew[1], img: specialist })}
          ></button>
          <button onClick={() => setPage({ ...crew[2], img: pilot })}></button>
          <button
            onClick={() => setPage({ ...crew[3], img: engineer })}
          ></button>
        </nav>

        <h2 className={styles["crew-position"]}>{page.position}</h2>
        <h3 className={styles["crew-name"]}>{page.name}</h3>

        <p className={styles["crew-bio"]}>{page.bio}</p>
      </article>
```
Import general styles that affect all components.
```tsx
// added to the home component
import "./App.scss";
```

### Continued development
Areas that I want to focus on in future projects.

- Adding the images to a image server and using the graphql server to share the url of the image.
- Adding Content Management System (CMS) for handling the edit, update and delete functionalities.
  

## Author

- Website - [Royer Adames](https://www.royeradames.com)
- LinkedIn - [@royeradames](https://www.linkedin.com/in/royer-adames/)