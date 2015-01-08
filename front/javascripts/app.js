var templates = require("./templates");
document.addEventListener('DOMContentLoaded', function () {
    console.log("started");
    document.body.innerHTML = templates.body();
});
