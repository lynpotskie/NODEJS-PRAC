const login = {
    username: 'Batman',
    password: 'Alfred ROCKS!'
  };
  
  console.log(login.username);
  console.log(login.password);
  console.log(capitalize(user.username));

  function capitalize(string) {
    let newstring = string.charAt(0).toUpperCase() + string.slice(1);
    return newstring;
}
 
  