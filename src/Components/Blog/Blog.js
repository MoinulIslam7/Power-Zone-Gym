import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-body'>
            <div className='blog-container'>
                <h2>How does react work?</h2>
                <p>React is a very simple and straightforward JavaScript library. Working with it is very easy for anyone who has basic JavaScript knowledge. And one of the biggest benefits of using React library is that it enables the app developers to import HTML code with JavaScript code while creating a React application. With React, the web developers can create a representation of a DOM node and this can be done by declaring the Element function in React. To know how it is carried out, have a look at the below code that shows the combination of HTML and JavaScript. This means that instead of using the traditional DOM class, the React developers can now use className. In addition to this, JSX tags in React have a name, attribute, and children. Therefore, all the expressions and numeric values must be written in curly brackets. The JSX attributes’ quotation marks represent strings just like JavaScript. Besides, using JSX instead of JavaScript also helps in simplifying the components and also keeps the web app’s code clean. Any React app comes with a single root DOM node and this means that when it comes to rendering an Element into the DOM, there will be a change observed in the user interface of the page.</p>
                <br />
                <h2>Props vs State?</h2>
                <p></p>
                <h3>props:</h3>
                <p>The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.</p>
                <h3>state:</h3>
                <p>Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.</p>
                
                <h2>What is useEffect work?</h2>
                <p>The useEffect hook is the Swiss Army knife of all the hooks. It’s the solution to many problems: how to fetch data when a component mounts, how to run code when state changes or when a prop changes, how to set up timers or intervals, you name it. Pretty much anything you want to “do” in a React component other than return JSX (any sort of side effect), will go into a useEffect. (and you can have more than one useEffect per component, too) All this power comes with a tradeoff: useEffect can be confusing until you understand how it works. In this post, we’re going to look at lots of useEffect examples so that you understand the mental model and can use it effectively in your own code.</p>
            </div>
        </div>
    );
};

export default Blog;