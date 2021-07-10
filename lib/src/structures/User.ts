class User {
  constructor (
        private _id: string,
        private _username: string,
        private _discrimator: string,
        private _avatar: string,
        private _bot: boolean = false,
        private _system: boolean = false,
        private _mfa: boolean = false,
        private _locale: boolean = false,
        private _verified: boolean = false,
        private _flags: number = 0,
        private _premiumType: number = 0,
        private _publicFlags: number = 0
  ) {
    return this
  }

  public get id () {
    return this._id
  }

  public get username (): string {
    return this._username
  }

  public get discrimator (): string {
    return this._discrimator
  }

  public get tag (): string {
    return `${this.username}#${this.discrimator}`
  }

  public get bot (): boolean {
    return this._bot
  }

  public get verified (): boolean {
    return this._verified
  }

  public get mfa (): boolean {
    return this._mfa
  }

  public get premiumType (): number {
    return this._premiumType
  }

  public get flags (): number {
    return this._flags
  }

  public get publicFlags (): number {
    return this._publicFlags
  }
}

export default User
