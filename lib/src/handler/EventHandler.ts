import Client from '../Client'
import { payload } from '../constants/PayLoads'
import Resolve from '../util/Resolve'
import { Events } from '../constants/Events'

class EventHandler {
  private resolve: Resolve;
  private readonly payload: any;
  constructor (private client: Client, payload: payload) {
    this.resolve = new Resolve(client)

    const { d: event_payload } = payload

    this.payload = event_payload
  }

  async message () {
    const message = await this.resolve.resolveMessage(this.payload)
    this.client.emit(Events.MESSAGE_CREATE, message)
  }

  ready () {
    this.client.emit(Events.READY)
  }

  reaction () {

  }

  reactionRemove () {

  }
}

export default EventHandler
