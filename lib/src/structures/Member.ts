import { ImageFormat } from '../types/Types'
import User from './User'

class Member {
  constructor (
        private _id: string,
        private _user: User,
        private _nickname: string,
        private _joinedDate: Date,
        private _boosterSince: Date,
        private _deaf: boolean = false,
        private _muted: boolean = false,
        private _avatar: string,
        private _guildId: string
  ) {
    return this
  }

  public get id (): string {
    return this._id
  }

  public get nickname (): string {
    return this._nickname
  }

  public get joinedDate (): Date {
    return this._joinedDate
  }

  public get boosterSince (): Date {
    return this._boosterSince
  }

  public get deaf (): boolean {
    return this._deaf
  }

  public get muted (): boolean {
    return this._muted
  }

  public get user (): User {
    return this._user
  }

  public get avatar (): string {
    return this._avatar
  }

  public avatarURL ({ format = 'webp', dynamic = false, size = '128' }: { format: ImageFormat, dynamic: boolean, size: '128' | '2048' }) {
    if (dynamic) format = this.avatar.startsWith('a_') ? 'gif' : format
    return `https://cdn.discordapp.com/guilds/${this._guildId}/users/${this.id}/avatars/${this.avatar}.${format}?${size}`
  }
}

export default Member
