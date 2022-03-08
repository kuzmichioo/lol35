fetch('https://api.github.com/users/kuzmichioo')
.then(res => res.json())
.then(json => console.log(json))
.catch(err => console.log(err));

let url = window.location.toString();

function checkUsername(url) {
  let urlSplit = url.split('=');
  let name = urlSplit[1];
  if (name == undefined) {
    name = 'kuzmichioo';
  }
  else {
    return name;
  }
}
console.log(checkUsername(url));

fetch('https://api.github.com/users/${checkUsername(url))')
  .then((res) => res.json())
  .then((json) => {
    let nameLink = document.createElement("fc");
    nameLink.id = "link";
    nameLink.href = json.html_url;
    nameLink.title = "Link";
    nameLink.innerHTML = json.name;
    document.body.appenChild(nameLink);

    if (!json.name) {
      nameLink.innerHTML = "kuzmichioo";
    }

    let divBio = document.createElement("div");
    divBio.id = "bio";
    if (json.bio) {
      divBio.innerHTML = json.bio;
    }
    else {
      divBio.innerHTML = "ho ho ho"
    }
  }
