const secrets = {
  dbUri: "mongodb+srv://wildercora218:F3deration1@haiku-dev-sko5m.azure.mongodb.net/test?retryWrites=true&w=majority"
};

const getSecret = key => secrets[key];

module.exports = getSecret;
