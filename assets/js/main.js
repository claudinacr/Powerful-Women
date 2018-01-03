//AUTENTICACION DE USUARIO
var buttonSend = document.getElementById('buttonSend');

function getUser() {
  var arrayUsers = [];
  for (let i = 0; i < users.length; i++) {
    arrayUsers.push(users[i].user);
  }
  return arrayUsers;
}

function getPassword() {
  var arrayPassword = [];
  for (let i = 0; i < users.length; i++) {
    arrayPassword.push(users[i].password);
  }
  return arrayPassword;
}


function takeInput() {
  var user = document.getElementById("inputUser").value;
  return user;
}

function takePassword() {
  var password = document.getElementById("inputPassword").value;
  return password;
}

buttonSend.onclick = function () {
  var user = takeInput();
  var pasword = takePassword();
  authentication(getUser(), getPassword(), user, pasword);
};

function authentication(arrayUser, arrayPassword, user, password) {
  var validarUser, validarPassword;
  for (let i = 0; i < arrayUser.length; i++) {
    if (user === arrayUser[i]) {
      validarUser = true;
      console.log(validarUser);
    }
  }
  for (let j = 0; j < arrayPassword.length; j++) {
    if (password === arrayPassword[j]) {
      validarPassword = true;
      console.log(validarPassword);
    }
  }
  if (validarUser === true && validarPassword === true) {
    window.open('redSocial.html', '_self');
    var colUser = document.querySelector('.col-user');
    colUser.appendChild(document.createTextNode(user));
  } else {
    alert('Usuario y contraseña no validos');
  }
}