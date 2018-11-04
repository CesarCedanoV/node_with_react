const localtunnel = require('localtunnel');
const SUBDOMAIN = "aztrulemaily"
localtunnel(5000, { subdomain: SUBDOMAIN }, function(err, tunnel) {
  console.log(`LocalTunnel is running and your URL is: https://${SUBDOMAIN}.localtunnel.me`)
});