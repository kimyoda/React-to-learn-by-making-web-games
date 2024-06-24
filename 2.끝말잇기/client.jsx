const React = require("react");
const ReactDom = require("react-dom/client");

const WordRelayClass = require("./WordRelayClass");

ReactDom.createRoot(document.querySelector("#root")).render(<WordRelayClass />);
