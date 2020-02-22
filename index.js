const TelegarmBot = require("node-telegram-bot-api");
const token ="your token api";
const CoinMarketCap = require("node-coinmarketcap");
const bot = new TelegarmBot(token,{polling:true});
let coinmarketcap = new CoinMarketCap();


   
    
bot.on("message",(msg)=>{

    coinmarketcap.multi(coins => {
     
        let btcPrice = coins.get("BTC").price_usd
        let ethPrice = coins.get("ETH").price_usd
        let eth ="eth";
        let btc = "btc";
        // type eth reviews
        if (msg.text.toString().toLowerCase().indexOf(eth)===0){
            bot.sendMessage(msg.chat.id,"ETH PRICE NOW :"+ ethPrice,{parse_mode:"Markdown"})
        }
        if (msg.text.toString().toLowerCase().indexOf(btc)===0){
            bot.sendMessage(msg.chat.id,"BTC PRICE NOW :"+ btcPrice,{parse_mode:"Markdown"})
        }
      });

})

