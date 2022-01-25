const contentfulManagement = require("contentful-management")

module.exports = function() {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: 'CFPAT-HI5uQTyKcR_xLtjJNpMcBCwdpjFqZewS5zKyhZ4bVWk',
  })

  return contentfulClient
    .getSpace("6443ushw9djh")
    .then(space => space.getEnvironment("master"))
}