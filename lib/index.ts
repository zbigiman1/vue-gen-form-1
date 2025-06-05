import { App } from 'vue'
import * as components from '../lib/components'

function install (app: App) {
  for (const key in components) {
    // @ts-ignore
    app.component(key, components[key])
  }
}

export default { install }

export * from '../lib/components'
export * from '../lib/composables'
export * from '../lib/types'
export * from '../lib/const'
export * from '../lib/utils'