import { INodeProperties } from 'n8n-workflow'

import * as calendar from './calendar'
import * as acl from './acl'
import * as event from './event'
import * as eventAttendee from './event-attendee'
import * as eventAttendeeChatMember from './event-attendee-chat-member'
import * as freebusy from './freebusy'
import * as timeoff from './timeoff'
import * as setting from './setting'
import * as exchangeBinding from './exchange-binding'

const resourceSelect: INodeProperties = {
  displayName: 'Resource',
  name: 'resource',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: 'Calendar',
      value: 'Calendar Calendar',
    },
    {
      name: 'ACL',
      value: 'Calendar ACL',
    },
    {
      name: 'Event',
      value: 'Calendar Event',
    },
    {
      name: 'Event Attendee',
      value: 'Calendar Event Attendee',
    },
    {
      name: 'Event Attendee Chat Member',
      value: 'Calendar Event Attendee Chat Member',
    },
    {
      name: 'Freebusy',
      value: 'Calendar Freebusy',
    },
    {
      name: 'Timeoff',
      value: 'Calendar Timeoff',
    },
    {
      name: 'Setting',
      value: 'Calendar Setting',
    },
    {
      name: 'Exchange Binding',
      value: 'Calendar Exchange Binding',
    },
  ],
  default: '',
}

export const properties: INodeProperties[] = [
  resourceSelect,
  ...calendar.properties,
  ...acl.properties,
  ...event.properties,
  ...eventAttendee.properties,
  ...eventAttendeeChatMember.properties,
  ...freebusy.properties,
  ...timeoff.properties,
  ...setting.properties,
  ...exchangeBinding.properties,
]
