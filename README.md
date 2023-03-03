# React - The Complete Guide

## Introduction

- What is React.js?
  - Client-side JavaScript library for building modern UI
- Why JavaScript?
  - JavaScript manipulates DOM and avoids HTML requests
- Why React.js?
  - With JavaScript, you need to describe every single step and action (imperative approach)
  - Create low-level repetitive tasks again and again in JS
  - To Do example on React
- Building SPA (Single-page applications)
  - Requesting only single HTML page
  - React takes over and controls the UI
- React.js Alternatives
  - Angular.js - complete component based, more features, overkill for small projects, uses typescript
  - Vue.js - mixture of React & Angular. Features more than React, less than Angular
- Syllabus:
  - React Basics (Basic apps, key features)
    - Components, building UIs
    - Working with events and data, Props and State
    - Styling React apps & components
    - React Hooks
  - Advanced Concepts (Real apps, building for production)
    - Side effects, Refs and more hooks
    - React Context API, Redux
    - Forms, HTTP requests, custom hooks
    - Routing, deployment, Next.js
  - Summarize & Refresh
    - JavaScript Refresher
    - React JS Summary

## JavaScript Basics

- ES6 standard
- let (old usage: var) and const
- Arrow Functions

  ```javascript
  function myFunc() {

  }
  const myFunc = () => {

  }
  const myFunc = (number) => number * 2;
  ```

- Exports & Imports (modules)
  - Export entire file or statements
- Classes
  - Properties
  - Methods
  - Constructors
  - Super constructors & inheritance
- Spread and Rest operator (...)

  ```javascript
  const numbers = [1, 2, 3];
  const newNumbers = [...numbers, 4];
  ```

- Destructuring
  - Arrays
  - Objects

  ```javascript
  [a, b] = ['Hello', 'Max']
  {name} = {name: 'Yogesh', age: 27}
  ```

- Reference and Primitive Types
  - Numbers are primitive types. Copies are created.
  - Arrays and objects are reference types. Pointers are created.
  - Spread operator helps in creating actual copies of arrays and objects.

- Array Functions:
  - Map
  
    ```javascript
    const numbers = [1, 2, 3]; 
    const doubleArray = numbers.map((num) => {
      return num * 2;
    });
    ```

## React Basics & Working with Components

### React Core Syntax & JSX
  
- What is React.js?
  - Client-side JavaScript library for building modern UI
  - React is all about components
  - Components are resuable building blocks
  - Reacts helps in Reusability and Separation of Concerns
  - Declarative approach: Define the desired target states and let React figure out actual JS DOM instructions. No need to design for each DOM element.
- Installation:
  - VS Code
  - Node.js
  - create-react-app
  
  ```console
  npx create-react-app my-app
  cd my-app
  npm start
  ```

### Working with components and data

- JSX (JavaScript XML)
- HTML in a function
- Declarative approach, unlike imperative approach, no need to create each element. React.js builds HTML components for you with returned JSX syntax.
- You build a component tree in React
- Components are created in separate files
- Component is just a JavaScript function that returns JSX code
- All components should have capital letter starting. React considers those are custom HTML elements.
- There can only be one root element per one function
- Dynamic data in react components using JavaScript
- Props are attributes of custom components created by us
- Props are used to pass attributes across React components
- Date functions month, year, day
- Splitting React components (nested components - App --> ExpenseItem --> ExpenseDate)
- Assignment - Move expense item to expenses.js
- Composition (combining componeents)
- props.children | card.js (building wrapper components)
