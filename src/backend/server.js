const express = require("express");
const cors = require("cors");
const { requestLogger } = require("./middleware/loggerMiddleware");

const authRoutes = require("./routes/auth");

const app = express();
app.use(cors());
app.use(express.json());

app.use(requestLogger);

app.use("/api/auth", authRoutes);

const { logger } = require("./middleware/loggerMiddleware");
app.use((err, req, res, next) => {
  logger.error("Error: %s", err.message, { stack: err.stack });
  res.status(500).json({ message: err.message });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
