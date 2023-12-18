
const isAdmin = true; 
const isUser = true; 

if (isAdmin) {
  const admin = {
    username: "admin",
    password: "admin123",
    role: "admin",
  };
  localStorage.setItem("admin", JSON.stringify(admin));
}

const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const btnRegister = document.querySelector(".signup__signInButton");

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  
  const username = inputUsernameRegister.value;
  const password = inputPasswordRegister.value;

  if (username.trim() === "" || password.trim() === "") {
    alert("Vui lòng nhập đầy đủ thông tin");
  } else {
    if (localStorage.getItem(username)) {
      alert("Tài khoản đã tồn tại, vui lòng nhập tài khoản khác");
    } else {
      const user = {
        username: username,
        password: password,
        role: "user", 
      };
      localStorage.setItem(username, JSON.stringify(user));
      alert("Đăng ký thành công");

      window.location.href = "../web/web.html";
    }
  }
});
