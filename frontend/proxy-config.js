module.exports = [
  {
    context: ["/api"],
    target: "http://192.168.1.32:3000",
    secure: false,
    logLevel: "debug",
  },
];
