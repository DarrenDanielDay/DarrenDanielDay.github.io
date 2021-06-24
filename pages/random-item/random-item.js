import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  CircularProgress,
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
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};
export const RandomItem = ({settings}) => {
  const [items, setItems] = useStoredState("songs", []);
  const itemsExceptLast = items.slice(0, items.length - 1);
  const lastItem = items[items.length - 1];
  const totalPosibility = sum(itemsExceptLast.map((item) => item.possibility));
  const lastPosibility = total - totalPosibility;
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [pickedItem, setPickedItem] = useState();
  const [{random, counter}, setRandomConfig] = useStoredState("random", {
    random: true,
    counter: 0
  });
  const deleteItem = (item) => {
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
  }, "随机列表"), /* @__PURE__ */ React.createElement(AccordionDetails, null, /* @__PURE__ */ React.createElement("div", {
    style: {width: "100%"}
  }, itemsExceptLast.map((item, index) => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    key: index,
    style: itemStyle
  }, /* @__PURE__ */ React.createElement(Typography, {
    style: {width: "30%"}
  }, item.name), /* @__PURE__ */ React.createElement("div", {
    style: {
      width: "30%",
      display: "flex",
      flexDirection: "row-reverse"
    }
  }, /* @__PURE__ */ React.createElement(IconButton, {
    color: "secondary",
    onClick: () => {
      deleteItem(item);
    }
  }, /* @__PURE__ */ React.createElement(Delete, null)), settings && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(IconButton, {
    onClick: () => moveDown(item)
  }, /* @__PURE__ */ React.createElement(ArrowDownwardOutlined, null)), /* @__PURE__ */ React.createElement(IconButton, {
    onClick: () => moveUp(item)
  }, /* @__PURE__ */ React.createElement(ArrowUpwardOutlined, null))))), /* @__PURE__ */ React.createElement(Slider, {
    style: {
      display: settings ? "inherit" : "none"
    },
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
  }))), !!lastItem && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    style: itemStyle
  }, /* @__PURE__ */ React.createElement(Typography, {
    style: {width: settings ? void 0 : "30%"}
  }, lastItem.name), /* @__PURE__ */ React.createElement("div", {
    style: {
      width: "30%",
      display: "flex",
      flexDirection: "row-reverse"
    }
  }, /* @__PURE__ */ React.createElement(IconButton, {
    color: "secondary",
    onClick: () => {
      deleteItem(lastItem);
    }
  }, /* @__PURE__ */ React.createElement(Delete, null)), settings && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(IconButton, {
    onClick: () => moveDown(lastItem)
  }, /* @__PURE__ */ React.createElement(ArrowDownwardOutlined, null)), /* @__PURE__ */ React.createElement(IconButton, {
    onClick: () => moveUp(lastItem)
  }, /* @__PURE__ */ React.createElement(ArrowUpwardOutlined, null))))), /* @__PURE__ */ React.createElement(Slider, {
    style: {
      width: "100%",
      display: settings ? "inherit" : "none"
    },
    disabled: true,
    valueLabelDisplay: "on",
    max: Math.min(total, lastPosibility * 2),
    value: lastPosibility,
    onChangeCommitted: (e) => {
      console.log(e.target);
    }
  })), /* @__PURE__ */ React.createElement("div", {
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
  }, "平均化"), /* @__PURE__ */ React.createElement("label", {
    style: {marginLeft: "10px"}
  }, "使用", random ? "随机" : "顺序"), /* @__PURE__ */ React.createElement(Switch, {
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
    onClick: async () => {
      setLoading(true);
      await new Promise((resolve) => {
        setTimeout(resolve, 1e3);
      });
      setLoading(false);
      if (!random) {
        setRandomConfig({counter: counter + 1, random});
        setPickedItem(items[(counter + 1) % items.length]);
        return;
      }
      let p = Math.random() * total;
      for (const item of items) {
        p -= item.possibility;
        if (p < 0) {
          setPickedItem(item);
          return;
        }
      }
    }
  }, "抽取")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, loading ? /* @__PURE__ */ React.createElement(CircularProgress, null) : pickedItem && `你抽到了${pickedItem.name}`)));
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiRTpcXENvZGluZ1xcTGVhcm5pbmdcXHNub3dwYWNrXFxyZWFjdC1zbm93cGFja1xccmFuZG9tLWl0ZW0udHN4Il0sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUtBLE1BQU0sUUFBUTtBQUNkLHdCQUEyQixLQUFhLEtBQVE7QUFDOUMsUUFBTSxDQUFDLE1BQU0sWUFBWSxTQUFZO0FBQ3JDLFFBQU0sWUFBWSxhQUFhLFFBQVE7QUFDdkMsWUFBVSxNQUFNO0FBQ2QsUUFBSSxXQUFXO0FBQ2IsZUFBUyxLQUFLLE1BQU07QUFBQTtBQUFBLEtBRXJCLENBQUM7QUFDSixRQUFNLFNBQVMsQ0FBQyxVQUFhO0FBQzNCLGFBQVM7QUFDVCxpQkFBYSxRQUFRLEtBQUssS0FBSyxVQUFVO0FBQUE7QUFFM0MsU0FBTyxDQUFDLE1BQU07QUFBQTtBQUVoQixNQUFNLFlBQWlDO0FBQUEsRUFDckMsT0FBTztBQUFBLEVBQ1AsU0FBUztBQUFBLEVBQ1QsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBO0FBRVAsYUFBTSxhQUE4QyxDQUFDLENBQUUsY0FBZTtBQUMzRSxRQUFNLENBQUMsT0FBTyxZQUFZLGVBQXVCLFNBQVM7QUFDMUQsUUFBTSxrQkFBa0IsTUFBTSxNQUFNLEdBQUcsTUFBTSxTQUFTO0FBQ3RELFFBQU0sV0FBNkIsTUFBTSxNQUFNLFNBQVM7QUFDeEQsUUFBTSxrQkFBa0IsSUFBSSxnQkFBZ0IsSUFBSSxDQUFDLFNBQVMsS0FBSztBQUMvRCxRQUFNLGlCQUFpQixRQUFRO0FBQy9CLFFBQU0sQ0FBQyxNQUFNLFdBQVcsU0FBUztBQUNqQyxRQUFNLENBQUMsU0FBUyxjQUFjLFNBQVM7QUFDdkMsUUFBTSxDQUFDLFlBQVksaUJBQWlCO0FBQ3BDLFFBQU0sQ0FBQyxDQUFFLFFBQVEsVUFB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
