let password = "134_"
if (password.length >= 4 && (password.includes("_") || password.includes("-")))
  {
    console.log("Пароль надежный")
  }
else
  {
    console.log("Пароль ненадежный")
  }