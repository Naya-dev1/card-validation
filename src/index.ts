
import express, { Application } from "express";
import cardRoutes from "./routes/cardRoutes";

const app: Application = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", cardRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
