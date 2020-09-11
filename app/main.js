// import choo's template helper
var html = require("choo/html");
var Hydra = require('./hydra-canvas.js')
var date = require("./date.js")();

// export module
module.exports = function(state, emit) {
  emit(
    "DOMTitleChange",
    `hydra meetup 2`
  );
  
  return html`
<div>
${state.cache(Hydra, 'my-hydra').render()}
<div class="main ${state.isMobile ? "" : "hydra-mode"}">
<div class="container">
    <h1> hydra meetup #2! </h1>
    <p>
      The second hydra meetup will be held online on <b>4th October (Sunday) 17:00 UTC</b><br>
      In your timezone: ${date.startDate}
    </p>
     <h4>Schedule</h4>
    <p>
    time in ${date.timezone}
    </p>
    <ul>
      ${date.dates}
    </ul>
    <p>
      Please join the <a href="https://chat.toplap.org/channel/hydra-meetup" target="_blank">hydra-meetup channel</a> on toplap for up-to-date info, as well as communication before/during/after the event. 
    </p>

    <p>
      Make your own webpage! Templates by
      <a href="https://glitch.com/~meetup-2-embed" target="_blank">Olivia</a> | 
      <!-- <a href="https://glitch.com/~crocus-puffy-caption" target="_blank">Flor</a> | -->
      <a href="https://glitch.com/~hydra-meetup-2-naoto" target="_blank">Naoto</a>
    </p>


    <div><a href="#info">more info here</a></div>
    <div>
      <h4>Participants</h4>
      <p class="participants">${state.profiles.map((profile, i) => html`
        <span class="participant ${profile["organizer"] === "y" ? "organizer" : "normal"}"><a href="/#introductions/${i+1}">${profile["Your name"]}</a></span>
      `)}</p>
    </div>
  </div>
</div>
</div>`;
};
