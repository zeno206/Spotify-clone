const app = require("./src/app");
const connectdb = require("./src/db/db.connection");
const port = 8000;
connectdb();
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
