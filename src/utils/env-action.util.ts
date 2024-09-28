import args from "@utils/args.util";

if (args.env == "development") {
  require("@utils/load-env.util");
} else {
  require("module-alias/register");
}
