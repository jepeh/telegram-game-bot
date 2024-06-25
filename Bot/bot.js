// 7088271658:AAH3Ubqux3nWO-QfQSWo0z5HnbN9k-yGvEc

import telegramBot from "node-telegram-bot-api"

const TOKEN = "7088271658:AAH3Ubqux3nWO-QfQSWo0z5HnbN9k-yGvEc"

const bot = new telegramBot(TOKEN, {polling: true})
const web = "https://jaspergame.netlify.app/"

bot.on("message", (msg) => {
console.log(msg.text)
    var options = {
        reply_markup: JSON.stringify({
            keyboard: [[{text: "Jasper the Spammer Game!", web_app:{url: web}}]]
        })
      };
    bot.sendMessage(msg.from.id, "Happy Clicking!!", options)

})