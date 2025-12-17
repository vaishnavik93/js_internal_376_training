document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value;
    const terms = document.getElementById("terms").checked;
    const gender = document.querySelector('input[name="gender"]:checked');
    const error = document.getElementById("error");

    error.textContent = "";

    if (name === "") {
        error.textContent = "Name cannot be empty";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        error.textContent = "Invalid email format";
        return;
    }

    if (!gender) {
        error.textContent = "Please select gender";
        return;
    }

    if (course === "") {
        error.textContent = "Please select a course";
        return;
    }

    if (!terms) {
        error.textContent = "Accept terms and conditions";
        return;
    }

    document.getElementById("outName").textContent = name;
    document.getElementById("outEmail").textContent = email;
    document.getElementById("outGender").textContent = gender.value;
    document.getElementById("outCourse").textContent = course;

    document.getElementById("output").style.display = "block";

    document.getElementById("registrationForm").reset();
});
