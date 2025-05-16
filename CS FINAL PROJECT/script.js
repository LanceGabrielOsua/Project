document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signupForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;
    const errors = document.querySelectorAll(".error");
    errors.forEach(err => err.textContent = "");

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const contact = document.getElementById("contact");
    const reason = document.getElementById("reason");
    const sex = document.querySelector("input[name='sex']:checked");

    if (!firstName.value.trim()) {
      firstName.nextElementSibling.textContent = "Required";
      valid = false;
    }
    if (!lastName.value.trim()) {
      lastName.nextElementSibling.textContent = "Required";
      valid = false;
    }
    if (!sex) {
      document.querySelector(".radio-group").nextElementSibling.textContent = "Required";
      valid = false;
    }
    if (!email.value.trim()) {
      email.nextElementSibling.textContent = "Required";
      valid = false;
    }
    if (!password.value.trim()) {
      password.nextElementSibling.textContent = "Required";
      valid = false;
    }
    if (!reason.value.trim()) {
      reason.nextElementSibling.textContent = "Required";
      valid = false;
    }

    if (valid) {
      localStorage.setItem("firstName", firstName.value);
      localStorage.setItem("lastName", lastName.value);
      localStorage.setItem("sex", sex.value);
      localStorage.setItem("email", email.value);
      localStorage.setItem("reason", reason.value);
       alert("Signup successful! Redirecting to your profile page.");
      window.location.href = "proj_profile_osua.html";
    }
  });
});
