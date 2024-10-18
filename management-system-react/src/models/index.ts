import { Models } from '@rematch/core'
import { session } from './session'

export interface RootModel extends Models<RootModel> {
  session: typeof session
}

export { session }
