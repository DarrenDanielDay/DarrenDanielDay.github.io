import React, {useEffect, useState} from "./_snowpack/pkg/react.js";
import {ClickAwayListener} from "./_snowpack/pkg/@material-ui/core.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import {RandomSong} from "./random-item.js";
const App = () => {
  let [setting, setSetting] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= 5) {
      setSetting(!setting);
    }
    const timeout = setTimeout(() => {
      setCount(0);
    }, 1e3);
    return () => {
      clearTimeout(timeout);
    };
  }, [count]);
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100vh"
    }
  }, /* @__PURE__ */ React.createElement(ClickAwayListener, {
    onClickAway: () => {
      setCount((count2) => count2 + 1);
    }
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(RandomSong, {
    settings: setting
  }))));
};
ReactDOM.render(/* @__PURE__ */ React.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiRTpcXENvZGluZ1xcTGVhcm5pbmdcXHNub3dwYWNrXFxyZWFjdC1zbm93cGFja1xcaW5kZXgudHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLE1BQWdCLE1BQU07QUFDMUIsTUFBSSxDQUFDLFNBQVMsY0FBYyxTQUFTO0FBQ3JDLFFBQU0sQ0FBQyxPQUFPLFlBQVksU0FBUztBQUNuQyxZQUFVLE1BQU07QUFDZCxRQUFJLFNBQVMsR0FBRztBQUNkLGlCQUFXLENBQUM7QUFBQTtBQUVkLFVBQU0sVUFBVSxXQUFXLE1BQU07QUFDL0IsZUFBUztBQUFBLE9BQ1I7QUFDSCxXQUFPLE1BQU07QUFDWCxtQkFBYTtBQUFBO0FBQUEsS0FFZCxDQUFDO0FBQ0osU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxPQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsTUFDVCxZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxNQUNoQixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUE7QUFBQSxLQUdWLG9DQUFDLG1CQUFEO0FBQUEsSUFDRSxhQUFhLE1BQU07QUFDakIsZUFBUyxDQUFDLFdBQVUsU0FBUTtBQUFBO0FBQUEsS0FHOUIsb0NBQUMsT0FBRCxNQUNFLG9DQUFDLFlBQUQ7QUFBQSxJQUFZLFVBQVU7QUFBQTtBQUFBO0FBT2hDLFNBQVMsT0FBTyxvQ0FBQyxLQUFELE9BQWEsU0FBUyxlQUFlOyIsCiAgIm5hbWVzIjogW10KfQo=
