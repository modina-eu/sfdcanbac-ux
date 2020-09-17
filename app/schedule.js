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
    "Presentations: this time we will have 2-3 presentations from the community. Each presentation is 10 minute followed by a 5-minute Q&A. Presenters to be announced soon.",
    html`Show and tell + skillshare (+ more <a href="/#info">info</a>)`,
    "Hydra questions in Zoom / pixeljam in Mozilla Hubs!",
  ];
  
  const dates = [];
  const dateOptions = {hour: '2-digit', minute:'2-digit'};
  for(let i = 0; i < dateObjs.length; i++) {
    const start = dateObjs[i].toLocaleTimeString([], dateOptions);
    const end = i == dateObjs.length - 1 ? "end" : (dateObjs[i+1].toLocaleTimeString([], dateOptions));
    dates.push(html`<li><b>${start} - ${end}</b>: ${dateDescs[i]}</li>`);
  }

  const startDateString = dateObjs[0].toLocaleDateString(undefined, { timeZoneName: 'short', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit' });
  return { timezone, dates, startDateString };
};
