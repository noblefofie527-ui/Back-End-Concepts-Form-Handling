// 1. Selecting the Elements
const contactForm = document.getElementById('contactForm');

// 2. Adding the Event Listener
contactForm.addEventListener('submit', function (event) {
    // Stop the page from refreshing
    event.preventDefault();

    // 3. Capturing the data using my specific IDs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // 4. Validation Logic
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill out all fields before sending.");
        return;
    }

    // 5. Logging the data to the console
    const formData = {
        fullName: name,
        userEmail: email,
        userMessage: message,
        timestamp: new Date().toLocaleTimeString()
    };

    console.log("Form Submitted Successfully!");
    console.table(formData);

    // 6. Giving the user feedback
    alert("Thank you, " + name + "! Your message has been captured in the console.");

    
    contactForm.reset();
});