class _Logger {
  constructor() {
    this.prefix = "\x1b[35m[Sunrite]\x1b[0m";
  }

  // Function to log messages with the specified text color
  logWithColor(colorCode, message) {
    let formattedMessage =
      typeof message === "object"
        ? JSON.stringify(message, null, 2) // Pretty print objects and arrays
        : message.toString(); // Convert other types to string

    console.log(`${this.prefix}\x1b[${colorCode}m ${formattedMessage} \x1b[0m`);
  }

  // Method for logging error messages (red text)
  error(message) {
    this.logWithColor(31, message); // Red text for error
  }

  // Method for logging success messages (green text)
  success(message) {
    this.logWithColor(32, message); // Green text for success
  }

  // Method for logging warning messages (yellow text)
  warning(message) {
    this.logWithColor(33, message); // Yellow text for warning
  }

  // Method for logging info messages (blue text)
  info(message) {
    this.logWithColor(34, message); // Blue text for info
  }
}

const Logger = new _Logger();
window.logger = Logger;
