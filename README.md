
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById is its select only for which is select only id from html.

getElementsByClassName is its select only the classes which is select only the class from html .

querySelector is  suppose we have two div with class name is function  but when we used it querySelector then it call the first  div .

querySelectorAll is  suppose we have two div with class name is function  but when we used it querySelectorAll then it call the first  div .

2. How do you create and insert a new element into the DOM?

const newElement = document.createElement('h1');

newElement.innerText = "hello This is me";

3. What is Event Bubbling? And how does it work?

Event Bubbling happens when an element receives an event, and that event bubbles up to its parent and ancestor elements in the DOM tree until it gets to the root element.
4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation Instead of adding listeners to every child, put one listener on the parent. It handles all child events, even new ones.
5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault()  stop the browser normal action

stopPropagation() stop the reaching to the parent