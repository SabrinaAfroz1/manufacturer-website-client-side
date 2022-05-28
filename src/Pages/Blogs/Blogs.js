import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto border-2 p-8 '>
            <div className="border-4 p-8">
                <h2> How will you improve the performance of a React Application?</h2>
                <p>
                    Keeping component state local where necessary <br />
                    Memoizing React components to prevent unnecessary re-renders <br />
                    Code-splitting in React using dynamic import () <br />
                    Windowing or list virtualization in React <br />
                    Lazy loading images in React <br />

                </p>

                <hr />
            </div >
            <div className="border-4 p-8 mb-8">
                <h2>What are the different ways to manage a state in a React application?</h2>
                <p>
                    Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.

                    useState is the first tool you should reach for to manage state in your components.

                    It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback).

                    useReducer is another option that can be used for either local or global state. It is similar in many ways to useState under the hood, although instead of just an initial state it accepts a reducer.

                    The benefit of useReducer is that it provides a built-in way to perform a number of different state operations with the help of the reducer function, which makes it more dynamic overall than useState.
                </p>
                <hr />
            </div>
            <div className="border-4 p-8 mb-5">
                <h2>How does prototypical inheritance work?</h2>
                <p>
                    Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.

                </p>
            </div>
            <div className="border-4 p-8 mb-5">
                <h2>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p>

                    "array.map( products  product.name) "
                </p>
            </div>
            <div className="border-4 p-8 mb-5">
                <h2>What is a unit test? Why should write unit tests?</h2>
                <p>
                    Unit testing allows the programmer to refactor code at a later date, and make sure the module still works correctly (i.e. Regression testing). The procedure is to write test cases for all functions and methods so that whenever a change causes a fault, it can be quickly identified and fixed. <br />

                    One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process
                </p>
            </div>


        </div>
    );
};

export default Blogs;