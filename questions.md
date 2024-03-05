# Questions

## What is the difference between Component and PureComponent?. Give an example where it might break my app

A PureComponent is a component whose inputs and outputs are all contained in itself without any dependency on another component while a Component would have some dependency on another component. Your app could break when the dependency of a Component isn't fulfilled amd the component requires that value to render

## Context + ShouldComponentUpdate might be dangerous. Why is that?

An infinite loop would occur. This is because updating the app level state using Context would re-render that component that's using that state and if it's then dependent on the component updating, it would cause an infinite loop of updating, checking for update and updating again (in a loop)

## Describe 3 ways to pass information from a component to its PARENT

- By passing the parent component's setState to the child: This enables the child to update the state of the Parent. For example, a parent component with a count variable can be updated when its setCount setState function is passed to its child.
- By using app level state management to enable a child component update a state variable being used by its parent component

## Give 2 ways to prevent components from re-rendering

- Ensuring that the useEffect hook has an appropriate dependency array. That is when the useEffect is called, only the required values needed to re-render the component are used in the dependency array and if its not to be re-rendered, then an empty array should be passed
- Avoid using a state variable in the useEffect dependency array when its setState is called. For example, if a component is to rerender when its count state is updated, then don't call the count setState in the useEffect that has count as its dependency

## What is a fragment and why do we need it? Give an example where it might break my app

A fragment is an empty component in React that is used as a wrapper for react elements. In a situation where you want to wrap multiple elements of a component together without using a container element like a div, you can use React Fragments which can be represented as <></> or <React.Fragment></React.Fragment>. If you don't wrap multiple lines of elements in a container element like a div or in a Fragment, your app would break. Then if you are looping through an array and you use a <></> which doesn't allow the key prop to be passed, you would have issues regarding the element key prop. In that case use <React.Fragment></React.Fragment>. It allows you add the key prop

## Give 3 examples of the HOC pattern

- When you want a single component to handle multiple operations that are shared between different components. For example, a universal Button component in your app that can then be customized into different shapes and sizes
- A custom hook that serves several components and supplies their states, api calls and update functions. For example, a custom hook to get a weather forecast that is then used in the weather component and traffic component
- App level state management: It enables one single source of truth for all universal states the app relies on. It allows for resource (state) sharing among components and groups together the different aspects of the application

## What's the difference in handling exceptions in promises, callbacks and async…await?

- Promises make you of .then and .catch handlers to handle exceptions for when the request is successful and when it fails respectively
- Callbacks are used in event of completion of a request. They run irrespective of success or failure of that request
- Async...Await handle asynchronous operations using the try_catch_finally block to monitor for success and failure of events. Asynchronous operations are done with the await keyword and the entire function call is wrapped in the async keyword

## How many arguments does setState take and why is it async

setState takes in one argument which is either a value or a function that returns a value. It is asynchronous because it's a non-blocking operation that the component does not depend on to render on mount. Once the value is updated, the component then re-renders

## List the steps needed to migrate a Class to Function Component

- Change the component name from a class to a function
- Change lifecycle methods to useEffect calls
- Change state declarations to useState declarations
- On setState, remove the 'this' keyword and assign set accordingly
- Remove the render function and leave the return value within

## List a few ways styles can be used with components

- By doing inline styling using the 'style' prop in components
- By using css modules and importing them into the component. Then assigning a className within the component with the imported css module. For example, create a styles.module.css file, import it to your component with import styles from './styles.module.css' and then assign a className to an element in your component like

```jsx
<div className={styles.myClass} />
```

- By using a general style file located at the root of your project. Example is App.css. Import the App.css file to your App.js file and then assign classes there. This would then apply to any component's element that uses that className within the app.
- By using 3rd party integrations like Tailwind, Bootstrap and styled components to apply styling.

## How to render an HTML string coming from the server

- First store the string in a component's state
- Then render the string by using `dangerouslySetInnerHTML` to pass that HTML within a component's element. For example:

```jsx
 <div dangerouslySetInnerHTML={html: htmlString}/>
```
