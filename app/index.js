// import choo
import choo from "choo";
import html from "choo/html";

// initialize choo
const app = choo({ hash: true });

import machine from "./stores/machine";

app.use(machine);

app.route("/*", notFound);

function notFound() {
  return html`
    <div>
      <a href="/">
        404 with love ❤ back to top!
      </a>
    </div>
  `;
}

// import a template
import main from "./views/main";
import geom from "./views/geometries";

app.route("/", main);
app.route("/geom", geom);

// start app
app.mount("#choomount");



