export const headers = {
  'Content-Type': 'application/json',
  Authorization: ''
}

export const HeartBeat = {
  op: 1,
  d: null
}

export const identify = {
  op: 2,
  d: {
    token: '',
    properties: {
      $os: process.platform,
      $device: 'DarkCord',
      $browser: 'DarkCord'
    },
    intents: 0
  }
}

export interface payload {
    op: number;
    s: number;
    t: string;
    d: any;
}
