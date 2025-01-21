![React Logo](src/logo.svg)
# React App: Space Facts


## Introduction:
This project was created to improve my understanding of key React concepts by creating a simple react app. The app displays a list of space fact cards, with a list of planets.

***

## Key Concepts Learned:
### What is JSX?

- Syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.
- JSX makes it easy to define UI components.
- Example:

```
const Greeting = () => <h1>Hello, Space!</h1>;
```

### What is React State?

- Special object used to manage data that changes over time in a React component.
- State updates trigger re-renders, making it a key feature for interactive UIs.

### Props in React

- Short for properties
- Used to pass data from a parent component to a child component.
- Example:

```
const Planet = ({ name }) => <p>{name}</p>;
```

### How to Display List Items in React

- You can use the map method to render lists dynamically.
- Example:

```
const planets = ['Earth', 'Mars', 'Venus'];
return planets.map(planet => <li key={planet}>{planet}</li>);
```

### React Event Handlers

- React uses camelCase for event handler names, such as onClick.
- Example:

```
<button onClick={() => alert('Button clicked!')}>Click Me</button>
```

### React Hooks

- Hooks let you use state and other React features in functional components.
- The most common hooks are:

    - `useState`: For managing state.
    - `useEffect`: For side effects like fetching data or setting up subscriptions.

***

## Project Overview:
- [ ] A list of space fact cards, where each card has a title, image, and content.

- [ ] A list of planets displayed below the cards.

- [ ] Functionality to add new space fact cards dynamically.

- [ ] CRUD operations for managing space fact cards.

- [ ] Save facts to a JSON file using a simple mock API.

- [ ] Navigation between facts, the fact form, and the planet list.

- [ ] The planet list includes cards with a title, image, and a defining feature for each planet.