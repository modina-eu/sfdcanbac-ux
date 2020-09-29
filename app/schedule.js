var html = require("choo/html");

module.exports = () => {
  let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const sc = [
    {start: new Date("October 2, 2020 17:30:00 UTC"), end: new Date("October 2, 2020 19:00:00 UTC"), title: "Creative Code Stammtisch", desc: "oi"},
    {start: new Date("October 3, 2020 10:30:00 UTC"), end: new Date("October 3, 2020 11:30:00 UTC"), title: "Low Frequency Skies", desc: "oi"},
    {start: new Date("October 4, 2020 09:30:00 UTC"), end: new Date("October 4, 2020 11:30:00 UTC"), title: "TDSW x PCJ Vernissage", desc: "oi"},
    {start: new Date("October 4, 2020 17:00:00 UTC"), end: new Date("October 4, 2020 19:00:00 UTC"), title: "Hydra meetup #2", desc: "oi"},
    {start: new Date("October 5, 2020 10:30:00 UTC"), end: new Date("October 5, 2020 11:30:00 UTC"), title: "Low Frequency Skies", desc: "oi"},
    {start: new Date("October 5, 2020 11:30:00 UTC"), end: new Date("October 5, 2020 12:30:00 UTC"), title: "Best Practices - Discussion", desc: "oi"},
    {start: new Date("October 6, 2020 10:30:00 UTC"), end: new Date("October 6, 2020 11:30:00 UTC"), title: "Low Frequency Skies", desc: "oi"},
    {start: new Date("October 6, 2020 19:00:00 UTC"), end: new Date("October 6, 2020 20:00:00 UTC"), title: "Best Practices", desc: "oi"},
    {start: new Date("October 7, 2020 10:30:00 UTC"), end: new Date("October 7, 2020 11:30:00 UTC"), title: "Low Frequency Skies", desc: "oi"},
    {start: new Date("October 7, 2020 11:30:00 UTC"), end: new Date("October 7, 2020 12:30:00 UTC"), title: "Best Practices - Discussion", desc: "oi"},
    {start: new Date("October 7, 2020 18:30:00 UTC"), end: new Date("October 7, 2020 19:30:00 UTC"), title: "Multidimensional Journey", desc: "oi"},
    {start: new Date("October 8, 2020 10:30:00 UTC"), end: new Date("October 8, 2020 11:30:00 UTC"), title: "Low Frequency Skies", desc: "oi"},
    {start: new Date("October 8, 2020 14:00:00 UTC"), end: new Date("October 8, 2020 14:15:00 UTC"), title: "Distant Movements", desc: "oi"},
  ]
  
  const dates = [];
  const dateOptions = {hour: '2-digit', minute:'2-digit'};
  for(let i = 0; i < sc.length; i++) {
    const s = sc[i];
    const start = s.start.toLocaleDateString(undefined, { month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit' });
    const end = s.end.toLocaleTimeString([], dateOptions);
    const {title, desc} = s;
    dates.push(html`<li><p>${start} - ${end}</p><b>${title}</b> ${desc}</li>`);
  }

  return { timezone, dates };
};
