import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'

import * as recallMessagesInBatches from './recall-messages-in-batches'
import * as queryTheNumberOfUsersToWhomABatchMessageIsPushedAndTheNumberOfUsersWhoHaveReadTheBatchMessage from './query-the-number-of-users-to-whom-a-batch-message-is-pushed-and-the-number-of-users-who-have-read-the-batch-message'
import * as queriesTheOverallProgressOfABatchMessage from './queries-the-overall-progress-of-a-batch-message'

const operations: INodePropertyOptions[] = [
  recallMessagesInBatches.option,
  queryTheNumberOfUsersToWhomABatchMessageIsPushedAndTheNumberOfUsersWhoHaveReadTheBatchMessage.option,
  queriesTheOverallProgressOfABatchMessage.option,
]

export const name = 'Message  Batch Message'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Messenger Message Batch Message'],
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
  ...recallMessagesInBatches.properties,
  ...queryTheNumberOfUsersToWhomABatchMessageIsPushedAndTheNumberOfUsersWhoHaveReadTheBatchMessage.properties,
  ...queriesTheOverallProgressOfABatchMessage.properties,
]
