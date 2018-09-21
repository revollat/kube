var nconf = require('nconf');

nconf.argv().env();


const DBHOST = process.env.DBHOST || "mongodb";

// Load nconf.overrides(options) on the top of the file before loading any other values

/*nconf.overrides({
    "mongoose": {
        "uri": "mongodb://root:mdp4root@" + DBHOST + "/apiDB"
    }
});*/

nconf.overrides({
    "mongoose": {
        "uri": "mongodb://" + DBHOST + "/apiDB"
    }
});

// Load nconf.defaults(options) at the bottom of your configuration file
/*nconf.defaults({
  "httpPort": "3000"
});*/

/*if (process.env.ENV_IN === 'docker') {
    nconf.file('docker', {
        file: process.cwd() + '/docker.config.json'
    });
}*/

nconf.file('defaults', {
    file: process.cwd() + '/config.json'
});

module.exports = nconf;
