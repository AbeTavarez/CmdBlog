# CommandBlog <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries](#libraries)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Component Estimates](#component-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**CommandBlog** is a Blog web application build with privacy and security in mind.
Sign-up with your e-mail and start sharing with the world._

<br>

## MVP

_**CommandBlog** An user should be able to signup using a personal email and password.
After the user has succesfully created an acccount, the user can create and share new articles._

<br>

### Goals

- _Create back-end Full CRUD using Ruby On Rails._
- _Create front-end Full CRUD using ReactJS._
- _Style front-end using CSS Grid, Flexbox and Semantic UI._
- _Implement Authentication for the Users._

<br>

### Libraries

> Supporting libraries and dependencies, and their role in the project.

|     Library      | Description                                                                |
| :--------------: | :------------------------------------------------------------------------- |
|      React       | _Front-end Library._                                                       |
|   React Router   | _Routing for React._                                                       |
| React SemanticUI | _Front-end UI Framework._                                                  |
|      Axios       | _Promise based HTTP client for the browser and node.js._                   |
|      Rails       | _Web application development framework._                                   |
|    PostgreSQL    | _Open source object-relational database system._                           |
|  JSON Web Token  | _Secure way of transmitting information between parties as a JSON object._ |
|      bcrypt      | _A library to help you hash passwords._                                    |
|       CORS       | _Middleware that can be used to enable CORS with various options._         |

<br>

### Client (Front End)

#### Wireframes

> Wireframes section to display desktop, tablet and mobile views.

![Dummy Link](https://res.cloudinary.com/abetavarez/image/upload/v1591740029/Screen_Shot_2020-06-09_at_5.42.21_PM_qx0aqr.png)

- Wireframe

![Dummy Link](https://res.cloudinary.com/abetavarez/image/upload/v1591740020/Screen_Shot_2020-06-09_at_5.59.38_PM_qav1pc.png)

- Tablet Resource Index

![Dummy Link](https://res.cloudinary.com/abetavarez/image/upload/v1591740018/Screen_Shot_2020-06-09_at_5.59.51_PM_eeozod.png)

- Mobile Resource Index

#### Component Tree

> Structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components.

![Dummy Link](https://res.cloudinary.com/abetavarez/image/upload/v1591740031/Screen_Shot_2020-06-09_at_5.42.05_PM_n8bumn.png)

- Main Components

#### Component Hierarchy

> React components and the data architecture of app. Expected your directory/file tree.

```structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups

|__ components/
      |__ Header.jsx
      |__ Main.jsx
      |__ Footer.jsx
      |__ shared/
        |__ Articles.jsx
        |__ Caterories.jsx
        |__ Article.jsx
        |__ Category.jsx
|__ App.js

|__ services/


```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

| Component |    Type    | state | props | Description                                                      |
| :-------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|  Header   | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|   Main    |   class    |   n   |   n   | _The main will provide a link to each of the pages._             |
| Articles  |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
|  Article  | functional |   n   |   y   | _The cards will render the post info via props._                 |
|  Footer   | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

![Dummy Link](https://res.cloudinary.com/abetavarez/image/upload/v1591740024/Screen_Shot_2020-06-09_at_5.42.39_PM_qb1oqm.png)

> ERD

<br>

---

## Post-MVP

> - _Add error handling on the backend._
> - _Add test to the frontend._
> - _._

---

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
