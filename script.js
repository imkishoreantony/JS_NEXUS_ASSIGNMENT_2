const form = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();
  const course = document.getElementById("course").value;

  // Error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const ageError = document.getElementById("ageError");
  const courseError = document.getElementById("courseError");

  // Clear previous errors
  nameError.textContent = "";
  emailError.textContent = "";
  ageError.textContent = "";
  courseError.textContent = "";

  let isValid = true;

  // Name validation
  if (name === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = "Enter a valid email";
    isValid = false;
  }

  // Age validation
  if (age === "" || age < 18 || age > 60) {
    ageError.textContent = "Age must be between 18 and 60";
    isValid = false;
  }

  // Course validation
  if (course === "") {
    courseError.textContent = "Please select a course";
    isValid = false;
  }

  // If form is valid
  if (isValid) {
    const li = document.createElement("li");
    li.textContent = `${name} | ${email} | ${age} | ${course}`;
    studentList.appendChild(li);

    form.reset(); // clear form
  }
});
