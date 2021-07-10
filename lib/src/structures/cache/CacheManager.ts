import type Client from '../../Client'

class CacheManager {
  constructor (public client: Client) {}

  manage (type: string, key: string, value: object) {
    // @ts-ignore
    if (this.client.options.cache[type]) {
      // @ts-ignore
      this.client[type].set(key, value)
      return true
    } else {
      return false
    }
  }
}

export default CacheManager
