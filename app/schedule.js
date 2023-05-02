const html = require("choo/html");
// const contents = require("./contents.js");
// const contents = window.contents;

module.exports = (contents) => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  console.log(contents, "io")
  
  
  const dates = [];
  const dateOptions = { hour: "2-digit", minute: "2-digit" };
  for (let i = 0; i < contents.length; i++) {
    const s = contents[i];
    // const date = s.start.toLocaleDateString(undefined, {
    //   month: "long",
    //   day: "numeric",
    //   year: "numeric"
    // });
    // const dateYear = s.start.toLocaleDateString(undefined, {
    //   year: "numeric"
    // });
    let { topic, type, yt, collab, venue, links } = s;
    //   console.log("oi", title, desc.parentNode)
    // if(desc.parentNode !== undefined && desc.parentNode !== null) {
    //   desc = desc.parentNode.removeChild(desc);
    // }
    let title = s.name;
    let image = s.attachments[0].thumbnails.large.url;
    let desc = s.notes;

//     let types = [];
//     for (let i = 0; i < type.length; i++) {
//       let del = i < type.length - 1 ? ', ' : '';
//       types.push(type[i] + del);
//     }
//     let topics = [];
//     for (let i = 0; i < topic.length; i++) {
//       let del = i < topic.length - 1 ? ', ' : '';
//       topics.push(topic[i] + del);
//     }
    
//     let link = [];
//     if (yt != undefined) {
//       link.push(html`<a target="_blank" href="https://youtu.be/${yt}">Video</a>`);
//     }
//     for (let i = 0; links !== undefined && i < links.length; i++) {
//       let num = i + 1;
//       if(links.length == 1) {
//         num = "";
//       }
//       link.push(html`<div><a target="_blank" href="${links[i]}">Link ${num}</a></div>`);
//     }
    
//     let collabs = [];
//     if (collab != undefined) {
//       let i = 0;
//       for (const c of collab) {
//         collabs.push(`${c}`);
//         if (i == collab.length - 2) {
//           collabs.push(` and `);
//         }
//         else if (i < collab.length - 1) {
//           collabs.push(`, `);
//         }
//         i++;
//       }
//     }
//     let venueElt;
//     if (venue != undefined) {
//       let prefix = "";
//       venueElt = html`
//         ${prefix} ${venue}
//       `;
//     }
    let imageElt;
    if (image != undefined) {
      imageElt = html`
        <img style="object-fit: cover;aspect-ratio: 1/1" src="${image}" loading="lazy" />
      `;
    } else {
      imageElt = html`<p>The image is currently on loan</p>`
    }
              // <div class="collabs">${collabs}</div>
              // <div class="type">${types} ${topics}</div>

    dates.push(
      {type, title, dateYear: 0, dom: html`
        <section id="section-${i}">
          <div class="thumbnail">${imageElt}</div>
          <div class="caption-holder">
            <div class="caption">
              <div><span class="title">${title}</span></div>
              <div><span class="date">${s.year}</span></div>
              <div class="type">Mixed media</div>
              <p class="desc">${desc}</p>
            </div>
          </div>
        </section>
      `
      });
  }

  return dates;
};
