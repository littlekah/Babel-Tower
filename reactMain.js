"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("./global.css");
function Tower() {
    var _a = (0, react_1.useState)({
        floors: 0
    }), state = _a[0], setState = _a[1];
    function climb() {
        setState({ floors: state.floors + 1 });
    }
    return className = "card" >
        className;
    "tower" > ;
    /div>
        < h1 > Torre;
    de;
    Babel < /h1>
        < p;
    className = "count" > Andares;
    {
        state.floors;
    }
    /p>
        < button;
    onClick = { climb: climb } > Subir < /button>
        < /div>;
}
client_1.default.createRoot(document.getElementById("root")).render(/>));
