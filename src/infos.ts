import type { ServiceInfos } from '@cpn-console/hooks'

const infos = {
  name: 'debug',
  // @ts-ignore retro compatibility
  to: process.env.DEBUG__URLS === 'true'
    ? (params) => {
        console.log(params)
      }
    : undefined,
  title: 'Debug',
  description: 'Plugin de debug',
  config: {
    global: [],
    project: [],
  },
} as const satisfies ServiceInfos

export default infos
