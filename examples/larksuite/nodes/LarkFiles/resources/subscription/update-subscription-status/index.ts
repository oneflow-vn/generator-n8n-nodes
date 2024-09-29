import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update Subscription Status'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Update Subscription Status',
  value: 'Update Subscription Status',
  action: 'Update subscription status',
  description:
    'Update subscription status based on subscription ID\r\n\r\nAPI reference documentation: [Update subscription status]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-subscription/patch)',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/drive/v1/files/{{$parameter["file_token"]}}/subscriptions/{{$parameter["subscription_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
