const users = [];

function addUserToTable(user) {
  const tbody = document.querySelector("#dataTable tbody");
  const tr = document.createElement("tr");

  ["IDnum", "firstname", "middlename", "lastname", "gender", "birthday"].forEach(field => {
    const td = document.createElement("td");
    td.textContent = user[field];
    tr.appendChild(td);
  });

  tr.addEventListener("mouseenter", () => tr.style.backgroundColor = "#d1e7ff");
  tr.addEventListener("mouseleave", () => tr.style.backgroundColor = "");

  tbody.appendChild(tr);
}

function saveUserData(event) {
  event.preventDefault(); // Prevent form from reloading

  const IDnum = document.getElementById("IDnum").value.trim();
  const firstname = document.getElementById("firstname").value.trim();
  const middlename = document.getElementById("middlename").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const gender = document.getElementById("gender").value;
  const birthday = document.getElementById("birthday").value;

  if (!IDnum || !firstname || !lastname || !gender || !birthday) {
    alert("Please fill in all required fields.");
    return;
  }

  const newUser = { IDnum, firstname, middlename, lastname, gender, birthday };
  users.push(newUser);
  addUserToTable(newUser);
  alert("Data recorded successfully!");
  document.getElementById("signupForm").reset();
}

// Attach event listener to form submission
document.getElementById("signupForm").addEventListener("submit", saveUserData);
