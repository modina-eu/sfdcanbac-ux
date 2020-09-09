// import choo's template helper
var html = require("choo/html");

var date = require("./date.js");

// export module
module.exports = function(state, emit) {
  let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const date0 = new Date('October 4, 2020 17:00:00 UTC');
  const date1 = new Date('October 4, 2020 17:30:00 UTC');
  const date2 = new Date('October 4, 2020 18:30:00 UTC');
  
  emit(
    "DOMTitleChange",
    `hydra meetup 2`
  );
  
  return html`
<div class="container">
    <h1> hydra meetup #2! </h1>
    <p>
      The second hydra meetup will be held online on <b>4th October (Sunday) 17:00 UTC</b><br>
      In your timezone: ${date0}
    </p>
     <h4>Schedule</h4>
    <p>
    time in ${timezone}
    </p>
    <ul>
      <li>${date0.toLocaleTimeString()} - ${date1.toLocaleTimeString()}: Introduction</li>
      <li>${date1.toLocaleTimeString()} - ${date2.toLocaleTimeString()}: Show and tell. Say hi, and share one thing you are interested in or working on. Please keep it to 2 minutes max so we have time to hear from everyone! </li>
      <li>${date2.toLocaleTimeString()} - end: Breakout rooms to discuss specific topics and ask hydra questions</li>
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
</div>`;
};
