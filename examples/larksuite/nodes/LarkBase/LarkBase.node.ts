import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkBase.properties'
import { methods } from './LarkBase.methods'

export class LarkBase implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Lark Base',
    name: 'LarkBase',
    icon: 'file:larkbase.svg',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Lark Base Management',
    defaults: {
      name: 'LarkBase',
    },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [
      {
        displayName: 'Tenant Token',
        name: 'larkSuiteTenantApi',
        required: false,
        displayOptions: {
          show: {
            authentication: ['accessToken'],
          },
        },
      },
      {
        displayName: 'OAuth2',
        name: 'larkSuiteOAuth2Api',
        required: false,
        displayOptions: {
          show: {
            authentication: ['oAuth2'],
          },
        },
      },
    ],
    requestDefaults: {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      baseURL: 'https://open.larksuite.com/open-apis',
    },
    properties: properties,
  }

  methods = methods
}
