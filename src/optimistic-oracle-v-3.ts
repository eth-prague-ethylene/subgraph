import {
  AdminPropertiesSet as AdminPropertiesSetEvent,
  AssertionDisputed as AssertionDisputedEvent,
  AssertionMade as AssertionMadeEvent,
  AssertionSettled as AssertionSettledEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/OptimisticOracleV3/OptimisticOracleV3"
import {
  AdminPropertiesSet,
  AssertionDisputed,
  AssertionMade,
  AssertionSettled,
  OwnershipTransferred
} from "../generated/schema"

export function handleAdminPropertiesSet(event: AdminPropertiesSetEvent): void {
  let entity = new AdminPropertiesSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.defaultCurrency = event.params.defaultCurrency
  entity.defaultLiveness = event.params.defaultLiveness
  entity.burnedBondPercentage = event.params.burnedBondPercentage

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAssertionDisputed(event: AssertionDisputedEvent): void {
  let entity = new AssertionDisputed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.assertionId = event.params.assertionId
  entity.caller = event.params.caller
  entity.disputer = event.params.disputer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAssertionMade(event: AssertionMadeEvent): void {
  let entity = new AssertionMade(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.assertionId = event.params.assertionId
  entity.domainId = event.params.domainId
  entity.claim = event.params.claim
  entity.asserter = event.params.asserter
  entity.callbackRecipient = event.params.callbackRecipient
  entity.escalationManager = event.params.escalationManager
  entity.caller = event.params.caller
  entity.expirationTime = event.params.expirationTime
  entity.currency = event.params.currency
  entity.bond = event.params.bond
  entity.identifier = event.params.identifier

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAssertionSettled(event: AssertionSettledEvent): void {
  let entity = new AssertionSettled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.assertionId = event.params.assertionId
  entity.bondRecipient = event.params.bondRecipient
  entity.disputed = event.params.disputed
  entity.settlementResolution = event.params.settlementResolution
  entity.settleCaller = event.params.settleCaller

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
