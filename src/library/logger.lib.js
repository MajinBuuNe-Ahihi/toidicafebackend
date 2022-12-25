var winston = require('winston');
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
};

var logger = new winston.createLogger({
  format: winston.format.combine(
        winston.format.splat(),
        // Định dạng time cho log
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // thêm màu sắc
        winston.format.colorize(),
        // thiết lập định dạng của log
        winston.format.printf(
            log => {
                // nếu log là error hiển thị stack trace còn không hiển thị message của log 
                if (log.stack) return `[${log.timestamp}] [${log.level}] ${log.stack}`;
                return `[${log.timestamp}] [${log.level}] ${log.message}`;
            },
        ),
    ),

    transports: [
        new winston.transports.File({
            filename: 'src/logs/all-logs.log',
        }),
        new winston.transports.Console()
    ],
    exitOnError: false
});

logger.stream = {
  write: function (message, encoding) {
    if ([400,404,403,500].includes(Number(message.split(" ")[8]))) {
      logger.error(message);
    } else {
      logger.info(message);
    }
  }
};

module.exports =  logger;