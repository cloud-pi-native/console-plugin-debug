import type { StepCall } from '@cpn-console/hooks'

export const commonCall: StepCall<any> = async (payload) => {
  console.log(JSON.stringify(payload), null, 2)
  return {
    status: {
      result: 'OK',
    },
  }
}
