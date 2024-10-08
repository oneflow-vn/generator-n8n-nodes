import { INodeProperties } from 'n8n-workflow'
import { aggregateNodeMethods } from '../helpers/methods'
import runHooks from './hooks'

import * as message from './message'
import * as messageBuzzMessages from './message-buzz-messages'
import * as messageBatchMessage from './message-batch-message'
import * as messageImages from './message-images'
import * as messageFiles from './message-files'
import * as messageMessageCard from './message-message-card'
import * as messageMessageReaction from './message-message-reaction'
import * as group from './group'
import * as groupGroupMember from './group-group-member'
import * as groupGroupAnnouncement from './group-group-announcement'

const authenticationProperties: INodeProperties[] = [
  {
    displayName: 'Authentication',
    name: 'authentication',
    type: 'options',
    options: [
      {
        name: 'Tenant Token',
        value: 'larkSuiteTenantApi',
      },
      {
        name: 'OAuth2',
        value: 'larkSuiteOAuth2Api',
      },
    ],
    default: 'larkSuiteTenantApi',
  },
]

const resourceSelect: INodeProperties[] = [
  {
    displayName: 'Resource',
    name: 'resource',
    type: 'options',
    noDataExpression: true,
    options: [
      {
        name: 'Message',
        value: 'Messenger Message',
        description: '',
      },
      {
        name: 'Message  Buzz Messages',
        value: 'Messenger Message Message Buzz Messages',
        description: '',
      },
      {
        name: 'Message  Batch Message',
        value: 'Messenger Message Batch Message',
        description: '',
      },
      {
        name: 'Message  Images',
        value: 'Messenger Message Images',
        description: '',
      },
      {
        name: 'Message  Files',
        value: 'Messenger Message Files',
        description: '',
      },
      {
        name: 'Message  Message Card',
        value: 'Messenger Message Message Card',
        description: '',
      },
      {
        name: 'Message  Message Reaction',
        value: 'Messenger Message Message Reaction',
        description: '',
      },
      {
        name: 'Group',
        value: 'Messenger Group',
        description: '',
      },
      {
        name: 'Group  Group Member',
        value: 'Messenger Group Group Member',
        description: '',
      },
      {
        name: 'Group  Group Announcement',
        value: 'Messenger Group Group Announcement',
        description: '',
      },
    ],
    default: '',
  },
]

const extraProperties: INodeProperties[] = [
  {
    displayName: 'Options',
    name: 'options',
    type: 'collection',
    placeholder: 'Add option',
    default: {},
    options: [
      {
        displayName: 'Use Custom Body',
        name: 'useCustomBody',
        type: 'boolean',
        description: 'Wether to use a custom body',
        required: true,
        default: false,
      },
    ],
  },
]

const rawProperties: INodeProperties[] = [
  ...authenticationProperties,
  ...resourceSelect,
  ...message.properties,
  ...messageBuzzMessages.properties,
  ...messageBatchMessage.properties,
  ...messageImages.properties,
  ...messageFiles.properties,
  ...messageMessageCard.properties,
  ...messageMessageReaction.properties,
  ...group.properties,
  ...groupGroupMember.properties,
  ...groupGroupAnnouncement.properties,
  ...extraProperties,
]

const { properties, methods: selfMethods } = runHooks(rawProperties)

const methods = aggregateNodeMethods([
  selfMethods,
  message.methods,
  messageBuzzMessages.methods,
  messageBatchMessage.methods,
  messageImages.methods,
  messageFiles.methods,
  messageMessageCard.methods,
  messageMessageReaction.methods,
  group.methods,
  groupGroupMember.methods,
  groupGroupAnnouncement.methods,
])

export { properties, methods }
