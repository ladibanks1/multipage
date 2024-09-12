const formData = document.getElementById("user-details");
const userDetails = () => {
  const entries = new FormData(formData);
  const details = Object.fromEntries(entries);
  console.log(details);
  return details;
};

const api = "http://localhost:3044/createAccount";

const createAccountForUser = async (details) => {
  console.log(JSON.stringify(details));
  try {
    const createAccount = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });
    if (createAccount.ok) {
      Swal.fire("Account Created Successfully");
    } else {
      throw new Error(await createAccount.text());
    }
  } catch (err) {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
    });
  }
};

formData.addEventListener("submit", (e) => {
  e.preventDefault();
  const details = userDetails();
  createAccountForUser(details);
});
