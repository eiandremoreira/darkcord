```js
const DarkCord = require('darkcord.js')

const client = DarkCord({
    intents: [INTENTS] // Ex. DarkCord.Intents.GUILD_MESSAGES
    token: 'Bot Token'
}) // => Client

client.on('message', (message) => {
    if (message.content === '!ping') {
        return message.channel.send('pong!')
    }
})

(async () => {
    await client.login() // => Promise<Client>
}
```