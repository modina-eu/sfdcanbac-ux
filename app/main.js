// import choo's template helper
const html = require("choo/html");
const { css } = require("@emotion/css");

// export module
module.exports = function(state, emit) {
  // const headlineCss = css`
  //   color: pink;
  //   font-size: 1.3em;
  //   border: solid black;
  //   text-align: center;
  //   padding: 5px;
  //   &:hover {
  //     background-color: lightgrey;
  //     color: black;
  //   }
  // `;
  const mainCss = css`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    div {
      color: pink;
      font-size: 1.3em;
      border: solid black;
      text-align: center;
      padding: 5px;
      &:hover {
        background-color: lightgrey;
        color: black;
      }
    }
  `;
  
  return html`
    <div class=${ mainCss }>
      <div>
        hello beautiful world
      </div>
    </div>
  `;
};
