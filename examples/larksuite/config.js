const path = require('path');

module.exports = {
  packageName: 'n8n-nodes-larksuite',
  credentials: {},
  nodes: {
    larkFiles: {
      displayName: 'Lark Files',
      name: 'LarkFiles',
      description: 'Lark Files Management',
      openapi: path.resolve(__dirname, 'lark.yml'),
      tags: [new RegExp('^Docs > File Management*')],
      icon: 'fa:file',
      baseUrl: 'https://open.feishu.cn/open-apis',
    },
    larkSheets: {
      displayName: 'Lark Sheets',
      name: 'LarkSheets',
      description: 'Lark Sheets Management',
      openapi: path.resolve(__dirname, 'lark.yml'),
      tags: [new RegExp('^Docs > Sheets*')],
      icon: 'fa:table',
      baseUrl: 'https://open.feishu.cn/open-apis',
    },
    larkBitable: {
      displayName: 'Lark Bitable',
      name: 'LarkBitable',
      description: 'Lark Bitable Management',
      openapi: path.resolve(__dirname, 'lark.yml'),
      tags: [new RegExp('^Docs > Bitable*')],
      icon: 'fa:table',
      baseUrl: 'https://open.feishu.cn/open-apis',
    },
    larkContacts: {
      displayName: 'Lark Contacts',
      name: 'LarkContacts',
      description: 'Lark Contacts Management',
      openapi: path.resolve(__dirname, 'lark.yml'),
      tags: [new RegExp('^Contacts*')],
      icon: 'fa:address-book',
      baseUrl: 'https://open.feishu.cn/open-apis',
    },
    larkCalendar: {
      displayName: 'Lark Calendar',
      name: 'LarkCalendar',
      description: 'Lark Calendar Management',
      openapi: path.resolve(__dirname, 'lark.yml'),
      tags: [new RegExp('^Calendar*')],
      icon: 'fa:calendar',
      baseUrl: 'https://open.feishu.cn/open-apis',
    },
    larkMessenger: {
      displayName: 'Lark Messenger',
      name: 'LarkMessenger',
      description: 'Lark Messenger Management',
      openapi: path.resolve(__dirname, 'lark.yml'),
      tags: [new RegExp('^Messenger*')],
      icon: 'fa:comment',
      baseUrl: 'https://open.feishu.cn/open-apis',
    },
    larkAttendance: {
      displayName: 'Lark Attendance',
      name: 'LarkAttendance',
      description: 'Lark Attendance Management',
      openapi: path.resolve(__dirname, 'lark.yml'),
      tags: [new RegExp('^Attendance*')],
      icon: 'fa:clock',
      baseUrl: 'https://open.feishu.cn/open-apis',
    },
    larkApproval: {
      displayName: 'Lark Approval',
      name: 'LarkApproval',
      description: 'Lark Approval Management',
      openapi: path.resolve(__dirname, 'lark.yml'),
      tags: [new RegExp('^Approval*')],
      icon: 'fa:check',
      baseUrl: 'https://open.feishu.cn/open-apis',
    },
    larkApps: {
      displayName: 'Lark Apps',
      name: 'LarkApps',
      description: 'Lark Apps Management',
      openapi: path.resolve(__dirname, 'lark.yml'),
      tags: [new RegExp('^App Information*')],
      icon: 'fa:info',
      baseUrl: 'https://open.feishu.cn/open-apis',
    },
    larkAI: {
      displayName: 'Lark AI',
      name: 'LarkAI',
      description: 'Lark AI Management',
      openapi: path.resolve(__dirname, 'lark.yml'),
      tags: [new RegExp('^AI*')],
      icon: 'fa:robot',
      baseUrl: 'https://open.feishu.cn/open-apis',
    },
    larkCompany: {
      displayName: 'Lark Company',
      name: 'LarkCompany',
      description: 'Lark Company Management',
      openapi: path.resolve(__dirname, 'lark.yml'),
      tags: [new RegExp('^Company Information*')],
      icon: 'fa:building',
      baseUrl: 'https://open.feishu.cn/open-apis',
    },
    larkEmail: {
      displayName: 'Lark Email',
      name: 'LarkEmail',
      description: 'Lark Email Management',
      openapi: path.resolve(__dirname, 'lark.yml'),
      tags: [new RegExp('^Email*')],
      icon: 'fa:envelope',
      baseUrl: 'https://open.feishu.cn/open-apis',
    },
  },
};
