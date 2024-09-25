import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /open-apis/authen/v1/refresh_access_token',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['API Access Token User ID'],
        operation: ['Refresh accesstoken'],
      },
    },
  },
  {
    displayName: 'Authorization',
    name: 'Authorization',
    default: 'Bearer {{app_access_token}}',
    type: 'string',
    routing: {
      request: {
        headers: {
          Authorization: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['API Access Token User ID'],
        operation: ['Refresh accesstoken'],
      },
    },
  },
  {
    displayName: 'Content Type',
    name: 'Content-Type',
    default: 'application/json; charset=utf-8',
    type: 'string',
    routing: {
      request: {
        headers: {
          'Content-Type': '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['API Access Token User ID'],
        operation: ['Refresh accesstoken'],
      },
    },
  },
  {
    displayName: 'Grant Type',
    name: 'grant_type',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          grant_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['API Access Token User ID'],
        operation: ['Refresh accesstoken'],
      },
    },
  },
  {
    displayName: 'Refresh Token',
    name: 'refresh_token',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          refresh_token: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['API Access Token User ID'],
        operation: ['Refresh accesstoken'],
      },
    },
  },
]
