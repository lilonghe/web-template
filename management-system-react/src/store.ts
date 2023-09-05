import { RematchDispatch, RematchRootState, init } from '@rematch/core'
import loading, { ExtraModelsFromLoading } from '@rematch/loading'

import * as models from './models'

type FullModel = ExtraModelsFromLoading<models.RootModel>

const store = init<models.RootModel, FullModel>({
  models,
  plugins: [loading()]
})

export default store

export type Store = typeof store
export type Dispatch = RematchDispatch<models.RootModel>
export type RootState = RematchRootState<models.RootModel, FullModel>
