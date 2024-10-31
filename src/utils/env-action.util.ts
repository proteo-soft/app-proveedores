import args from "./args.util";

(() => {
  if (args.env == "development" || args.env == "test") {
    require("./load-env.util");
  }

  if (args.env == "production" || args.env == "test") {
    require("module-alias/register");
  }
})();
