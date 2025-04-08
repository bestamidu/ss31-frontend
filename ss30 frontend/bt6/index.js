const form = document.getElementById("loginForm");
 form.addEventListener("submit", function(event){
     event.preventDefault();
     const correctUsername = "huanrose@gmail.com";
     const correctPassword = "123456";
     const usernameInput = document.getElementById("username").value;
     const userpasswordInput = document.getElementById("password").value ;
     if(usernameInput === correctUsername && userpasswordInput === correctPassword){
         console.log("Đăng nhập thành công");
     }else{
         console.log("Đăng nhập thất bại");
         
         
     }
 
 });
 