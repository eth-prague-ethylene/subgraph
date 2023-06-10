import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AdminPropertiesSet,
  AssertionDisputed,
  AssertionMade,
  AssertionSettled,
  OwnershipTransferred
} from "../generated/OptimisticOracleV3/OptimisticOracleV3"

export function createAdminPropertiesSetEvent(
  defaultCurrency: Address,
  defaultLiveness: BigInt,
  burnedBondPercentage: BigInt
): AdminPropertiesSet {
  let adminPropertiesSetEvent = changetype<AdminPropertiesSet>(newMockEvent())

  adminPropertiesSetEvent.parameters = new Array()

  adminPropertiesSetEvent.parameters.push(
    new ethereum.EventParam(
      "defaultCurrency",
      ethereum.Value.fromAddress(defaultCurrency)
    )
  )
  adminPropertiesSetEvent.parameters.push(
    new ethereum.EventParam(
      "defaultLiveness",
      ethereum.Value.fromUnsignedBigInt(defaultLiveness)
    )
  )
  adminPropertiesSetEvent.parameters.push(
    new ethereum.EventParam(
      "burnedBondPercentage",
      ethereum.Value.fromUnsignedBigInt(burnedBondPercentage)
    )
  )

  return adminPropertiesSetEvent
}

export function createAssertionDisputedEvent(
  assertionId: Bytes,
  caller: Address,
  disputer: Address
): AssertionDisputed {
  let assertionDisputedEvent = changetype<AssertionDisputed>(newMockEvent())

  assertionDisputedEvent.parameters = new Array()

  assertionDisputedEvent.parameters.push(
    new ethereum.EventParam(
      "assertionId",
      ethereum.Value.fromFixedBytes(assertionId)
    )
  )
  assertionDisputedEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  assertionDisputedEvent.parameters.push(
    new ethereum.EventParam("disputer", ethereum.Value.fromAddress(disputer))
  )

  return assertionDisputedEvent
}

export function createAssertionMadeEvent(
  assertionId: Bytes,
  domainId: Bytes,
  claim: Bytes,
  asserter: Address,
  callbackRecipient: Address,
  escalationManager: Address,
  caller: Address,
  expirationTime: BigInt,
  currency: Address,
  bond: BigInt,
  identifier: Bytes
): AssertionMade {
  let assertionMadeEvent = changetype<AssertionMade>(newMockEvent())

  assertionMadeEvent.parameters = new Array()

  assertionMadeEvent.parameters.push(
    new ethereum.EventParam(
      "assertionId",
      ethereum.Value.fromFixedBytes(assertionId)
    )
  )
  assertionMadeEvent.parameters.push(
    new ethereum.EventParam("domainId", ethereum.Value.fromFixedBytes(domainId))
  )
  assertionMadeEvent.parameters.push(
    new ethereum.EventParam("claim", ethereum.Value.fromBytes(claim))
  )
  assertionMadeEvent.parameters.push(
    new ethereum.EventParam("asserter", ethereum.Value.fromAddress(asserter))
  )
  assertionMadeEvent.parameters.push(
    new ethereum.EventParam(
      "callbackRecipient",
      ethereum.Value.fromAddress(callbackRecipient)
    )
  )
  assertionMadeEvent.parameters.push(
    new ethereum.EventParam(
      "escalationManager",
      ethereum.Value.fromAddress(escalationManager)
    )
  )
  assertionMadeEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  assertionMadeEvent.parameters.push(
    new ethereum.EventParam(
      "expirationTime",
      ethereum.Value.fromUnsignedBigInt(expirationTime)
    )
  )
  assertionMadeEvent.parameters.push(
    new ethereum.EventParam("currency", ethereum.Value.fromAddress(currency))
  )
  assertionMadeEvent.parameters.push(
    new ethereum.EventParam("bond", ethereum.Value.fromUnsignedBigInt(bond))
  )
  assertionMadeEvent.parameters.push(
    new ethereum.EventParam(
      "identifier",
      ethereum.Value.fromFixedBytes(identifier)
    )
  )

  return assertionMadeEvent
}

export function createAssertionSettledEvent(
  assertionId: Bytes,
  bondRecipient: Address,
  disputed: boolean,
  settlementResolution: boolean,
  settleCaller: Address
): AssertionSettled {
  let assertionSettledEvent = changetype<AssertionSettled>(newMockEvent())

  assertionSettledEvent.parameters = new Array()

  assertionSettledEvent.parameters.push(
    new ethereum.EventParam(
      "assertionId",
      ethereum.Value.fromFixedBytes(assertionId)
    )
  )
  assertionSettledEvent.parameters.push(
    new ethereum.EventParam(
      "bondRecipient",
      ethereum.Value.fromAddress(bondRecipient)
    )
  )
  assertionSettledEvent.parameters.push(
    new ethereum.EventParam("disputed", ethereum.Value.fromBoolean(disputed))
  )
  assertionSettledEvent.parameters.push(
    new ethereum.EventParam(
      "settlementResolution",
      ethereum.Value.fromBoolean(settlementResolution)
    )
  )
  assertionSettledEvent.parameters.push(
    new ethereum.EventParam(
      "settleCaller",
      ethereum.Value.fromAddress(settleCaller)
    )
  )

  return assertionSettledEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
