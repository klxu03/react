var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
init_react();
var import_express = __toESM(require("express"));
var import_compression = __toESM(require("compression"));
var import_morgan = __toESM(require("morgan"));
var import_express2 = require("@remix-run/express");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/kevinxu-mac/Documents/Computer-Science/KevThatDevs/react/dialect-caddy/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());

// app/styles/global.css
var global_default = "/build/_assets/global-JKOEVWHU.css";

// route:/Users/kevinxu-mac/Documents/Computer-Science/KevThatDevs/react/dialect-caddy/app/root.tsx
var meta = () => {
  return { title: "Dialect CaddyShack Subsidiary" };
};
var links = () => [
  {
    rel: "stylesheet",
    href: global_default
  }
];
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null)));
}
var Document = ({ children }) => {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
};
var Layout = ({ children }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children);
};

// route:/Users/kevinxu-mac/Documents/Computer-Science/KevThatDevs/react/dialect-caddy/app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  action: () => action,
  default: () => dashboard_default
});
init_react();
var import_remix3 = __toESM(require_remix());

// app/components/Sidebar.tsx
init_react();
var import_react = require("react");
function Sidebar() {
  const [active, setActive] = (0, import_react.useState)("home");
  return /* @__PURE__ */ React.createElement("div", {
    className: "sidebar-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sidebar-wrapper"
  }, "This is a sidebar", /* @__PURE__ */ React.createElement("div", {
    className: "menu-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "menu-item " + (active == "home" ? "menu-item-active" : ""),
    onClick: () => setActive("home")
  }, "Home"), /* @__PURE__ */ React.createElement("div", {
    className: "menu-item " + (active == "caddies" && "menu-item-active"),
    onClick: () => setActive("caddies")
  }, "Caddies"), /* @__PURE__ */ React.createElement("div", {
    className: "menu-item " + (active == "help" && "menu-item-active"),
    onClick: () => setActive("help")
  }, "Help"))));
}

// route:/Users/kevinxu-mac/Documents/Computer-Science/KevThatDevs/react/dialect-caddy/app/routes/dashboard.tsx
var action = async ({ request }) => {
  let form = await request.formData();
  let players = form.get("players");
  if (typeof players !== "string") {
    throw new Error("players is not a string");
  }
  const playersArr = players.split(",");
  console.log(playersArr);
  return Promise.resolve(true);
};
function Dashboard() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Sidebar, null), /* @__PURE__ */ React.createElement("div", {
    className: "body-container"
  }, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null)));
}
var dashboard_default = Dashboard;

// route:/Users/kevinxu-mac/Documents/Computer-Science/KevThatDevs/react/dialect-caddy/app/routes/dashboard/index.tsx
var dashboard_exports2 = {};
__export(dashboard_exports2, {
  default: () => dashboard_default2,
  links: () => links2
});
init_react();
var import_react2 = require("react");

// app/styles/dashboard/styles.css
var styles_default = "/build/_assets/styles-FNTYTHNK.css";

// route:/Users/kevinxu-mac/Documents/Computer-Science/KevThatDevs/react/dialect-caddy/app/routes/dashboard/index.tsx
var links2 = () => [
  {
    rel: "stylesheet",
    href: styles_default
  }
];
var Row = ({ round }) => {
  const [active, setActive] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox"
  })), /* @__PURE__ */ React.createElement("td", null, round.date), /* @__PURE__ */ React.createElement("td", null, round.owner), /* @__PURE__ */ React.createElement("td", null, round.players), /* @__PURE__ */ React.createElement("td", null, round.caddies), /* @__PURE__ */ React.createElement("td", {
    onClick: () => {
      setActive(!active);
    }
  }, active ? /* @__PURE__ */ React.createElement("div", {
    className: "dropdown"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "dropdown-content"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      setActive(false);
      console.log("active", active);
    }
  }, "Close"), /* @__PURE__ */ React.createElement("p", null, "Delete"), /* @__PURE__ */ React.createElement("p", null, "View"), /* @__PURE__ */ React.createElement("p", null, "Edit"))) : /* @__PURE__ */ React.createElement("button", null, "...")));
};
var AddRound = () => {
  const [date, setDate] = (0, import_react2.useState)("");
  const [players, setPlayers] = (0, import_react2.useState)([]);
  const [player, setPlayer] = (0, import_react2.useState)("");
  const [caddies, setCaddies] = (0, import_react2.useState)([]);
  const [caddy, setCaddy] = (0, import_react2.useState)("");
  const [numCaddies, setNumCaddies] = (0, import_react2.useState)(0);
  return /* @__PURE__ */ React.createElement("form", {
    method: "post",
    action: "/dashboard"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "date"
  }, "Date"), /* @__PURE__ */ React.createElement("input", {
    type: "datetime-local",
    onChange: (e) => {
      setDate(e.target.value);
    }
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "player"
  }, "Search Players "), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "Add Players",
    value: player,
    onChange: (event) => {
      setPlayer(event.target.value);
    }
  }), /* @__PURE__ */ React.createElement("button", {
    onClick: (e) => {
      e.preventDefault();
      setPlayers([...players, player]);
      setPlayer("");
    }
  }, "Add"), /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex" }
  }, /* @__PURE__ */ React.createElement("h3", null, "Currently Added Players: "), players.map((player2) => {
    return /* @__PURE__ */ React.createElement("div", {
      key: player2,
      style: { display: "flex" }
    }, /* @__PURE__ */ React.createElement("p", null, "(", player2, ")"), /* @__PURE__ */ React.createElement("button", {
      onClick: (e) => {
        e.preventDefault();
        setPlayers(players.filter((currPlayer) => currPlayer !== player2));
      }
    }, "X"));
  })), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "caddy"
  }, "Search Caddies "), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "Add Caddies",
    value: caddy,
    onChange: (event) => {
      setCaddy(event.target.value);
    }
  }), /* @__PURE__ */ React.createElement("button", {
    onClick: (e) => {
      e.preventDefault();
      if (caddies.length + 1 <= numCaddies) {
        setCaddies([...caddies, caddy]);
        setCaddy("");
      }
    }
  }, "Add"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex" }
  }, /* @__PURE__ */ React.createElement("h3", null, "How many caddies?"), /* @__PURE__ */ React.createElement("button", {
    onClick: (e) => {
      e.preventDefault();
      setNumCaddies(Math.max(numCaddies - 1, caddies.length));
    }
  }, "-"), /* @__PURE__ */ React.createElement("p", null, numCaddies), /* @__PURE__ */ React.createElement("button", {
    onClick: (e) => {
      e.preventDefault();
      setNumCaddies(numCaddies + 1);
    }
  }, "+")), /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex" }
  }, /* @__PURE__ */ React.createElement("h3", null, "Currently Added Caddies: "), caddies.map((caddy2) => {
    return /* @__PURE__ */ React.createElement("div", {
      key: caddy2,
      style: { display: "flex" }
    }, /* @__PURE__ */ React.createElement("p", null, "(", caddy2, ")"), /* @__PURE__ */ React.createElement("button", {
      onClick: (e) => {
        e.preventDefault();
        setCaddies(caddies.filter((currCaddy) => currCaddy !== caddy2));
      }
    }, "X"));
  })), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "date",
    value: date
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "players",
    value: players
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "caddies",
    value: caddies
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Save Round"));
};
function Dashboard2() {
  const [modalActive, setModalActive] = (0, import_react2.useState)(true);
  const data = [
    {
      id: 1,
      date: "3/17 @ 12:51 PM",
      owner: "KurtisPlayer1",
      players: 2,
      caddies: 1
    },
    {
      id: 2,
      date: "3/18 @ 12:51 PM",
      owner: "KurtisPlayer2",
      players: 5,
      caddies: 2
    }
  ];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "Home"), /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      setModalActive(!modalActive);
    }
  }, modalActive ? "Close Round" : "Add Round")), /* @__PURE__ */ React.createElement("div", null, modalActive ? /* @__PURE__ */ React.createElement(AddRound, null) : /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox"
  })), /* @__PURE__ */ React.createElement("th", null, "Date"), /* @__PURE__ */ React.createElement("th", null, "Owner"), /* @__PURE__ */ React.createElement("th", null, "# Players"), /* @__PURE__ */ React.createElement("th", null, "# Caddies"), /* @__PURE__ */ React.createElement("th", null, "R")), data.map((round) => {
    return /* @__PURE__ */ React.createElement(Row, {
      key: round.id,
      round
    });
  }))));
}
var dashboard_default2 = Dashboard2;

