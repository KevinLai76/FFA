console.log('running');
// grab the body
let body = document.querySelector('body');
// User log in state - now Current User
let currentUser = 'null';

// master controller for the nav and main-body
let page;

// // Navigation bar
// let nav;
// // main body
// let main;

// // Make a navigation bar based on the user log in state
// // If user is logged in
// if (currentUser) {
//   // show logged in nav and main body
//   nav = new LoggedInNav();
//   main = new App();
// } else {
//   nav = new LandingPageNav();
//   main = new LandingPage();
// }

document.addEventListener('DOMContentLoaded', event => {
  page = new Page();
  page.togglePageState();
  // nav.imHere();
  // if we are logged in, render the nav bar buttons and run app
  // if (currentUser) {
  //   nav.renderNavBarButtons();
  //   main.toggleAppState('home');
  // } else {
  //   // ELSE render our login/register nav, and show the landing page
  //   nav.logInOrRegister();
  //   main.toggleLandingPageState('login-page');
  // }
  // // add event listenrs
  // body.addEventListener('click', event => {
  //   navClickEventListener(event);
  //   homeClickEventListener(event);
  // });
});

// Handle Nav Bar 'click' Event Listeners
function navClickEventListener(event) {
  // Delegated Event Listenrs
  // if our target is the home button
  // debugger;
  if (event.target === nav.homeButton) {
    // Home Button
    // set app state
    let appState = event.target.innerText;
    // toggle the state of our main component
    main.toggleAppState(appState);
    // toggle the state of the home page
    main.homePage.swapState('index', '');
  } else if (event.target === nav.profileButton) {
    // Profile Button
    let appState = event.target.innerText;
    main.toggleAppState(appState);
  } else if (event.target === nav.athleteButton) {
    // Athletes Button
    let appState = event.target.innerText;
    main.toggleAppState(appState);
  } else if (event.target === nav.linkToRegisterButton) {
    // Link to Register Page Button
    // set app state
    let appState = 'registration-page';
    // toggle the state of the landing page
    main.toggleLandingPageState(appState);
    // change the state of the landing page's nav bar
    nav.isLoggingIn = false;
    // call the logInOrRegister
    nav.logInOrRegister();
  } else if (event.target === nav.linkToLogInButton) {
    // Link to Log In Page Button
    // set app state
    let appState = 'login-page';
    // change the state of the main page
    main.toggleLandingPageState(appState);
    // change the state of the landing page's nav bar
    nav.isLoggingIn = true;
    // call logInOrRegister
    nav.logInOrRegister();
  }
}

// Handle Home Page 'click' Event Listenrs
function homeClickEventListener(event) {
  // if the event.target's class name is 'routine-list-element'
  if (event.target.classList.contains('routine-list-element')) {
    // get the routine's id from the dataset
    let routineId = event.target.dataset['routineId'];
    // fetch that routine
    RoutinesAdapter.getOneRoutine(routineId).then(data => {
      // Use main to get into your home page, and use it's swapState method
      // pass it the 'show' state
      main.homePage.swapState('show', data);
    });

    console.log('yes');
  }
}
