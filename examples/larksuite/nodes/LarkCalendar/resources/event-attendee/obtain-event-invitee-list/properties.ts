import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName:
      'GET /calendar/v4/calendars/{calendar_id}/events/{event_id}/attendees',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar Event Attendee'],
        operation: ['Obtain event invitee list'],
      },
    },
  },
  {
    displayName: 'Calendar Id',
    name: 'calendar_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Calendar Event Attendee'],
        operation: ['Obtain event invitee list'],
      },
    },
  },
  {
    displayName: 'Event Id',
    name: 'event_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Calendar Event Attendee'],
        operation: ['Obtain event invitee list'],
      },
    },
  },
]
