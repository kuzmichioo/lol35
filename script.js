fetch('https://api.github.com/users/kuzmichioo')
.then(res => res.json())
.then(json => console.log(json.bio))
.catch(err => console.log(err));
