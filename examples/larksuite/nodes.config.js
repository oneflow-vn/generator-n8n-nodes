const path = require('path');

const credentials = [
	{
		name: 'larksuiteOAuth2Api',
		required: true,
		displayOptions: {
			show: {
				authentication: ['oauth2'],
			}
		}
	},
	{
		name: 'larksuiteTenantApi',
		required: true,
		displayOptions: {
			show: {
				authentication: ['accessToken'],
			}
		}
	}
];

module.exports = {
  packageName: 'n8n-nodes-larksuite',
  credentials: {
		larksuiteTenantApi: {
			name: 'larksuiteTenantApi',
			className: 'LarksuiteTenantApi',
			displayName: 'Larksuite Tenant API',
			documentationUrl: 'https://open.larksuite.com/document/server-docs/getting-started/api-access-token/g',
		},
		larksuiteOAuth2Api: {
			name: 'larksuiteOAuth2Api',
			className: 'LarksuiteOAuth2Api',
			displayName: 'Larksuite OAuth2 API',
			documentationUrl: 'https://open.larksuite.com/document/server-docs/getting-started/api-access-token/g',
		},
	},
  nodes: {
    larkAuth: {
      displayName: 'Lark Auth',
      name: 'LarkAuth',
      description: 'Lark Auth Management',
      openapi: path.resolve(__dirname, 'lark.yml'),
      tags: [new RegExp('^API Access Token.*')],
      icon: 'fa:lock',
      baseUrl: 'https://open.larksuite.com',
			credentials,
    },
    larkFiles: {
      displayName: 'Lark Files',
      name: 'LarkFiles',
      description: 'Lark Files Management',
      openapi: path.resolve(__dirname, 'lark.yml'),
      tags: [new RegExp('^Docs > File Management.*')],
      icon: './icons/larkdocs.svg',
      baseUrl: 'https://open.larksuite.com/open-apis',
			credentials,
    },
    larkSheets: {
      displayName: 'Lark Sheets',
      name: 'LarkSheets',
      description: 'Lark Sheets Management',
      openapi: path.resolve(__dirname, 'lark.yml'),
      tags: [new RegExp('^Docs > Sheets.*')],
      icon: './icons/larksheet.png',
      baseUrl: 'https://open.larksuite.com/open-apis',
			credentials,
    },
    larkBitable: {
      displayName: 'Lark Bitable',
      name: 'LarkBitable',
      description: 'Lark Bitable Management',
      openapi: path.resolve(__dirname, 'lark.yml'),
      tags: [new RegExp('^Docs > Bitable.*')],
      icon: './icons/larkbase.svg',
      baseUrl: 'https://open.larksuite.com/open-apis',
			credentials,
    },
    larkContacts: {
      displayName: 'Lark Contacts',
      name: 'LarkContacts',
      description: 'Lark Contacts Management',
      openapi: path.resolve(__dirname, 'lark.yml'),
      tags: [new RegExp('^Contacts.*')],
      icon: './icons/lark.png',
      baseUrl: 'https://open.larksuite.com/open-apis',
			credentials,
    },
    larkCalendar: {
      displayName: 'Lark Calendar',
      name: 'LarkCalendar',
      description: 'Lark Calendar Management',
      openapi: path.resolve(__dirname, 'lark.yml'),
      tags: [new RegExp('^Calendar.*')],
      icon: './icons/larkcalendar.svg',
      baseUrl: 'https://open.larksuite.com/open-apis',
			credentials,
    },
    larkMessenger: {
      displayName: 'Lark Messenger',
      name: 'LarkMessenger',
      description: 'Lark Messenger Management',
      openapi: path.resolve(__dirname, 'lark.yml'),
      tags: [new RegExp('^Messenger.*')],
      icon: './icons/larkmessage.svg',
      baseUrl: 'https://open.larksuite.com/open-apis',
			credentials,
    },
    larkAttendance: {
      displayName: 'Lark Attendance',
      name: 'LarkAttendance',
      description: 'Lark Attendance Management',
      openapi: path.resolve(__dirname, 'lark.yml'),
      tags: [new RegExp('^Attendance*')],
      icon: './icons/larkatentance.png',
      baseUrl: 'https://open.larksuite.com/open-apis',
			credentials,
    },
    larkApproval: {
      displayName: 'Lark Approval',
      name: 'LarkApproval',
      description: 'Lark Approval Management',
      openapi: path.resolve(__dirname, 'lark.yml'),
      tags: [new RegExp('^Approval.*')],
      icon: './icons/larkapproval.png',
      baseUrl: 'https://open.larksuite.com/open-apis',
			credentials,
    },
    larkApps: {
      displayName: 'Lark Apps',
      name: 'LarkApps',
      description: 'Lark Apps Management',
      openapi: path.resolve(__dirname, 'lark.yml'),
      tags: [new RegExp('^App Information.*')],
      icon: './icons/larkapp.svg',
      baseUrl: 'https://open.larksuite.com/open-apis',
			credentials,
    },
    larkAI: {
      displayName: 'Lark AI',
      name: 'LarkAI',
      description: 'Lark AI Management',
      openapi: path.resolve(__dirname, 'lark.yml'),
      tags: [new RegExp('^AI.*')],
      icon: './icons/larkai.png',
      baseUrl: 'https://open.larksuite.com/open-apis',
			credentials,
    },
    larkCompany: {
      displayName: 'Lark Company',
      name: 'LarkCompany',
      description: 'Lark Company Management',
      openapi: path.resolve(__dirname, 'lark.yml'),
      tags: [new RegExp('^Company Information.*')],
      icon: './icons/larkcompany.png',
      baseUrl: 'https://open.larksuite.com/open-apis',
			credentials,
    },
    larkEmail: {
      displayName: 'Lark Email',
      name: 'LarkEmail',
      description: 'Lark Email Management',
      openapi: path.resolve(__dirname, 'lark.yml'),
      tags: [new RegExp('^Email.*')],
      icon: './icons/larkemail.svg',
      baseUrl: 'https://open.larksuite.com/open-apis',
			credentials,
    },
  },
  overwrites: {
    operations: [{
      has: "routing.request.headers.Content-Type",
      set: false,
    }, {
      match: {
        type: 'string',
      },
      set: {
        type: 'string',
        default: '',
      }
    }]
  },
};
