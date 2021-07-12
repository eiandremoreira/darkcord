import EventEmitter from 'events'
import RestAPI from './rest/RestAPI'
import WebSocket from './ws/WebSocket'
import { Events } from './constants/Events'
import Intents from './util/Intents'
import Collection from './collection/Collection'
import type User from './structures/User'
import type Guild from './structures/Guild'
import type BaseChannel from './structures/channels/BaseChannel'
import type Emoji from './structures/Emoji'
import type { ClientOptions, ClientOptions2 } from './types/Interfaces'
import type { IntentsType } from './types/Types'
import type Member from './structures/Member'

class Client extends EventEmitter {
    public rest: RestAPI;
    private socket: WebSocket;
    public token: string = '';
    private startedAt: number | null;
    public options: ClientOptions2;
    public users: Collection<string, User>;
    public guilds: Collection<string, Guild>;
    public emojis: Collection<string, Emoji>;
    public channels: Collection<string, BaseChannel>;
    public user: User | any;

    constructor (private _options?: ClientOptions) {
      super()

      this.users = new Collection()
      this.guilds = new Collection()
      this.emojis = new Collection()
      this.channels = new Collection()

      let intents = 0
      if (this._options?.intents) {
        for (const intent of this._options?.intents!) {
          if (typeof intent === 'string') {
            if (Intents[<IntentsType>intent]) {
              intents |= Intents[<IntentsType>intent]
            }
          } else {
            intents |= intent
          }
        }
      }

      this.options = {
        token: this._options?.token,
        apiVersion: this._options?.apiVersion ?? 9,
        intents: intents,
        shardCount: this._options?.shardCount ?? 0,
        cache: {
          guilds: this._options?.cache?.guilds ?? true,
          users: this._options?.cache?.users ?? true,
          roles: this._options?.cache?.roles ?? true,
          channels: this._options?.cache?.channels ?? true,
          presences: this._options?.cache?.presences ?? true,
          overwrites: this._options?.cache?.overwrites ?? true,
          emojis: this._options?.cache?.emojis ?? true
        }
      }

      this.rest = new RestAPI(this)
      this.socket = new WebSocket(this)
      this.token = this.options?.token ?? ''

      this.startedAt = null
    }

    async login (token: string = this.token): Promise<Client> {
      if (!token) throw new Error('Invalid token.')
      this.token = token = token.replace(/^(Bot|Bearer)/i, '')
      this.rest.token = token

      this.emit(Events.DEBUG, `Token: ${this.token}`)

      try {
        await this.socket.connect(this.options.shardCount || 0, { token: this.token })
        this.startedAt = Date.now()
        return this
      } catch (err) {
        throw new Error(err)
      }
    }

    get uptime (): number | null {
      return this.startedAt ? Date.now() - this.startedAt! : null
    }
}

export default Client
