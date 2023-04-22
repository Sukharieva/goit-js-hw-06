const form = document.querySelector(".login-form")

form.addEventListener("submit", onFormSubmit)

function onFormSubmit(event) {
  event.preventDefault()


  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("Всі поля повинні бути заповнені!")
  } else {
    const formData = { email, password }
    console.log(formData)
    event.currentTarget.reset()
  }
}


