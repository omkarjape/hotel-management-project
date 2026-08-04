const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("contactName").value;
        let email = document.getElementById("contactEmail").value;
        let message = document.getElementById("contactMessage").value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill all fields.");
        } else {
            alert("Message Sent Successfully!");
            contactForm.reset();
        }
    });
}

const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {
    appointmentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("appName").value;
        let email = document.getElementById("appEmail").value;
        let phone = document.getElementById("appPhone").value;
        let department = document.getElementById("department").value;
        let date = document.getElementById("appDate").value;
        let time = document.getElementById("appTime").value;

        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            department === "" ||
            date === "" ||
            time === ""
        ) {
            alert("Please fill all fields.");
        } else {
            alert("Appointment Booked Successfully!");
            appointmentForm.reset();
        }
    });
}
