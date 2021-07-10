import TextChannel from './channels/TextChannel'
import Client from '../Client'
import Guild from './Guild'
import User from './User'
import { MessageOptions } from '../types/Interfaces'
import Embed from './Embed'

class Message {
    private _embeds: Embed[] = [];
    constructor (
        private _client: Client,
        private _id: string,
        private _channel: TextChannel,
        private _guild: Guild,
        private _author: User,
        private _member: any | null,
        private _content: string,
        private _timestamp: Date,
        private _editedAt: Date,
        private _tts: boolean,
        private _mentionedEveryone: boolean,
        private _nonce: number | string,
        private _pinned: boolean,
        private _type: number
    ) {
      return this
    }

    public get client (): Client {
      return this._client
    }

    public get id (): string {
      return this._id
    }

    public get guild (): Guild {
      return this._guild
    }

    public get author (): User {
      return this._author
    }

    public get channel (): TextChannel {
      return this._channel
    }

    public set embeds (embeds: Embed[]) {
      this._embeds = embeds
    }

    public async edit (newContent: string | Embed | MessageOptions) {
      if (typeof newContent === 'string') {
        return this.client.rest.editMessage({ content: newContent }, this.channel.id, this.id)
      } else if (newContent instanceof Embed) {
        return this.client.rest.editMessage({ embeds: [newContent] }, this.channel.id, this.id)
      } else {
        return this.client.rest.editMessage(
          {
            content: newContent.content,
            embeds: newContent.embeds,
            tts: newContent.tts || false
          }, this.channel.id, this.id)
      }
    }
}

export default Message
