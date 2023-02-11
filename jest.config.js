const path = require("node:path")

module.exports = {
    runner: "jest-light-runner",
    setupFilesAfterEnv: [path.join(__dirname, "setup-after-env.js")],
}
