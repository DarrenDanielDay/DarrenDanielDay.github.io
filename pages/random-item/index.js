import React, {useState} from "./_snowpack/pkg/react.js";
import {colors} from "./_snowpack/pkg/@material-ui/core.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import {RandomItem} from "./random-item.js";
const App = () => {
  let [setting, setSetting] = useState(false);
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100vh"
    }
  }, /* @__PURE__ */ React.createElement("header", {
    style: {
      position: "fixed",
      top: 0,
      backgroundColor: colors.indigo[600],
      color: "white",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "3em"
    },
    onClick: () => {
      setSetting((s) => !s);
    }
  }, "随机抽取小工具"), /* @__PURE__ */ React.createElement(RandomItem, {
    settings: setting
  }));
};
ReactDOM.render(/* @__PURE__ */ React.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiRTpcXENvZGluZ1xcTGVhcm5pbmdcXHNub3dwYWNrXFxyZWFjdC1zbm93cGFja1xcaW5kZXgudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLE1BQWdCLE1BQU07QUFDMUIsTUFBSSxDQUFDLFNBQVMsY0FBYyxTQUFTO0FBQ3JDLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQ0UsT0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLE1BQ1QsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsTUFDaEIsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBO0FBQUEsS0FHVixvQ0FBQyxVQUFEO0FBQUEsSUFDRSxPQUFPO0FBQUEsTUFDTCxVQUFVO0FBQUEsTUFDVixLQUFLO0FBQUEsTUFDTCxpQkFBaUIsT0FBTyxPQUFPO0FBQUEsTUFDL0IsT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsTUFDaEIsUUFBUTtBQUFBO0FBQUEsSUFFVixTQUFTLE1BQU07QUFDWCxpQkFBVyxPQUFLLENBQUM7QUFBQTtBQUFBLEtBRXRCLFlBR0Qsb0NBQUMsWUFBRDtBQUFBLElBQVksVUFBVTtBQUFBO0FBQUE7QUFLNUIsU0FBUyxPQUFPLG9DQUFDLEtBQUQsT0FBYSxTQUFTLGVBQWU7IiwKICAibmFtZXMiOiBbXQp9Cg==
