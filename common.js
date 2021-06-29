let NounProject = require("the-noun-project"),
  nounProject = new NounProject({
    key: "2ccd0a4480174cc5995d4f6662819bfc",
    secret: "5b89f8dba53b4dc6a6a4185107e2e95a",
  });

nounProject.getIconsByTerm("goat", { limit: 2 }, function (err, data) {
  if (!err) {
    console.log(data.icons);
  }
});
