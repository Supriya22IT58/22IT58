const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  level: "info", 
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.errors({ stack: true }),
    format.splat(),
    format.json() 
  ),
  defaultMeta: { service: "affordmed-api" },
  transports: [
    new transports.Console(),
  ],
});

const requestLogger = (req, res, next) => {
  logger.info("HTTP %s %s", req.method, req.originalUrl, {
    stack: new Error().stack,
  });
  next();
};

module.exports = { logger, requestLogger };
