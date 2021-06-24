import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  IconButton,
  Slider,
  Switch,
  TextField,
  Typography
} from "./_snowpack/pkg/@material-ui/core.js";
import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
  Delete,
  ExpandMore
} from "./_snowpack/pkg/@material-ui/icons.js";
import {sum} from "./_snowpack/pkg/lodash.js";
import React, {useEffect, useState} from "./_snowpack/pkg/react.js";
const total = 100;
function useStoredState(key, dft) {
  const [item, setItems] = useState(dft);
  const itemStore = localStorage.getItem(key);
  useEffect(() => {
    if (itemStore) {
      setItems(JSON.parse(itemStore));
    }
  }, [itemStore]);
  const setter = (items) => {
    setItems(items);
    localStorage.setItem(key, JSON.stringify(items));
  };
  return [item, setter];
}
const itemStyle = {
  width: "600px",
  display: "flex",
  justifyContent: "space-between"
};
export const RandomSong = ({settings}) => {
  const [items, setItems] = useStoredState("songs", []);
  const itemsExceptLast = items.slice(0, items.length - 1);
  const lastItem = items[items.length - 1];
  const totalPosibility = sum(itemsExceptLast.map((item) => item.possibility));
  const lastPosibility = total - totalPosibility;
  const [text, setText] = useState("");
  const [pickedSong, setSong] = useState();
  const [{random, counter}, setRandomConfig] = useStoredState("random", {
    random: true,
    counter: 0
  });
  const deleteSong = (item) => {
    const index = items.findIndex((s) => s === item);
    setItems([...items.slice(0, index), ...items.slice(index + 1)]);
  };
  const moveUp = (item) => {
    const index = items.findIndex((s) => s === item);
    if (index <= 0)
      return;
    items[index] = items[index - 1];
    items[index - 1] = item;
    setItems([...items]);
  };
  const moveDown = (item) => {
    const index = items.findIndex((s) => s === item);
    if (index === items.length - 1)
      return;
    items[index] = items[index + 1];
    items[index + 1] = item;
    setItems([...items]);
  };
  useEffect(() => {
    if (items.length) {
      setItems([
        ...itemsExceptLast,
        {
          name: lastItem.name,
          possibility: lastPosibility
        }
      ]);
    }
  }, [totalPosibility]);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Accordion, null, /* @__PURE__ */ React.createElement(AccordionSummary, {
    expandIcon: /* @__PURE__ */ React.createElement(ExpandMore, null)
  }, "随机列表"), /* @__PURE__ */ React.createElement(AccordionDetails, null, /* @__PURE__ */ React.createElement("div", null, itemsExceptLast.map((item, index) => /* @__PURE__ */ React.createElement("div", {
    key: index,
    style: itemStyle
  }, /* @__PURE__ */ React.createElement(Typography, {
    style: {width: 100}
  }, item.name), /* @__PURE__ */ React.createElement(Slider, {
    style: {width: 350, display: settings ? "inherit" : "none"},
    max: lastPosibility + item.possibility,
    value: item.possibility,
    valueLabelDisplay: "on",
    onChangeCommitted: (_, value) => {
      const index2 = items.findIndex((s) => s === item);
      setItems([
        ...items.slice(0, index2),
        {...item, possibility: +value},
        ...items.slice(index2 + 1)
      ]);
    }
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(IconButton, {
    color: "secondary",
    onClick: () => {
      deleteSong(item);
    }
  }, /* @__PURE__ */ React.createElement(Delete, null)), settings && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(IconButton, {
    onClick: () => moveDown(item)
  }, /* @__PURE__ */ React.createElement(ArrowDownwardOutlined, null)), /* @__PURE__ */ React.createElement(IconButton, {
    onClick: () => moveUp(item)
  }, /* @__PURE__ */ React.createElement(ArrowUpwardOutlined, null)))))), !!lastItem && /* @__PURE__ */ React.createElement("div", {
    style: itemStyle
  }, /* @__PURE__ */ React.createElement(Typography, {
    style: {width: 100}
  }, lastItem.name), /* @__PURE__ */ React.createElement(Slider, {
    style: {width: 400, display: settings ? "inherit" : "none"},
    disabled: true,
    valueLabelDisplay: "on",
    max: Math.min(total, lastPosibility * 2),
    value: lastPosibility,
    onChangeCommitted: (e) => {
      console.log(e.target);
    }
  }), /* @__PURE__ */ React.createElement(IconButton, {
    color: "secondary",
    onClick: () => {
      deleteSong(lastItem);
    }
  }, /* @__PURE__ */ React.createElement(Delete, null)), settings && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(IconButton, {
    onClick: () => moveDown(lastItem)
  }, /* @__PURE__ */ React.createElement(ArrowDownwardOutlined, null)), /* @__PURE__ */ React.createElement(IconButton, {
    onClick: () => moveUp(lastItem)
  }, /* @__PURE__ */ React.createElement(ArrowUpwardOutlined, null)))), /* @__PURE__ */ React.createElement("div", {
    style: {display: settings ? "inherit" : "none"}
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "contained",
    onClick: () => {
      if (!items.length)
        return;
      const avg = Math.floor(total / items.length);
      setItems([
        ...itemsExceptLast.map((item) => ({
          ...item,
          possibility: avg
        })),
        {
          ...lastItem,
          possibility: total - avg * (items.length - 1)
        }
      ]);
    }
  }, "平均化"), /* @__PURE__ */ React.createElement("label", null, "使用随机"), /* @__PURE__ */ React.createElement(Switch, {
    checked: random,
    onChange: () => {
      setRandomConfig({counter, random: !random});
    }
  }))))), /* @__PURE__ */ React.createElement("div", {
    style: {display: "flex", alignItems: "center"}
  }, /* @__PURE__ */ React.createElement(TextField, {
    value: text,
    onChange: (e) => setText(e.target.value),
    label: "名称"
  }), /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    variant: "contained",
    onClick: () => {
      setItems([
        ...items,
        {name: text, possibility: items.length === 0 ? total : 0}
      ]);
    }
  }, "添加"), /* @__PURE__ */ React.createElement(Button, {
    color: "secondary",
    variant: "contained",
    onClick: () => {
      if (!random) {
        setRandomConfig({counter: counter + 1, random});
        setSong(items[(counter + 1) % items.length]);
        return;
      }
      let p = Math.random() * total;
      for (const item of items) {
        p -= item.possibility;
        if (p < 0) {
          setSong(item);
          return;
        }
      }
    }
  }, "抽取")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, pickedSong && `你抽到了 ${pickedSong.name}`)));
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiRTpcXENvZGluZ1xcTGVhcm5pbmdcXHNub3dwYWNrXFxyZWFjdC1zbm93cGFja1xccmFuZG9tLWl0ZW0udHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFLQSxNQUFNLFFBQVE7QUFDZCx3QkFBMkIsS0FBYSxLQUFRO0FBQzlDLFFBQU0sQ0FBQyxNQUFNLFlBQVksU0FBWTtBQUNyQyxRQUFNLFlBQVksYUFBYSxRQUFRO0FBQ3ZDLFlBQVUsTUFBTTtBQUNkLFFBQUksV0FBVztBQUNiLGVBQVMsS0FBSyxNQUFNO0FBQUE7QUFBQSxLQUVyQixDQUFDO0FBQ0osUUFBTSxTQUFTLENBQUMsVUFBYTtBQUMzQixhQUFTO0FBQ1QsaUJBQWEsUUFBUSxLQUFLLEtBQUssVUFBVTtBQUFBO0FBRTNDLFNBQU8sQ0FBQyxNQUFNO0FBQUE7QUFFaEIsTUFBTSxZQUFpQztBQUFBLEVBQ3JDLE9BQU87QUFBQSxFQUNQLFNBQVM7QUFBQSxFQUNULGdCQUFnQjtBQUFBO0FBRVgsYUFBTSxhQUE4QyxDQUFDLENBQUUsY0FBZTtBQUMzRSxRQUFNLENBQUMsT0FBTyxZQUFZLGVBQXVCLFNBQVM7QUFDMUQsUUFBTSxrQkFBa0IsTUFBTSxNQUFNLEdBQUcsTUFBTSxTQUFTO0FBQ3RELFFBQU0sV0FBNkIsTUFBTSxNQUFNLFNBQVM7QUFDeEQsUUFBTSxrQkFBa0IsSUFBSSxnQkFBZ0IsSUFBSSxDQUFDLFNBQVMsS0FBSztBQUMvRCxRQUFNLGlCQUFpQixRQUFRO0FBQy9CLFFBQU0sQ0FBQyxNQUFNLFdBQVcsU0FBUztBQUNqQyxRQUFNLENBQUMsWUFBWSxXQUFXO0FBQzlCLFFBQU0sQ0FBQyxDQUFFLFFBQVEsVUFBVyxtQkFBbUIsZUFBZSxVQUFVO0FBQUEsSUFDdEUsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFB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
