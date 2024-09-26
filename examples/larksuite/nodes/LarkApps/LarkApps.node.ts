import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkApps.properties'
import { methods } from './LarkApps.methods'

export class LarkApps implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Lark Apps',
    name: 'LarkApps',
    icon: 'file:larkapp.svg',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Lark Apps Management',
    defaults: {
      name: 'LarkApps',
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
