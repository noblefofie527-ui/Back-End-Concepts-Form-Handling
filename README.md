# Back-End Concepts & Form Handling
This project ensures how front-end components interact with back-end systems through basic form handling and client-side scripting.   

## Project Structure
* `form.html` - The form markup and semantic structure.
* `form.css` - Custom styling rules for user interface presentation.
* `form.js` - Client-side validation logic, error handling, and object formatting.

## Validation Objective
The JavaScript controller blocks default browser submission events via `event.preventDefault()`. It strips whitespace using `.trim()` and runs a validation check. 
* If any fields are null/empty, it intercepts submission and displays: `"Please fill out all the fields before sending."`
* If passed, the data structures into an object layout and outputs to the environment runtime developer tool panel via `console.table()`.
