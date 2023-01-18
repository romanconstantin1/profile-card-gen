import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let fnText = "Nissa";
  if (variables.name != null) fnText = variables.name;

  let lnText = "Revane";
  if (variables.lastname != null) lnText = variables.lastname;

  let smPosition = `<ul class="position-right">`;
  if (variables.socialMediaPosition == "position-left")
    smPosition = `<ul class="position-left">`;

  let tLink =
    "https://www.youtube.com/watch?v=5utArpwLqo8&ab_channel=ItaliaSquisita";
  if (variables.twitter != null)
    tLink = `https://twitter.com/${variables.twitter}`;

  let ghLink =
    "https://www.youtube.com/watch?v=bbVj4Cp-Wt0&ab_channel=ItaliaSquisita";
  if (variables.github != null)
    ghLink = `https://github.com/${variables.github}`;

  let liLink =
    "https://www.youtube.com/watch?v=bNSR5k9Fb5I&t=25s&ab_channel=ItaliaSquisita";
  if (variables.linkedin != null)
    liLink = `https://www.linkedin.com/in/${variables.linkedin}`;

  let igLink =
    "https://www.youtube.com/watch?v=dMIk_kzvoBM&ab_channel=ItaliaSquisita";
  if (variables.instagram != null)
    igLink = `http://instagram.com/${variables.instagram}`;

  let roleSel = "";
  if (variables.role != null) roleSel = variables.role;

  let citySel = "";
  if (variables.city != null) citySel = variables.city;

  let countrySel = "";
  if (variables.country != null) countrySel = variables.country;
  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${fnText} ${lnText}</h1>
          <h2>${roleSel}</h2>
          <h3>${citySel}, ${countrySel}</h3>
            ${smPosition}
            <li><a href="${tLink}"><i class="fab fa-twitter"></i></a></li>
            <li><a href="${ghLink}"><i class="fab fa-github"></i></a></li>
            <li><a href="${liLink}"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="${igLink}"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
