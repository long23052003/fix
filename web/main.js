// validation form login
const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login__signInButton");

// validation form login

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
  
    if (inputUsername.value === "" || inputPassword.value === "") {
      alert("Vui lòng không để trống");
    } else {
      // Lấy thông tin người dùng từ local storage
      const storedUser = JSON.parse(localStorage.getItem(inputUsername.value));
  
      // Kiểm tra xem người dùng có tồn tại không
      if (storedUser) {
        // Kiểm tra xem tên người dùng và mật khẩu nhập vào có khớp với thông tin đã lưu hay không
        if (
          (storedUser.username === inputUsername.value &&
            storedUser.password === inputPassword.value)
        ) {
          localStorage.setItem("activeUser", JSON.stringify(storedUser));
          if (storedUser.username === "admin") {
            alert("Chào mừng admin!");
            window.location.href = "../duyetcauhoi/duyet.html";
          } else {
            alert("Chào mừng bạn đến với website");
            window.location.href = "../guicauhoi/gui.html";
          }
        } else {
          alert("Đăng Nhập Thất Bại");
        }
      } else {
        alert("Tài khoản không tồn tại");
      }
    }
  });
  