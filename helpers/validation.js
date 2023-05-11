module.exports = (objSubmited) => {
  const errorField = {
    email: "Email",
    password: "Password",
    name: "Name",
    gender: "Gender",
    bio: "Bio"
  }
  let status = false
  let err = {}
  for (const field in objSubmited) {
    if (!objSubmited[field]) {
      err[`${field}Err`] = `${errorField[field]} Field cannot be empty`
      status = true
    } else {
      if (field == "password") continue
      err[`${field}Curr`] = objSubmited[field]
    }
  }
  const errQuery = new URLSearchParams(err).toString()
  return { status, err: errQuery }
}