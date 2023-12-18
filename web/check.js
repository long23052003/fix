const isLoggedIn = localStorage.getItem("activeUser") !== null;
            if (!isLoggedIn) {
              window.location.href = "../web/web.html";
}