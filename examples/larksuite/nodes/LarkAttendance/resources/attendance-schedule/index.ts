import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as queryScheduleInformation from './query-schedule-information'
import * as createOrModifySchedule from './create-or-modify-schedule'

const operations: INodePropertyOptions[] = [
  queryScheduleInformation.option,
  createOrModifySchedule.option,
]

export const name = 'Attendance Schedule'

/* eslint-disable */
const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Attendance Attendance Schedule'],
    },
  },
  default: '',
}
/* eslint-disable */

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const rawProperties: INodeProperties[] = [
  operationSelect,
  ...queryScheduleInformation.properties,
  ...createOrModifySchedule.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
