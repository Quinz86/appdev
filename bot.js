var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'week':
				bot.sendMessage({
					to: channelID,
					message: 'This is the start of a minute long test message from sept 7'
				});
	
				setTimeout(function(){
					bot.sendMessage({
						to: channelID,
						message: 'This is the result of a minute long test message from sept 7'
					});
					bot.sendMessage({
						to: channelID,
						message: '!week'
					});
				},60000);
			break;
			case 'ping':
				bot.sendMessage({
					to: channelID,
					message: "pong!"
				});
                
            break;
            // Just add any case commands if you want to..
         }
     }
});



//a week is 604,800,000 milliseconds