import type { DeclareModuleGenerator, Plugin } from '@cpn-console/hooks'
import { commonCall } from './functions.js'
import infos from './infos.js'

export const plugin: Plugin = {
  infos,
  subscribedHooks: process.env.DEBUG__HOOKS === 'true'
    ? {
        deleteCluster: { steps: { pre: commonCall } },
        deleteProject: { steps: { pre: commonCall } },
        deleteZone: { steps: { pre: commonCall } },
        getProjectSecrets: { steps: { pre: commonCall } },
        retrieveUserByEmail: { steps: { pre: commonCall } },
        syncRepository: { steps: { pre: commonCall } },
        upsertCluster: { steps: { pre: commonCall } },
        upsertProject: { steps: { pre: commonCall } },
        upsertZone: { steps: { pre: commonCall } },
      }
    : {},
}

declare module '@cpn-console/hooks' {
  interface Config extends DeclareModuleGenerator<typeof infos, 'global'> {}
}
