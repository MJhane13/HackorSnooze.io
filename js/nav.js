"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
  $navFavorites.show();
  $navSubmit.show();
  $navMyStories.show();
}

//story submission when clicking submit:

function navSubmitClick(event) {
  console.debug("navSubmitClick", event);
  event.preventDefault();
  hidePageComponents();
  $submitForm.show();
}

const navSubmit = document.querySelector("#nav-submit");
navSubmit.addEventListener("click", navSubmitClick);

//to display user's favorites from the list of stories
function navFavoriteClick(event) {
  console.debug("navFavoriteClick", event);
  hidePageComponents();
  putUserStoriesOnPage("favorites");
}
const navFavorites = document.getElementById("nav-favorites");
navFavorites.addEventListener("click", navFavoriteClick);

//to show user's stories when clicking profile:

function navUserProfileClick(event) {
  console.debug("navUserProfileClick", event);
  hidePageComponents();
  putUserStoriesOnPage("ownStories");
}

const navUserProfile = document.querySelector("#nav-user-profile");
navUserProfile.addEventListener("click", navUserProfileClick)

