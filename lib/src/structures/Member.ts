import User from './User'

class Member {
  constructor (
        private _id: string,
        private _user: User,
        private _nickname: string,
        private _joinedDate: Date,
        private _boosterSince: Date,
        private _deaf: boolean = false,
        private _muted: boolean = false
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
}

export default Member
