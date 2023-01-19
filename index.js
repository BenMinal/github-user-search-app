async function getUserDetails() {
  const username = document.getElementById("usernameGet").value;

  if(!username) {
  alert("Please enter a username.");
  return;
  }

  const endpoint = new URL(`https://api.github.com/users/${username}`);

  const response = await fetch(endpoint);

  // console.log(response);
  const data = await response.json();

  let userAvatar = document.getElementById("userAvatar");
  userAvatar.src = data.avatar_url;
  
  let returnedUsername = document.getElementById("returnedUsername");
  returnedUsername.innerHTML = `${data.name}`;

  let userHandle = document.getElementById("userHandle");
  userHandle.innerHTML = `@${data.login}`;

  let bio = document.getElementById("bio");
  bio.innerHTML = `${data.bio}`;

  let repos = document.getElementById("reposReturned");
  repos.innerHTML = `${data.public_repos}`;

  let followers = document.getElementById("followersReturned");
  followers.innerHTML = `${data.followers}`;

  let following = document.getElementById("followingReturned");
  following.innerHTML = `${data.following}`;

  let locationReturned = document.getElementById("locationReturned");
  locationReturned.innerHTML = `${data.location}`;

  let twitterReturned = document.getElementById("twitterReturned");
  if(!data.twitter_username) {
    twitterReturned.innerHTML = "Not Available`";
  } else {
  twitterReturned.innerHTML = `${data.twitter_username}`;
  }
  
  let websiteReturned = document.getElementById("websiteReturned");
  websiteReturned.innerHTML = `<a href="${data.blog}">Website</a>`;

  let githubReturned = document.getElementById("githubReturned");
  githubReturned.innerHTML = `${data.company}`;

  let inputDate = data.created_at;
  let date = new Date(inputDate);
  let options = { day: 'numeric', month: 'short', year: 'numeric' };
  let dateString = date.toLocaleString('en-US', options);
  console.log(dateString);


  let joinedDate = document.getElementById("joinedDate");
  joinedDate.innerHTML = dateString;
}            

