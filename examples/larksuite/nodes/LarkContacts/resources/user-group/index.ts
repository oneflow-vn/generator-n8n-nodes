import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'

import * as createAUserGroup from './create-a-user-group'
import * as updateAUserGroup from './update-a-user-group'
import * as deleteAUserGroup from './delete-a-user-group'
import * as queryAUserGroup from './query-a-user-group'
import * as queryTheListOfUserGroups from './query-the-list-of-user-groups'

const operations: INodePropertyOptions[] = [
  createAUserGroup.option,
  updateAUserGroup.option,
  deleteAUserGroup.option,
  queryAUserGroup.option,
  queryTheListOfUserGroups.option,
]

export const name = 'User Group'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Contacts User Group'],
    },
  },
  default: '',
}

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const properties: INodeProperties[] = [
  operationSelect,
  ...createAUserGroup.properties,
  ...updateAUserGroup.properties,
  ...deleteAUserGroup.properties,
  ...queryAUserGroup.properties,
  ...queryTheListOfUserGroups.properties,
]
