import "./utils/env-action.util";
import app from "./app";

const PORT = process.env.PORT;

app.listen(PORT, () => console.log("server running on port:", PORT));
