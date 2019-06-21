import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/slider";
import './scripts/feedback';
import './scripts/screen-menu';
// import './scripts/anchors';