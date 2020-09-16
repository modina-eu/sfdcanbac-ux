var html = require("choo/html");

module.exports = () => {
  let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const dateObjs = [
    new Date("October 4, 2020 17:00:00 UTC"),
    new Date("October 4, 2020 17:15:00 UTC"),
    new Date("October 4, 2020 18:00:00 UTC"),
    new Date("October 4, 2020 18:45:00 UTC"),
  ];
  const dateDescs = [
    "Introduction",
    "Presentations: this time we will have 2-3 presentations from the community! Each presentation is 10 minute followed by a 5-minute Q&A. Presenters to be announced soon.",
    "Show and tell + skillshare (+ more info)",
    "Hydra questions in Zoom / pixeljam in Mozilla Hubs!",
  ];
  
  const dates = [];
  const dateOptions = {hour: '2-digit', minute:'2-digit'};
  for(let i = 0; i < dateObjs.length; i++) {
    const start = dateObjs[i].toLocaleTimeString([], dateOptions);
    const end = i == dateObjs.length - 1 ? "end" : (dateObjs[i+1].toLocaleTimeString([], dateOptions));
    dates.push(html`<li>${start} - ${end}: ${dateDescs[i]}</li>`);
  }

  return { timezone, dates, startDate: dateObjs[0] };
};