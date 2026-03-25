function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Please fill all fields");
    return;
  }

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(error => alert(error.message));
}

function logout() {
  auth.signOut().then(() => {
    window.location.href = "login.html";
  });
}
