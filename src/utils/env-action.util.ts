import args from "./args.util";

(() => {
  if (args.env == "development") {
    require("./load-env.util");
  } else {
    require("module-alias/register");
  }
})();
