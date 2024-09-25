import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkApps.properties'

export class LarkApps implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Lark Apps',
    name: 'LarkApps',
    icon: 'file:./icons/larkapp.svg',
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
        name: 'larksuiteOAuth2Api',
        required: true,
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
