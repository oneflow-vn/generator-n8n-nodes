import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkSheets.properties'

export class LarkSheets implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Lark Sheets',
    name: 'LarkSheets',
    icon: 'file:larksheet.png',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Lark Sheets Management',
    defaults: {
      name: 'LarkSheets',
    },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [
      {
        name: 'larksuiteOAuth2Api',
        required: true,
        displayOptions: {
          show: {
            authentication: ['oauth2'],
          },
        },
      },
      {
        name: 'larksuiteTenantApi',
        required: true,
        displayOptions: {
          show: {
            authentication: ['accessToken'],
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
}
