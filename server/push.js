const fs = require("fs");
const vapid = require("./vapid.json");
const webpush = require('web-push');

webpush.setVapidDetails(
    'mailto:juankg214@gmail.com',
    vapid.publicKey,
    vapid.privateKey
  );

const urlSafeBase64 = require("urlsafe-base64");

const suscripciones = require("./subs-db.json");

module.exports.getKey= () => {
    return urlSafeBase64.decode(vapid.publicKey);
} 


module.exports.addSubscription= (sus) => {
    suscripciones.push(sus);
    fs.writeFileSync(`${__dirname}/subs-db.json`,JSON.stringify(suscripciones));
    console.log(suscripciones);
} 

module.exports.sendPush = (post) =>{
    suscripciones.forEach((suscripcion,i) => {
        webpush.sendNotification(suscripcion,JSON.stringify(post));
    });
}