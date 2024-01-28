1. What is the difference between Component and PureComponent? Give an example where it might break my app.

-> Pure functions are functions whose output will always be same with same set of input parameters. Pure components leverages this concept. 
-> Basically, Pure function skips the re-render for the same set of props and state through shallow comparison. While, normal component won't.
-> In Class component, they can used by extending PureComponent.
-> In Function component, they can be used by using React.memo().
-> This could break, if state and props are mutated directly.

2. Context + ShouldComponentUpdate might be dangerous. Why is that?

-> ShouldComponentUpdate is a lifecycle method which allows to determine wether component needs to be updated or not. This optimizes the performance by avoiding useless re-renders.
-> When a particular component, which is using context, and the value of context gets updates, will not re-render because ShouldComponentUpdate matches the props/state which have not apparently changed and thus will return false.

3. Describe 3 ways to pass information from a component to its PARENT.

-> By using eventHandler, event can be passed from parent to child, which then can be invoked from child to parent.
-> By using state managemnet tools like Redux, centralized state can be created, through which child can update the state which can be accessed by parent.
-> By using contextAPI, context created in parent, can be both modified and accessed by child/parent.

4. Give 2 ways to prevent components from re-rendering.

-> UseMemo() can be utilised to prevent re-rendering by memoizing the result. This can be used where extensive calculations are done.
-> UseCallback() can be utilised to stop from child re-rendering by memoising calback functions.

5. What is a fragment and why do we need it? Give an example where it might break my app.

-> Fragment is denoted by <></> or <React.Fragment></React.Fragment>
-> This is used when the component does not have a parent element. So rather than creating an extra div, this is used.
-> Parent element is required because the code gets converted into React.createComponent which will break if sibling elements are there.
-> Fragment might impact the app through CSS, if CSS is not properly written.

6. Give 3 examples of the HOC pattern.

HOC helps in creating reusable component logic. Here are 3 examples:
-> Components which require authentication to access can be wrapped in Authentication HOC.
-> HOC can be used to log events or actions.
-> To add some stylings or CSS classes for consisting styles across components HOC can be used.

7. What's the difference in handling exceptions in promises, callbacks and async...await?

-> Promises: promises might return a value at some point, wether it's the result or failed value. It has three states : pending, fullfilled and rejected.
-> callbacks: callbacks are methods that are passed as arguments to other method which gets invoked at some point.
-> Async/await: Wrapping a method in async makes the method available to handle async operations. Await is then be used inside that method at which point the code will wait for the result.

8. How many arguments does setState take and why is it async.

-> It can take two arguments. One is the updated state and other the callback which will be called after state is updated.
-> It is async because state does not gets updated immediately. This is for better performance and UI xperience.

9. List the steps needed to migrate a Class to Function Component.
-> Instead of using class declaration, change it into a function declaration.
-> Replace render with return.
-> Lifecycle methods should be remove instead hooks should be added specially useEffect, useState etc.
-> For pure components, useMemo should be added.

10. List a few ways styles can be used with components.
-> Inline styling can be used <div className={{color: '#fff'}}></div>
-> className = 'question' , this will craete question class on that element which can be used in CSS file/ or in same file for styling.
-> ternary operators can be used to set style/class name on the basis of some condition. <div className={isError ? 'error' : ''}></div>
-> let obj = {{color: '#fff'}}, this can be used in element <div className={obj}></div>

11. How to render an HTML string coming from the server.
-> Though it is not recommended but dangerouslySetInnerHTML can be used to set.
-> There are other libraries which parses the HTML string that can be used.



