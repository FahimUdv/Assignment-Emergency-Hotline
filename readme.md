# **Assignment: 🚦 Emergency Contact 🚦**

Here we can go through some important topics in Javascript. We have some questions and answers bellow.😁

### 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

### Answer:

### 🚀 **getElementById()**

The **getElementById()** method is used when we want to select a single element by its unique ID in the DOM. IDs should be unique on a page. It always returns only one element. It is the fastest DOM selection method and is ideal when we know the exact ID of the element we need.

### 🚀 **getElementsByClassName()**

The **getElementsByClassName()** method returns a live collection of all elements that have a certain class name. This method is useful when multiple elements share the same class. However, it does not return an array, so we need to use index-based access ([0], [1], ...) or convert it into an array to use modern iteration methods like forEach. 

### 🚀 **querySelector()**

The **querySelector()** method allows to select the first element that matches a given CSS selector. This makes it more flexible than the ID or class-specific methods because it supports the full range of CSS selectors. If multiple elements match the selector, only the first match is returned.

### 🚀 **querySelectorAll()**

The **querySelectorAll()** method returns a static NodeList of all elements that match a given CSS selector. However, this method is very powerful because it supports all CSS selectors and also provides a NodeList, which can be looped through directly using forEach. It’s the preferred way in modern JavaScript to grab multiple elements when you need to apply actions on a group of elements.

<br>
<br>

### 2. How do you **create and insert** a new element into the DOM?

### Answer:

💡 **Step: 01**
First I need to create a div container in my HTML:<br>
`<div id="container"></div>`

💡 **Step: 02**
Get the parent element (div container).<br>
`let container = document.getElementById("container");`

💡 **Step: 03**
Now I have to create a "div" element.<br>
`let newDiv = document.createElement("div");`

💡 **Step: 04**
Then I will add content in this newDiv element using innerHTML<br>
`newDiv.innerHTML =
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

💡 **Step: 05**
Finally, I will append to the parent element<br>
`container.appendChild(newDiv);`

<br>
<br>

### 3. What is **Event Bubbling** and how does it work?

### Answer:

🎈 **Event Bubbling** is a concept in JS where an event starts from the target element and bubbles up to its parent element and then the parent's parent element and so on, untill it gets the root.

Example: 

`<div id="parent">`
  Parent
  `<button id="child">Click Me</button>`
`</div>`

If I click on the "Click Me" button, it will be assumed as child element. So, the child button is clicked. Then the event bubbles up and the parent "div" is clicked. Then finally the parent of the "parent div" which is <body></body> is clicked.

<br>
<br>

### 4. What is **Event Delegation** in JavaScript? Why is it useful?

### Answer:  

**Event Delegation** uses one parent event listener to handle events for multiple children. <br>
In this case, 🎈 **Event Bubbling** is used.

It is useful. Because-<br>
🚩 **Performance:** Reduces memory usage  <br>
🚩 **Dynamic Elements:** If elements are added later, it will work.  <br>
🚩 **Clean Code:** Easier to manage. 

<br>
<br>


### 5. What is the difference between **preventDefault()** and **stopPropagation()** methods?

### Answer:   
  
🎢 **preventDefault()** - method prevents the default browser behavior for an event. It doesn't stop bubbling. The event will still propagate up the DOM.  
<br>
➡️ **stopPropagation()** - method doesn't affect default browser behavior. It stops the event bubbling. So, the event will not go up to the parent elements.  