function user() {
  var arrayUsers = [];
  for (let i = 0; i < users.length; i++) {
    arrayUsers.push(users[i].user);
  }
  return arrayUsers;
}
user();

function password() {
  var arrayPassword = [];
  for (let i = 0; i < users.length; i++) {
    arrayPassword.push(users[i].password);
  }
  return arrayPassword;
}
password();

function authentication(arrayUser, arrayPassword) {
  var user = 'claudinacr';
  var password = '12345';
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
    console.log('usuario registrado. Puede Ingresar');
  }
}
authentication(user(), password());