// route:/Users/kevinxu-mac/Documents/Computer-Science/KevThatDevs/react/dialect-caddy/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Sidebar, null), /* @__PURE__ */ React.createElement("div", {
    className: "body-container",
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Welcome to Remix"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/tutorials/blog",
    rel: "noreferrer"
  }, "15m Quickstart Blog Tutorial")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/tutorials/jokes",
    rel: "noreferrer"
  }, "Deep Dive Jokes App Tutorial")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/docs",
    rel: "noreferrer"
  }, "Remix Docs")))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "3a71d16a", "entry": { "module": "/build/entry.client-FXTIPBV3.js", "imports": ["/build/_shared/chunk-ESAUA27I.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-ALF7VMQC.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-WZLMDTRL.js", "imports": ["/build/_shared/chunk-D4BMIVUC.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard/index": { "id": "routes/dashboard/index", "parentId": "routes/dashboard", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/dashboard/index-TB5A2LCU.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-B3GR7OAW.js", "imports": ["/build/_shared/chunk-D4BMIVUC.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-3A71D16A.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/dashboard/index": {
    id: "routes/dashboard/index",
    parentId: "routes/dashboard",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: dashboard_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
var app = (0, import_express.default)();
app.use((0, import_compression.default)());
app.disable("x-powered-by");
app.use("/build", import_express.default.static("public/build", { immutable: true, maxAge: "1y" }));
app.use(import_express.default.static("public/build", { maxAge: "1h" }));
app.use((0, import_morgan.default)("tiny"));
app.all("*", (0, import_express2.createRequestHandler)({
  build: server_build_exports,
  mode: "development"
}));
var port = process.env.PORT || 3e3;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2tldmlueHUtbWFjL0RvY3VtZW50cy9Db21wdXRlci1TY2llbmNlL0tldlRoYXREZXZzL3JlYWN0L2RpYWxlY3QtY2FkZHkvYXBwL3Jvb3QudHN4IiwgInJvdXRlOi9Vc2Vycy9rZXZpbnh1LW1hYy9Eb2N1bWVudHMvQ29tcHV0ZXItU2NpZW5jZS9LZXZUaGF0RGV2cy9yZWFjdC9kaWFsZWN0LWNhZGR5L2FwcC9yb3V0ZXMvZGFzaGJvYXJkLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9TaWRlYmFyLnRzeCIsICJyb3V0ZTovVXNlcnMva2V2aW54dS1tYWMvRG9jdW1lbnRzL0NvbXB1dGVyLVNjaWVuY2UvS2V2VGhhdERldnMvcmVhY3QvZGlhbGVjdC1jYWRkeS9hcHAvcm91dGVzL2Rhc2hib2FyZC9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL2tldmlueHUtbWFjL0RvY3VtZW50cy9Db21wdXRlci1TY2llbmNlL0tldlRoYXREZXZzL3JlYWN0L2RpYWxlY3QtY2FkZHkvYXBwL3JvdXRlcy9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9leHByZXNzXCI7XG5cbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XG5cbi8vIFJlbWl4IGZpbmdlcnByaW50cyBpdHMgYXNzZXRzIHNvIHdlIGNhbiBjYWNoZSBmb3JldmVyLlxuYXBwLnVzZShcbiAgXCIvYnVpbGRcIixcbiAgZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogXCIxeVwiIH0pXG4pO1xuXG4vLyBFdmVyeXRoaW5nIGVsc2UgKGxpa2UgZmF2aWNvbi5pY28pIGlzIGNhY2hlZCBmb3IgYW4gaG91ci4gWW91IG1heSB3YW50IHRvIGJlXG4vLyBtb3JlIGFnZ3Jlc3NpdmUgd2l0aCB0aGlzIGNhY2hpbmcuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgbWF4QWdlOiBcIjFoXCIgfSkpO1xuXG5hcHAudXNlKG1vcmdhbihcInRpbnlcIikpO1xuXG5hcHAuYWxsKFxuICBcIipcIixcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbiAgfSlcbik7XG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgRXhwcmVzcyBzZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2tldmlueHUtbWFjL0RvY3VtZW50cy9Db21wdXRlci1TY2llbmNlL0tldlRoYXREZXZzL3JlYWN0L2RpYWxlY3QtY2FkZHkvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2tldmlueHUtbWFjL0RvY3VtZW50cy9Db21wdXRlci1TY2llbmNlL0tldlRoYXREZXZzL3JlYWN0L2RpYWxlY3QtY2FkZHkvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9rZXZpbnh1LW1hYy9Eb2N1bWVudHMvQ29tcHV0ZXItU2NpZW5jZS9LZXZUaGF0RGV2cy9yZWFjdC9kaWFsZWN0LWNhZGR5L2FwcC9yb3V0ZXMvZGFzaGJvYXJkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMva2V2aW54dS1tYWMvRG9jdW1lbnRzL0NvbXB1dGVyLVNjaWVuY2UvS2V2VGhhdERldnMvcmVhY3QvZGlhbGVjdC1jYWRkeS9hcHAvcm91dGVzL2Rhc2hib2FyZC9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2tldmlueHUtbWFjL0RvY3VtZW50cy9Db21wdXRlci1TY2llbmNlL0tldlRoYXREZXZzL3JlYWN0L2RpYWxlY3QtY2FkZHkvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2Rhc2hib2FyZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZGFzaGJvYXJkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImRhc2hib2FyZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvZGFzaGJvYXJkL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kYXNoYm9hcmQvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9kYXNoYm9hcmRcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG5cdExpbmtzLFxuXHRMaXZlUmVsb2FkLFxuXHRNZXRhLFxuXHRPdXRsZXQsXG5cdFNjcmlwdHMsXG5cdFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCBnbG9iYWxTdHlsZXNVcmwgZnJvbSBcIn4vc3R5bGVzL2dsb2JhbC5jc3NcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcblx0cmV0dXJuIHsgdGl0bGU6IFwiRGlhbGVjdCBDYWRkeVNoYWNrIFN1YnNpZGlhcnlcIiB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGxpbmtzID0gKCkgPT4gW1xuXHR7XG5cdFx0cmVsOiBcInN0eWxlc2hlZXRcIixcblx0XHRocmVmOiBnbG9iYWxTdHlsZXNVcmwsXG5cdH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG5cdHJldHVybiAoXG5cdFx0PERvY3VtZW50PlxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PE91dGxldCAvPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0PC9Eb2N1bWVudD5cblx0KTtcbn1cblxudHlwZSBEb2N1bWVudFR5cGUgPSB7XG5cdGNoaWxkcmVuOiBhbnk7XG5cdC8vICAgdGl0bGU6IHN0cmluZztcbn07XG5cbmNvbnN0IERvY3VtZW50ID0gKHsgY2hpbGRyZW4gfTogRG9jdW1lbnRUeXBlKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGh0bWwgbGFuZz1cImVuXCI+XG5cdFx0XHQ8aGVhZD5cblx0XHRcdFx0PG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cblx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuXHRcdFx0XHQ8TWV0YSAvPlxuXHRcdFx0XHQ8TGlua3MgLz5cblx0XHRcdFx0ey8qIDx0aXRsZT57dGl0bGUgPyB0aXRsZSA6ICdNeSBDdXN0b20gRGVmYXVsdCBUaXRsZSd9PC90aXRsZT4gKi99XG5cdFx0XHQ8L2hlYWQ+XG5cdFx0XHQ8Ym9keT5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHR7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cblx0XHRcdFx0PFNjcmlwdHMgLz5cblx0XHRcdFx0PFNjcm9sbFJlc3RvcmF0aW9uIC8+XG5cdFx0XHRcdDxMaXZlUmVsb2FkIC8+XG5cdFx0XHQ8L2JvZHk+XG5cdFx0PC9odG1sPlxuXHQpO1xufTtcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfTogYW55KSA9PiB7XG5cdHJldHVybiA8PntjaGlsZHJlbn08Lz47XG59O1xuIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvU2lkZWJhclwiO1xuaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG5cdGxldCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuXHRsZXQgcGxheWVycyA9IGZvcm0uZ2V0KFwicGxheWVyc1wiKTtcblx0aWYgKHR5cGVvZiBwbGF5ZXJzICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwicGxheWVycyBpcyBub3QgYSBzdHJpbmdcIik7XG5cdH1cblxuXHRjb25zdCBwbGF5ZXJzQXJyID0gcGxheWVycy5zcGxpdChcIixcIik7XG5cdGNvbnNvbGUubG9nKHBsYXllcnNBcnIpO1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xufTtcblxuZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8U2lkZWJhciAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib2R5LWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8T3V0bGV0IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xuIiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gU2lkZWJhcigpIHtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlPHN0cmluZz4oJ2hvbWUnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci13cmFwcGVyXCI+XG4gICAgICAgIFRoaXMgaXMgYSBzaWRlYmFyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAnbWVudS1pdGVtICcgKyAoYWN0aXZlID09ICdob21lJyA/ICdtZW51LWl0ZW0tYWN0aXZlJyA6ICcnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKCdob21lJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgSG9tZVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICdtZW51LWl0ZW0gJyArIChhY3RpdmUgPT0gJ2NhZGRpZXMnICYmICdtZW51LWl0ZW0tYWN0aXZlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSgnY2FkZGllcycpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENhZGRpZXNcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9eydtZW51LWl0ZW0gJyArIChhY3RpdmUgPT0gJ2hlbHAnICYmICdtZW51LWl0ZW0tYWN0aXZlJyl9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoJ2hlbHAnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBIZWxwXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBkYXNoYm9hcmRTdHlsZXMgZnJvbSBcIn4vc3R5bGVzL2Rhc2hib2FyZC9zdHlsZXMuY3NzXCI7XG5cbmV4cG9ydCBjb25zdCBsaW5rcyA9ICgpID0+IFtcblx0e1xuXHRcdHJlbDogXCJzdHlsZXNoZWV0XCIsXG5cdFx0aHJlZjogZGFzaGJvYXJkU3R5bGVzLFxuXHR9LFxuXTtcblxuY29uc3QgUm93ID0gKHsgcm91bmQgfTogYW55KSA9PiB7XG5cdGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZTxCb29sZWFuPihmYWxzZSk7XG5cblx0cmV0dXJuIChcblx0XHQ8dHI+XG5cdFx0XHQ8dGQ+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxuXHRcdFx0PC90ZD5cblx0XHRcdDx0ZD57cm91bmQuZGF0ZX08L3RkPlxuXHRcdFx0PHRkPntyb3VuZC5vd25lcn08L3RkPlxuXHRcdFx0PHRkPntyb3VuZC5wbGF5ZXJzfTwvdGQ+XG5cdFx0XHQ8dGQ+e3JvdW5kLmNhZGRpZXN9PC90ZD5cblx0XHRcdDx0ZFxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0c2V0QWN0aXZlKCFhY3RpdmUpO1xuXHRcdFx0XHR9fT5cblx0XHRcdFx0e2FjdGl2ZSA/IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEFjdGl2ZShmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImFjdGl2ZVwiLCBhY3RpdmUpO1xuXHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdENsb3NlXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8cD5EZWxldGU8L3A+XG5cdFx0XHRcdFx0XHRcdDxwPlZpZXc8L3A+XG5cdFx0XHRcdFx0XHRcdDxwPkVkaXQ8L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8YnV0dG9uPi4uLjwvYnV0dG9uPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC90ZD5cblx0XHQ8L3RyPlxuXHQpO1xufTtcblxuY29uc3QgQWRkUm91bmQgPSAoKSA9PiB7XG5cdGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cblx0Y29uc3QgW3BsYXllcnMsIHNldFBsYXllcnNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblx0Y29uc3QgW3BsYXllciwgc2V0UGxheWVyXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cblx0Y29uc3QgW2NhZGRpZXMsIHNldENhZGRpZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblx0Y29uc3QgW2NhZGR5LCBzZXRDYWRkeV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXHRjb25zdCBbbnVtQ2FkZGllcywgc2V0TnVtQ2FkZGllc10gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuXG5cdHJldHVybiAoXG5cdFx0PGZvcm0gbWV0aG9kPVwicG9zdFwiIGFjdGlvbj1cIi9kYXNoYm9hcmRcIj5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwiZGF0ZVwiPkRhdGU8L2xhYmVsPlxuXHRcdFx0PGlucHV0XG5cdFx0XHRcdHR5cGU9XCJkYXRldGltZS1sb2NhbFwiXG5cdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdHNldERhdGUoZS50YXJnZXQudmFsdWUpO1xuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblxuXHRcdFx0PGJyIC8+XG5cdFx0XHQ8YnIgLz5cblxuXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJwbGF5ZXJcIj5TZWFyY2ggUGxheWVycyA8L2xhYmVsPlxuXHRcdFx0PGlucHV0XG5cdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0bmFtZT1cIkFkZCBQbGF5ZXJzXCJcblx0XHRcdFx0dmFsdWU9e3BsYXllcn1cblx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdHNldFBsYXllcihldmVudC50YXJnZXQudmFsdWUpO1xuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0c2V0UGxheWVycyhbLi4ucGxheWVycywgcGxheWVyXSk7XG5cdFx0XHRcdFx0c2V0UGxheWVyKFwiXCIpO1xuXHRcdFx0XHR9fT5cblx0XHRcdFx0QWRkXG5cdFx0XHQ8L2J1dHRvbj5cblxuXHRcdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cblx0XHRcdFx0PGgzPkN1cnJlbnRseSBBZGRlZCBQbGF5ZXJzOiA8L2gzPlxuXG5cdFx0XHRcdHtwbGF5ZXJzLm1hcCgocGxheWVyKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxkaXYga2V5PXtwbGF5ZXJ9IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuXHRcdFx0XHRcdFx0XHQ8cD4oe3BsYXllcn0pPC9wPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRcdHNldFBsYXllcnMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBsYXllcnMuZmlsdGVyKChjdXJyUGxheWVyKSA9PiBjdXJyUGxheWVyICE9PSBwbGF5ZXIpXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFhcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8YnIgLz5cblx0XHRcdDxiciAvPlxuXG5cdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImNhZGR5XCI+U2VhcmNoIENhZGRpZXMgPC9sYWJlbD5cblx0XHRcdDxpbnB1dFxuXHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdG5hbWU9XCJBZGQgQ2FkZGllc1wiXG5cdFx0XHRcdHZhbHVlPXtjYWRkeX1cblx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdHNldENhZGR5KGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cdFx0XHRcdH19XG5cdFx0XHQvPlxuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRpZiAoY2FkZGllcy5sZW5ndGggKyAxIDw9IG51bUNhZGRpZXMpIHtcblx0XHRcdFx0XHRcdHNldENhZGRpZXMoWy4uLmNhZGRpZXMsIGNhZGR5XSk7XG5cdFx0XHRcdFx0XHRzZXRDYWRkeShcIlwiKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH19PlxuXHRcdFx0XHRBZGRcblx0XHRcdDwvYnV0dG9uPlxuXG5cdFx0XHQ8YnIgLz5cblx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG5cdFx0XHRcdDxoMz5Ib3cgbWFueSBjYWRkaWVzPzwvaDM+XG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0c2V0TnVtQ2FkZGllcyhNYXRoLm1heChudW1DYWRkaWVzIC0gMSwgY2FkZGllcy5sZW5ndGgpKTtcblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHQtXG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8cD57bnVtQ2FkZGllc308L3A+XG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0c2V0TnVtQ2FkZGllcyhudW1DYWRkaWVzICsgMSk7XG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0K1xuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuXHRcdFx0XHQ8aDM+Q3VycmVudGx5IEFkZGVkIENhZGRpZXM6IDwvaDM+XG5cblx0XHRcdFx0e2NhZGRpZXMubWFwKChjYWRkeSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGtleT17Y2FkZHl9IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuXHRcdFx0XHRcdFx0XHQ8cD4oe2NhZGR5fSk8L3A+XG5cdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0Q2FkZGllcyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FkZGllcy5maWx0ZXIoKGN1cnJDYWRkeSkgPT4gY3VyckNhZGR5ICE9PSBjYWRkeSlcblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0WFxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxiciAvPlxuXHRcdFx0PGJyIC8+XG5cblx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImRhdGVcIiB2YWx1ZT17ZGF0ZX0gLz5cblx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInBsYXllcnNcIiB2YWx1ZT17cGxheWVyc30gLz5cblx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImNhZGRpZXNcIiB2YWx1ZT17Y2FkZGllc30gLz5cblx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmUgUm91bmQ8L2J1dHRvbj5cblx0XHQ8L2Zvcm0+XG5cdCk7XG59O1xuXG5mdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG5cdGNvbnN0IFttb2RhbEFjdGl2ZSwgc2V0TW9kYWxBY3RpdmVdID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG5cblx0Y29uc3QgZGF0YSA9IFtcblx0XHR7XG5cdFx0XHRpZDogMSxcblx0XHRcdGRhdGU6IFwiMy8xNyBAIDEyOjUxIFBNXCIsXG5cdFx0XHRvd25lcjogXCJLdXJ0aXNQbGF5ZXIxXCIsXG5cdFx0XHRwbGF5ZXJzOiAyLFxuXHRcdFx0Y2FkZGllczogMSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGlkOiAyLFxuXHRcdFx0ZGF0ZTogXCIzLzE4IEAgMTI6NTEgUE1cIixcblx0XHRcdG93bmVyOiBcIkt1cnRpc1BsYXllcjJcIixcblx0XHRcdHBsYXllcnM6IDUsXG5cdFx0XHRjYWRkaWVzOiAyLFxuXHRcdH0sXG5cdF07XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPlxuXHRcdFx0XHQ8aDE+SG9tZTwvaDE+XG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRNb2RhbEFjdGl2ZSghbW9kYWxBY3RpdmUpO1xuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdHttb2RhbEFjdGl2ZSA/IFwiQ2xvc2UgUm91bmRcIiA6IFwiQWRkIFJvdW5kXCJ9XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdHttb2RhbEFjdGl2ZSA/IChcblx0XHRcdFx0XHQ8QWRkUm91bmQgLz5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8dGFibGU+XG5cdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdDx0aD5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cblx0XHRcdFx0XHRcdFx0PC90aD5cblx0XHRcdFx0XHRcdFx0PHRoPkRhdGU8L3RoPlxuXHRcdFx0XHRcdFx0XHQ8dGg+T3duZXI8L3RoPlxuXHRcdFx0XHRcdFx0XHQ8dGg+IyBQbGF5ZXJzPC90aD5cblx0XHRcdFx0XHRcdFx0PHRoPiMgQ2FkZGllczwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0aD5SPC90aD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHR7ZGF0YS5tYXAoKHJvdW5kKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiA8Um93IGtleT17cm91bmQuaWR9IHJvdW5kPXtyb3VuZH0gLz47XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiIsICJpbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSBcIn4vY29tcG9uZW50cy9TaWRlYmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8U2lkZWJhciAvPlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzc05hbWU9XCJib2R5LWNvbnRhaW5lclwiXG5cdFx0XHRcdHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwic3lzdGVtLXVpLCBzYW5zLXNlcmlmXCIsIGxpbmVIZWlnaHQ6IFwiMS40XCIgfX0+XG5cdFx0XHRcdDxoMT5XZWxjb21lIHRvIFJlbWl4PC9oMT5cblx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi90dXRvcmlhbHMvYmxvZ1wiXG5cdFx0XHRcdFx0XHRcdHJlbD1cIm5vcmVmZXJyZXJcIj5cblx0XHRcdFx0XHRcdFx0MTVtIFF1aWNrc3RhcnQgQmxvZyBUdXRvcmlhbFxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vcmVtaXgucnVuL3R1dG9yaWFscy9qb2tlc1wiXG5cdFx0XHRcdFx0XHRcdHJlbD1cIm5vcmVmZXJyZXJcIj5cblx0XHRcdFx0XHRcdFx0RGVlcCBEaXZlIEpva2VzIEFwcCBUdXRvcmlhbFxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vcmVtaXgucnVuL2RvY3NcIiByZWw9XCJub3JlZmVycmVyXCI+XG5cdFx0XHRcdFx0XHRcdFJlbWl4IERvY3Ncblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonM2E3MWQxNmEnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LUZYVElQQlYzLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FU0FVQTI3SS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVAyRlRHUE9YLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1BTEY3Vk1RQy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Rhc2hib2FyZCc6eydpZCc6J3JvdXRlcy9kYXNoYm9hcmQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZGFzaGJvYXJkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Rhc2hib2FyZC1XWkxNRFRSTC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRDRCTUlWVUMuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGFzaGJvYXJkL2luZGV4Jzp7J2lkJzoncm91dGVzL2Rhc2hib2FyZC9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL2Rhc2hib2FyZCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9kYXNoYm9hcmQvaW5kZXgtVEI1QTJMQ1UuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1CM0dSN09BVy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRDRCTUlWVUMuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC0zQTcxRDE2QS5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUdqQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksZ0JBQWdCLFFBQVE7QUFJNUIsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyx3QkFBd0I7QUFBQSxNQUNyRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRzFDLEFBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsVUFBVTtBQUFBLE1BQ3ZDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG9CQUFvQjtBQUFBLE1BQ2pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUN0T2xDO0FBQUEscUJBQW9CO0FBQ3BCLHlCQUF3QjtBQUN4QixvQkFBbUI7QUFDbkIsc0JBQXFDOzs7QUNIckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBK0I7QUFDL0IsbUJBQTRCO0FBR2IsdUJBQ2IsU0FDQSxvQkFDQSxpQkFDQSxjQUNBO0FBQ0EsUUFBTSxTQUFTLGtDQUNiLG9DQUFDLDBCQUFEO0FBQUEsSUFBYSxTQUFTO0FBQUEsSUFBYyxLQUFLLFFBQVE7QUFBQTtBQUduRCxrQkFBZ0IsSUFBSSxnQkFBZ0I7QUFFcEMsU0FBTyxJQUFJLFNBQVMsb0JBQW9CLFFBQVE7QUFBQSxJQUM5QyxRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUE7QUFBQTs7O0FDbEJiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBT087Ozs7OztBQUtBLElBQU0sT0FBcUIsTUFBTTtBQUN2QyxTQUFPLEVBQUUsT0FBTztBQUFBO0FBR1YsSUFBTSxRQUFRLE1BQU07QUFBQSxFQUMxQjtBQUFBLElBQ0MsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBO0FBQUE7QUFJTyxlQUFlO0FBQzdCLFNBQ0Msb0NBQUMsVUFBRCxNQUNDLG9DQUFDLFFBQUQsTUFDQyxvQ0FBQyxzQkFBRDtBQUFBO0FBV0osSUFBTSxXQUFXLENBQUMsRUFBRSxlQUE2QjtBQUNoRCxTQUNDLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLE1BQUs7QUFBQSxLQUNWLG9DQUFDLFFBQUQsTUFDQyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxTQUFRO0FBQUEsTUFDZCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxNQUFLO0FBQUEsSUFBVyxTQUFRO0FBQUEsTUFDOUIsb0NBQUMsb0JBQUQsT0FDQSxvQ0FBQyxxQkFBRCxRQUdELG9DQUFDLFFBQUQsTUFDRSxVQUMwQyxvQ0FBQywwQkFBRCxPQUMzQyxvQ0FBQyx1QkFBRCxPQUNBLG9DQUFDLGlDQUFELE9BQ0Esb0NBQUMsMEJBQUQ7QUFBQTtBQU1KLElBQU0sU0FBUyxDQUFDLEVBQUUsZUFBb0I7QUFDckMsU0FBTywwREFBRztBQUFBOzs7QUM1RFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQXVCOzs7QUNBdkI7QUFBQSxtQkFBeUI7QUFFbEIsbUJBQW1CO0FBQ3hCLFFBQU0sQ0FBQyxRQUFRLGFBQWEsMkJBQWlCO0FBRTdDLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQWtCLHFCQUUvQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUNFLGVBQWdCLFdBQVUsU0FBUyxxQkFBcUI7QUFBQSxJQUUxRCxTQUFTLE1BQU0sVUFBVTtBQUFBLEtBQzFCLFNBR0Qsb0NBQUMsT0FBRDtBQUFBLElBQ0UsV0FDRSxlQUFnQixXQUFVLGFBQWE7QUFBQSxJQUV6QyxTQUFTLE1BQU0sVUFBVTtBQUFBLEtBQzFCLFlBR0Qsb0NBQUMsT0FBRDtBQUFBLElBQ0UsV0FBVyxlQUFnQixXQUFVLFVBQVU7QUFBQSxJQUMvQyxTQUFTLE1BQU0sVUFBVTtBQUFBLEtBQzFCO0FBQUE7OztBRHpCSixJQUFJLFNBQXlCLE9BQU8sRUFBRSxjQUFjO0FBQzFELE1BQUksT0FBTyxNQUFNLFFBQVE7QUFDekIsTUFBSSxVQUFVLEtBQUssSUFBSTtBQUN2QixNQUFJLE9BQU8sWUFBWSxVQUFVO0FBQ2hDLFVBQU0sSUFBSSxNQUFNO0FBQUE7QUFHakIsUUFBTSxhQUFhLFFBQVEsTUFBTTtBQUNqQyxVQUFRLElBQUk7QUFDWixTQUFPLFFBQVEsUUFBUTtBQUFBO0FBR3hCLHFCQUFxQjtBQUNwQixTQUNDLDBEQUNDLG9DQUFDLFNBQUQsT0FDQSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxzQkFBRDtBQUFBO0FBTUosSUFBTyxvQkFBUTs7O0FFM0JmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUF5Qjs7Ozs7O0FBSWxCLElBQU0sU0FBUSxNQUFNO0FBQUEsRUFDMUI7QUFBQSxJQUNDLEtBQUs7QUFBQSxJQUNMLE1BQU07QUFBQTtBQUFBO0FBSVIsSUFBTSxNQUFNLENBQUMsRUFBRSxZQUFpQjtBQUMvQixRQUFNLENBQUMsUUFBUSxhQUFhLDRCQUFrQjtBQUU5QyxTQUNDLG9DQUFDLE1BQUQsTUFDQyxvQ0FBQyxNQUFELE1BQ0Msb0NBQUMsU0FBRDtBQUFBLElBQU8sTUFBSztBQUFBLE9BRWIsb0NBQUMsTUFBRCxNQUFLLE1BQU0sT0FDWCxvQ0FBQyxNQUFELE1BQUssTUFBTSxRQUNYLG9DQUFDLE1BQUQsTUFBSyxNQUFNLFVBQ1gsb0NBQUMsTUFBRCxNQUFLLE1BQU0sVUFDWCxvQ0FBQyxNQUFEO0FBQUEsSUFDQyxTQUFTLE1BQU07QUFDZCxnQkFBVSxDQUFDO0FBQUE7QUFBQSxLQUVYLFNBQ0Esb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsVUFBRDtBQUFBLElBQ0MsU0FBUyxNQUFNO0FBQ2QsZ0JBQVU7QUFDVixjQUFRLElBQUksVUFBVTtBQUFBO0FBQUEsS0FDcEIsVUFHSixvQ0FBQyxLQUFELE1BQUcsV0FDSCxvQ0FBQyxLQUFELE1BQUcsU0FDSCxvQ0FBQyxLQUFELE1BQUcsWUFJTCxvQ0FBQyxVQUFELE1BQVE7QUFBQTtBQU9iLElBQU0sV0FBVyxNQUFNO0FBQ3RCLFFBQU0sQ0FBQyxNQUFNLFdBQVcsNEJBQWlCO0FBRXpDLFFBQU0sQ0FBQyxTQUFTLGNBQWMsNEJBQW1CO0FBQ2pELFFBQU0sQ0FBQyxRQUFRLGFBQWEsNEJBQWlCO0FBRTdDLFFBQU0sQ0FBQyxTQUFTLGNBQWMsNEJBQW1CO0FBQ2pELFFBQU0sQ0FBQyxPQUFPLFlBQVksNEJBQWlCO0FBQzNDLFFBQU0sQ0FBQyxZQUFZLGlCQUFpQiw0QkFBaUI7QUFFckQsU0FDQyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxRQUFPO0FBQUEsSUFBTyxRQUFPO0FBQUEsS0FDMUIsb0NBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLEtBQU8sU0FDdEIsb0NBQUMsU0FBRDtBQUFBLElBQ0MsTUFBSztBQUFBLElBQ0wsVUFBVSxDQUFDLE1BQU07QUFDaEIsY0FBUSxFQUFFLE9BQU87QUFBQTtBQUFBLE1BSW5CLG9DQUFDLE1BQUQsT0FDQSxvQ0FBQyxNQUFELE9BRUEsb0NBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLEtBQVMsb0JBQ3hCLG9DQUFDLFNBQUQ7QUFBQSxJQUNDLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLE9BQU87QUFBQSxJQUNQLFVBQVUsQ0FBQyxVQUFVO0FBQ3BCLGdCQUFVLE1BQU0sT0FBTztBQUFBO0FBQUEsTUFHekIsb0NBQUMsVUFBRDtBQUFBLElBQ0MsU0FBUyxDQUFDLE1BQU07QUFDZixRQUFFO0FBQ0YsaUJBQVcsQ0FBQyxHQUFHLFNBQVM7QUFDeEIsZ0JBQVU7QUFBQTtBQUFBLEtBQ1IsUUFJSixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxPQUFPLEVBQUUsU0FBUztBQUFBLEtBQ3RCLG9DQUFDLE1BQUQsTUFBSSw4QkFFSCxRQUFRLElBQUksQ0FBQyxZQUFXO0FBQ3hCLFdBQ0Msb0NBQUMsT0FBRDtBQUFBLE1BQUssS0FBSztBQUFBLE1BQVEsT0FBTyxFQUFFLFNBQVM7QUFBQSxPQUNuQyxvQ0FBQyxLQUFELE1BQUcsS0FBRSxTQUFPLE1BQ1osb0NBQUMsVUFBRDtBQUFBLE1BQ0MsU0FBUyxDQUFDLE1BQU07QUFDZixVQUFFO0FBQ0YsbUJBQ0MsUUFBUSxPQUFPLENBQUMsZUFBZSxlQUFlO0FBQUE7QUFBQSxPQUU3QztBQUFBLE9BUVIsb0NBQUMsTUFBRCxPQUNBLG9DQUFDLE1BQUQsT0FFQSxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsS0FBUSxvQkFDdkIsb0NBQUMsU0FBRDtBQUFBLElBQ0MsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsVUFBVSxDQUFDLFVBQVU7QUFDcEIsZUFBUyxNQUFNLE9BQU87QUFBQTtBQUFBLE1BR3hCLG9DQUFDLFVBQUQ7QUFBQSxJQUNDLFNBQVMsQ0FBQyxNQUFNO0FBQ2YsUUFBRTtBQUNGLFVBQUksUUFBUSxTQUFTLEtBQUssWUFBWTtBQUNyQyxtQkFBVyxDQUFDLEdBQUcsU0FBUztBQUN4QixpQkFBUztBQUFBO0FBQUE7QUFBQSxLQUVSLFFBSUosb0NBQUMsTUFBRCxPQUNBLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU8sRUFBRSxTQUFTO0FBQUEsS0FDdEIsb0NBQUMsTUFBRCxNQUFJLHNCQUNKLG9DQUFDLFVBQUQ7QUFBQSxJQUNDLFNBQVMsQ0FBQyxNQUFNO0FBQ2YsUUFBRTtBQUNGLG9CQUFjLEtBQUssSUFBSSxhQUFhLEdBQUcsUUFBUTtBQUFBO0FBQUEsS0FDN0MsTUFHSixvQ0FBQyxLQUFELE1BQUksYUFDSixvQ0FBQyxVQUFEO0FBQUEsSUFDQyxTQUFTLENBQUMsTUFBTTtBQUNmLFFBQUU7QUFDRixvQkFBYyxhQUFhO0FBQUE7QUFBQSxLQUN6QixPQUtMLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU8sRUFBRSxTQUFTO0FBQUEsS0FDdEIsb0NBQUMsTUFBRCxNQUFJLDhCQUVILFFBQVEsSUFBSSxDQUFDLFdBQVU7QUFDdkIsV0FDQyxvQ0FBQyxPQUFEO0FBQUEsTUFBSyxLQUFLO0FBQUEsTUFBTyxPQUFPLEVBQUUsU0FBUztBQUFBLE9BQ2xDLG9DQUFDLEtBQUQsTUFBRyxLQUFFLFFBQU0sTUFDWCxvQ0FBQyxVQUFEO0FBQUEsTUFDQyxTQUFTLENBQUMsTUFBTTtBQUNmLFVBQUU7QUFDRixtQkFDQyxRQUFRLE9BQU8sQ0FBQyxjQUFjLGNBQWM7QUFBQTtBQUFBLE9BRTNDO0FBQUEsT0FRUixvQ0FBQyxNQUFELE9BQ0Esb0NBQUMsTUFBRCxPQUVBLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLE1BQUs7QUFBQSxJQUFTLE1BQUs7QUFBQSxJQUFPLE9BQU87QUFBQSxNQUN4QyxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxNQUFLO0FBQUEsSUFBUyxNQUFLO0FBQUEsSUFBVSxPQUFPO0FBQUEsTUFDM0Msb0NBQUMsU0FBRDtBQUFBLElBQU8sTUFBSztBQUFBLElBQVMsTUFBSztBQUFBLElBQVUsT0FBTztBQUFBLE1BQzNDLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE1BQUs7QUFBQSxLQUFTO0FBQUE7QUFLekIsc0JBQXFCO0FBQ3BCLFFBQU0sQ0FBQyxhQUFhLGtCQUFrQiw0QkFBa0I7QUFFeEQsUUFBTSxPQUFPO0FBQUEsSUFDWjtBQUFBLE1BQ0MsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBO0FBQUEsSUFFVjtBQUFBLE1BQ0MsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBO0FBQUE7QUFJWCxTQUNDLDBEQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE1BQUQsTUFBSSxTQUNKLG9DQUFDLFVBQUQ7QUFBQSxJQUNDLFNBQVMsTUFBTTtBQUNkLHFCQUFlLENBQUM7QUFBQTtBQUFBLEtBRWhCLGNBQWMsZ0JBQWdCLGVBSWpDLG9DQUFDLE9BQUQsTUFDRSxjQUNBLG9DQUFDLFVBQUQsUUFFQSxvQ0FBQyxTQUFELE1BQ0Msb0NBQUMsTUFBRCxNQUNDLG9DQUFDLE1BQUQsTUFDQyxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxNQUFLO0FBQUEsT0FFYixvQ0FBQyxNQUFELE1BQUksU0FDSixvQ0FBQyxNQUFELE1BQUksVUFDSixvQ0FBQyxNQUFELE1BQUksY0FDSixvQ0FBQyxNQUFELE1BQUksY0FDSixvQ0FBQyxNQUFELE1BQUksT0FFSixLQUFLLElBQUksQ0FBQyxVQUFVO0FBQ3BCLFdBQU8sb0NBQUMsS0FBRDtBQUFBLE1BQUssS0FBSyxNQUFNO0FBQUEsTUFBSTtBQUFBO0FBQUE7QUFBQTtBQVNsQyxJQUFPLHFCQUFROzs7QUNwUGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlLGlCQUFpQjtBQUMvQixTQUNDLDBEQUNDLG9DQUFDLFNBQUQsT0FDQSxvQ0FBQyxPQUFEO0FBQUEsSUFDQyxXQUFVO0FBQUEsSUFDVixPQUFPLEVBQUUsWUFBWSx5QkFBeUIsWUFBWTtBQUFBLEtBQzFELG9DQUFDLE1BQUQsTUFBSSxxQkFDSixvQ0FBQyxNQUFELE1BQ0Msb0NBQUMsTUFBRCxNQUNDLG9DQUFDLEtBQUQ7QUFBQSxJQUNDLFFBQU87QUFBQSxJQUNQLE1BQUs7QUFBQSxJQUNMLEtBQUk7QUFBQSxLQUFhLGtDQUluQixvQ0FBQyxNQUFELE1BQ0Msb0NBQUMsS0FBRDtBQUFBLElBQ0MsUUFBTztBQUFBLElBQ1AsTUFBSztBQUFBLElBQ0wsS0FBSTtBQUFBLEtBQWEsa0NBSW5CLG9DQUFDLE1BQUQsTUFDQyxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxRQUFPO0FBQUEsSUFBUyxNQUFLO0FBQUEsSUFBeUIsS0FBSTtBQUFBLEtBQWE7QUFBQTs7O0FDNUJ4RTtBQUFBLElBQU8sMEJBQVEsRUFBQyxXQUFVLFlBQVcsU0FBUSxFQUFDLFVBQVMsbUNBQWtDLFdBQVUsQ0FBQyxvQ0FBbUMsdUNBQXFDLFVBQVMsRUFBQyxRQUFPLEVBQUMsTUFBSyxRQUFPLFlBQVcsUUFBVSxRQUFPLElBQUcsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsMkJBQTBCLFdBQVUsUUFBVSxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLG9CQUFtQixFQUFDLE1BQUssb0JBQW1CLFlBQVcsUUFBTyxRQUFPLGFBQVksU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsdUNBQXNDLFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxNQUFLLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTywwQkFBeUIsRUFBQyxNQUFLLDBCQUF5QixZQUFXLG9CQUFtQixRQUFPLFFBQVUsU0FBUSxNQUFLLGlCQUFnQixRQUFVLFVBQVMsNkNBQTRDLFdBQVUsUUFBVSxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGdCQUFlLEVBQUMsTUFBSyxnQkFBZSxZQUFXLFFBQU8sUUFBTyxRQUFVLFNBQVEsTUFBSyxpQkFBZ0IsUUFBVSxVQUFTLG1DQUFrQyxXQUFVLENBQUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFdBQVEsT0FBTTs7O0FQTy94QyxJQUFNLFFBQVEsRUFBRSxRQUFRO0FBQ3hCLElBQU0sU0FBUztBQUFBLEVBQ3BCLFFBQVE7QUFBQSxJQUNOLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosb0JBQW9CO0FBQUEsSUFDaEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWiwwQkFBMEI7QUFBQSxJQUN0QixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGdCQUFnQjtBQUFBLElBQ1osSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUE7OztBRGhDZCxJQUFNLE1BQU07QUFFWixJQUFJLElBQUk7QUFHUixJQUFJLFFBQVE7QUFHWixJQUFJLElBQ0YsVUFDQSx1QkFBUSxPQUFPLGdCQUFnQixFQUFFLFdBQVcsTUFBTSxRQUFRO0FBSzVELElBQUksSUFBSSx1QkFBUSxPQUFPLGdCQUFnQixFQUFFLFFBQVE7QUFFakQsSUFBSSxJQUFJLDJCQUFPO0FBRWYsSUFBSSxJQUNGLEtBQ0EsMENBQXFCO0FBQUEsRUFDbkIsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUFBO0FBSVYsSUFBTSxPQUFPLFFBQVEsSUFBSSxRQUFRO0FBRWpDLElBQUksT0FBTyxNQUFNLE1BQU07QUFDckIsVUFBUSxJQUFJLG9DQUFvQztBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
