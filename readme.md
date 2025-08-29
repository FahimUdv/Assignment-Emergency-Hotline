Assignment: 🚦 Emergency Contact 🚦

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans:

🚀 getElementById()

The getElementById() method is used when we want to select a single element by its unique ID in the DOM. IDs should be unique on a page. It always returns only one element. It is the fastest DOM selection method and is ideal when we know the exact ID of the element we need.

🚀 getElementsByClassName()

The getElementsByClassName() method returns a live collection of all elements that have a certain class name. This method is useful when multiple elements share the same class. However, it does not return an array, so we need to use index-based access ([0], [1], ...) or convert it into an array to use modern iteration methods like forEach. 

🚀 querySelector()

The querySelector() method allows to select the first element that matches a given CSS selector. This makes it more flexible than the ID or class-specific methods because it supports the full range of CSS selectors. If multiple elements match the selector, only the first match is returned.

🚀 querySelectorAll()

The querySelectorAll() method returns a static NodeList of all elements that match a given CSS selector. However, this method is very powerful because it supports all CSS selectors and also provides a NodeList, which can be looped through directly using forEach. It’s the preferred way in modern JavaScript to grab multiple elements when you need to apply actions on a group of elements.


2. How do you **create and insert a new element into the DOM**?

Ans: 

💡 Step: 01
First I need to create a div container in my HTML:
<div id="container"></div>

💡 Step: 02
Get the parent element (div container)
let container = document.getElementById("container");

💡 Step: 03
Now I have to create a "div" element
let newDiv = document.createElement("div"); 

💡 Step: 04
Then I will add content in this newDiv element using innerHTML
newDiv.innerHTML = `
            <div class="flex justify-between">
                <div>
                    <h1>This is a heading</h1>
                    <p>This is a paragraph</p>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </div>
            `;

💡 Step: 05
Finally, I will append to the parent element
container.appendChild(newDiv);


3. What is **Event Bubbling** and how does it work?

Ans:

🎈 **Event Bubbling** is a concept in JS where an event starts from the target element and bubbles up to its parent element and then the parent's parent element and so on, untill it gets the root.

Example: 

<div id="parent" style="padding:20px; background:#ddd;">
  Parent
  <button id="child">Click Me</button>
</div>

If I click on the "Click Me" button, it will be assumed as child element. So, the child button is clicked. Then the event bubbles up and the parent "div" is clicked. Then finally the parent of the "parent div" which is <body></body> is clicked.


4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans: **Event Delegation** uses one parent event listener to handle events for multiple children. In this case, 🎈 **Event Bubbling** is used.

It is useful. Because-
🚩 Performance: Reduces memory usage
🚩 Dynamic Elements: If elements are added later, it will work.
🚩 Clean Code: Easier to manage. 



5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans: 