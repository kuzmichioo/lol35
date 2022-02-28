fetch('https://api.github.com/users/kuzmichioo')
.then(res => res.json())
.then(json => console.log(json))
.catch(err => console.log(err));

let url = window.location.toString();

function checkUsername(url) {
  let urlSplit = url.split('=');
  let name - urlSplit[1];
  if (name == undefined) {
    name = 'kuzmichioo';
  }
  else {
    return name;
  }
}
console.log(checkUsername(url));

fetch('https://api.github.com/users/${checkUsername(url)}')
  .then(res => res.json())
  .then(json => console.log(json))
