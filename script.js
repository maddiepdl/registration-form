document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form from refreshing

  // collect values
  const name = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const birthdateRaw = document.getElementById("birthdate").value;

  // format birthdate
  const birthdate = new Date(birthdateRaw).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // collect checked interests
  const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked'))
    .map(cb => cb.value)
    .join(", ");

  // display result
  document.getElementById("output").innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Password:</strong> ${"*".repeat(password.length)}</p>
    <p><strong>Birthdate:</strong> ${birthdate}</p>
    <p><strong>Interests:</strong> ${interests || "None selected"}</p>
  `;

  // clear form
  document.getElementById("registerForm").reset();
});
