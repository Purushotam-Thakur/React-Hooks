This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# React Hooks 
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
Ex. State of component.
Hooks don't work inside classes.

### Why Hooks
#### Reason Set 1
- Understanding how this keyword works in javascript
-  Remember to bind event handles in class components
- Classes don't minify very well and make hot reloading very unreliable
#### Reason Set 2
- There is no particular way to use stateful component logic
- HOC and render props patterns do address this problem
- Make the cod harder to follow
- There is need to share better logic in a better way
#### Reason Set 3
- Create components for complex scenarios such as data fetching and subscribing to events.
- Related code is not organized in one place
- Ex- Data fetching - in ComponentDidMount and ComponentDidUpdate
- Ex- Event listeners - in ComponentDidMount and ComponentWillUpdate
- Because of stateful logic - cannot break components in smaller one

#### Noteworthy Point
- React version 16.8 or higher
- Completely opt
- Hooks don't contain any breaking changes, and the release is 100% backwards-compatibility
- Classes won't be removed from react
- Can't use Hooks inside of a class component
- Hooks don't replace your existing knowledge of React Components
- Instead, Hooks provide more direct API to the React concept you already know
    
### Rules for Hooks
- **Only Call Hooks at Top Level**
    - Don't call Hooks inside loops, conditions and nested functions
- **Only Call Hooks from React Functions**
    - Call them from within React functional components and not just any regular javascript function.
    
### useContext 
- Context provides a way to pass data through the component tree without having to pass props down manually at every level

### useReducer
- useReducer is a hook that is used for state management
- It is an alternative of useState 
- What's the difference??
    - useState is built using useReducer
    
reduce in JavaScript | useReducer in React
---------------------|--------------------
array.reduce(reducer, initialValue) | useReducer(reducer, initialValue)
singleValue = reducer(accumulator, itemValue) | newState=reducer(currentValue,action)
reduce method return single value | useReducer return a pair of values. [newState, dispatch]
    
    
### Hooks so far
- useState - state
- useEffect - side effect
- useContext - context API
- useReducer - reducers
