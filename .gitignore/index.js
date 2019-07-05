const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("En cours...");
    console.log("Le bot a bien ete connecte");
});

bot.login("NTk2Njg4MDI5MDA4MjY1MjE2.XR958Q.VTHV1xhdlZlcWWM53Tk0s-_4gkE");
