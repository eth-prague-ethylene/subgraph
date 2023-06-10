import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { AdminPropertiesSet } from "../generated/schema"
import { AdminPropertiesSet as AdminPropertiesSetEvent } from "../generated/OptimisticOracleV3/OptimisticOracleV3"
import { handleAdminPropertiesSet } from "../src/optimistic-oracle-v-3"
import { createAdminPropertiesSetEvent } from "./optimistic-oracle-v-3-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let defaultCurrency = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let defaultLiveness = BigInt.fromI32(234)
    let burnedBondPercentage = BigInt.fromI32(234)
    let newAdminPropertiesSetEvent = createAdminPropertiesSetEvent(
      defaultCurrency,
      defaultLiveness,
      burnedBondPercentage
    )
    handleAdminPropertiesSet(newAdminPropertiesSetEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AdminPropertiesSet created and stored", () => {
    assert.entityCount("AdminPropertiesSet", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AdminPropertiesSet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "defaultCurrency",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AdminPropertiesSet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "defaultLiveness",
      "234"
    )
    assert.fieldEquals(
      "AdminPropertiesSet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "burnedBondPercentage",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
