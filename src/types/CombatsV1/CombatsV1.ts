// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class GameCanceled extends ethereum.Event {
  get params(): GameCanceled__Params {
    return new GameCanceled__Params(this);
  }
}

export class GameCanceled__Params {
  _event: GameCanceled;

  constructor(event: GameCanceled) {
    this._event = event;
  }

  get gameID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class GameCreated extends ethereum.Event {
  get params(): GameCreated__Params {
    return new GameCreated__Params(this);
  }
}

export class GameCreated__Params {
  _event: GameCreated;

  constructor(event: GameCreated) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get creator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get rival(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get bet(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get rounds(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get roundTime(): i32 {
    return this._event.parameters[5].value.toI32();
  }

  get leaveTime(): i32 {
    return this._event.parameters[6].value.toI32();
  }

  get startDate(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class GameJoined extends ethereum.Event {
  get params(): GameJoined__Params {
    return new GameJoined__Params(this);
  }
}

export class GameJoined__Params {
  _event: GameJoined;

  constructor(event: GameJoined) {
    this._event = event;
  }

  get gameID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get rival(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class GamePayment extends ethereum.Event {
  get params(): GamePayment__Params {
    return new GamePayment__Params(this);
  }
}

export class GamePayment__Params {
  _event: GamePayment;

  constructor(event: GamePayment) {
    this._event = event;
  }

  get gameID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get player(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class GamePlayed extends ethereum.Event {
  get params(): GamePlayed__Params {
    return new GamePlayed__Params(this);
  }
}

export class GamePlayed__Params {
  _event: GamePlayed;

  constructor(event: GamePlayed) {
    this._event = event;
  }

  get gameID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get player(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get play(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get attack(): i32 {
    return this._event.parameters[3].value.toI32();
  }

  get def(): i32 {
    return this._event.parameters[4].value.toI32();
  }
}

export class GameQuitted extends ethereum.Event {
  get params(): GameQuitted__Params {
    return new GameQuitted__Params(this);
  }
}

export class GameQuitted__Params {
  _event: GameQuitted;

  constructor(event: GameQuitted) {
    this._event = event;
  }

  get gameID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get player(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class GameScored extends ethereum.Event {
  get params(): GameScored__Params {
    return new GameScored__Params(this);
  }
}

export class GameScored__Params {
  _event: GameScored;

  constructor(event: GameScored) {
    this._event = event;
  }

  get gameID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get player(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class GameTied extends ethereum.Event {
  get params(): GameTied__Params {
    return new GameTied__Params(this);
  }
}

export class GameTied__Params {
  _event: GameTied;

  constructor(event: GameTied) {
    this._event = event;
  }

  get gameID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class OwnershipHandoverCanceled extends ethereum.Event {
  get params(): OwnershipHandoverCanceled__Params {
    return new OwnershipHandoverCanceled__Params(this);
  }
}

export class OwnershipHandoverCanceled__Params {
  _event: OwnershipHandoverCanceled;

  constructor(event: OwnershipHandoverCanceled) {
    this._event = event;
  }

  get pendingOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OwnershipHandoverRequested extends ethereum.Event {
  get params(): OwnershipHandoverRequested__Params {
    return new OwnershipHandoverRequested__Params(this);
  }
}

export class OwnershipHandoverRequested__Params {
  _event: OwnershipHandoverRequested;

  constructor(event: OwnershipHandoverRequested) {
    this._event = event;
  }

  get pendingOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get oldOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RivalLeft extends ethereum.Event {
  get params(): RivalLeft__Params {
    return new RivalLeft__Params(this);
  }
}

export class RivalLeft__Params {
  _event: RivalLeft;

  constructor(event: RivalLeft) {
    this._event = event;
  }

  get gameID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get player(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get to(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class CombatsV1__gameStatsResultStatsStruct extends ethereum.Tuple {
  get plays(): BigInt {
    return this[0].toBigInt();
  }

  get rivalPlays(): BigInt {
    return this[1].toBigInt();
  }

  get score(): BigInt {
    return this[2].toBigInt();
  }

  get attack(): i32 {
    return this[3].toI32();
  }

  get def(): i32 {
    return this[4].toI32();
  }

  get rivalAttack(): i32 {
    return this[5].toI32();
  }

  get rivalDef(): i32 {
    return this[6].toI32();
  }

  get status(): i32 {
    return this[7].toI32();
  }

  get creatorAhead(): boolean {
    return this[8].toBoolean();
  }
}

export class CombatsV1__gamesResult {
  value0: Address;
  value1: Address;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: i32;
  value8: i32;
  value9: BigInt;
  value10: BigInt;
  value11: i32;

  constructor(
    value0: Address,
    value1: Address,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: i32,
    value8: i32,
    value9: BigInt,
    value10: BigInt,
    value11: i32
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
    this.value10 = value10;
    this.value11 = value11;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set(
      "value7",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value7))
    );
    map.set(
      "value8",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value8))
    );
    map.set("value9", ethereum.Value.fromUnsignedBigInt(this.value9));
    map.set("value10", ethereum.Value.fromUnsignedBigInt(this.value10));
    map.set(
      "value11",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value11))
    );
    return map;
  }

  getCreator(): Address {
    return this.value0;
  }

  getRival(): Address {
    return this.value1;
  }

  getBet(): BigInt {
    return this.value2;
  }

  getPayloads(): BigInt {
    return this.value3;
  }

  getResult(): BigInt {
    return this.value4;
  }

  getRounds(): BigInt {
    return this.value5;
  }

  getTies(): BigInt {
    return this.value6;
  }

  getRoundTime(): i32 {
    return this.value7;
  }

  getLeaveTime(): i32 {
    return this.value8;
  }

  getStartDate(): BigInt {
    return this.value9;
  }

  getLastRound(): BigInt {
    return this.value10;
  }

  getStatus(): i32 {
    return this.value11;
  }
}

export class CombatsV1 extends ethereum.SmartContract {
  static bind(address: Address): CombatsV1 {
    return new CombatsV1("CombatsV1", address);
  }

  balance(): BigInt {
    let result = super.call("balance", "balance():(uint256)", []);

    return result[0].toBigInt();
  }

  try_balance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balance", "balance():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  gameStats(gameID: BigInt): CombatsV1__gameStatsResultStatsStruct {
    let result = super.call(
      "gameStats",
      "gameStats(uint256):((uint256,uint256,uint256,uint8,uint8,uint8,uint8,uint8,bool))",
      [ethereum.Value.fromUnsignedBigInt(gameID)]
    );

    return changetype<CombatsV1__gameStatsResultStatsStruct>(
      result[0].toTuple()
    );
  }

  try_gameStats(
    gameID: BigInt
  ): ethereum.CallResult<CombatsV1__gameStatsResultStatsStruct> {
    let result = super.tryCall(
      "gameStats",
      "gameStats(uint256):((uint256,uint256,uint256,uint8,uint8,uint8,uint8,uint8,bool))",
      [ethereum.Value.fromUnsignedBigInt(gameID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<CombatsV1__gameStatsResultStatsStruct>(value[0].toTuple())
    );
  }

  games(param0: BigInt): CombatsV1__gamesResult {
    let result = super.call(
      "games",
      "games(uint256):(address,address,uint256,uint256,uint256,uint256,uint256,uint16,uint16,uint40,uint40,uint8)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new CombatsV1__gamesResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toI32(),
      result[8].toI32(),
      result[9].toBigInt(),
      result[10].toBigInt(),
      result[11].toI32()
    );
  }

  try_games(param0: BigInt): ethereum.CallResult<CombatsV1__gamesResult> {
    let result = super.tryCall(
      "games",
      "games(uint256):(address,address,uint256,uint256,uint256,uint256,uint256,uint16,uint16,uint40,uint40,uint8)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CombatsV1__gamesResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toI32(),
        value[8].toI32(),
        value[9].toBigInt(),
        value[10].toBigInt(),
        value[11].toI32()
      )
    );
  }

  gamesCount(): BigInt {
    let result = super.call("gamesCount", "gamesCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_gamesCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("gamesCount", "gamesCount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownershipHandoverExpiresAt(pendingOwner: Address): BigInt {
    let result = super.call(
      "ownershipHandoverExpiresAt",
      "ownershipHandoverExpiresAt(address):(uint256)",
      [ethereum.Value.fromAddress(pendingOwner)]
    );

    return result[0].toBigInt();
  }

  try_ownershipHandoverExpiresAt(
    pendingOwner: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "ownershipHandoverExpiresAt",
      "ownershipHandoverExpiresAt(address):(uint256)",
      [ethereum.Value.fromAddress(pendingOwner)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CancelCall extends ethereum.Call {
  get inputs(): CancelCall__Inputs {
    return new CancelCall__Inputs(this);
  }

  get outputs(): CancelCall__Outputs {
    return new CancelCall__Outputs(this);
  }
}

export class CancelCall__Inputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }

  get gameID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelCall__Outputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }
}

export class CancelOwnershipHandoverCall extends ethereum.Call {
  get inputs(): CancelOwnershipHandoverCall__Inputs {
    return new CancelOwnershipHandoverCall__Inputs(this);
  }

  get outputs(): CancelOwnershipHandoverCall__Outputs {
    return new CancelOwnershipHandoverCall__Outputs(this);
  }
}

export class CancelOwnershipHandoverCall__Inputs {
  _call: CancelOwnershipHandoverCall;

  constructor(call: CancelOwnershipHandoverCall) {
    this._call = call;
  }
}

export class CancelOwnershipHandoverCall__Outputs {
  _call: CancelOwnershipHandoverCall;

  constructor(call: CancelOwnershipHandoverCall) {
    this._call = call;
  }
}

export class CompleteOwnershipHandoverCall extends ethereum.Call {
  get inputs(): CompleteOwnershipHandoverCall__Inputs {
    return new CompleteOwnershipHandoverCall__Inputs(this);
  }

  get outputs(): CompleteOwnershipHandoverCall__Outputs {
    return new CompleteOwnershipHandoverCall__Outputs(this);
  }
}

export class CompleteOwnershipHandoverCall__Inputs {
  _call: CompleteOwnershipHandoverCall;

  constructor(call: CompleteOwnershipHandoverCall) {
    this._call = call;
  }

  get pendingOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class CompleteOwnershipHandoverCall__Outputs {
  _call: CompleteOwnershipHandoverCall;

  constructor(call: CompleteOwnershipHandoverCall) {
    this._call = call;
  }
}

export class CreateCall extends ethereum.Call {
  get inputs(): CreateCall__Inputs {
    return new CreateCall__Inputs(this);
  }

  get outputs(): CreateCall__Outputs {
    return new CreateCall__Outputs(this);
  }
}

export class CreateCall__Inputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get rounds(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get prepareTime(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get roundTime(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get leaveTime(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get rival(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class CreateCall__Outputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }
}

export class JoinCall extends ethereum.Call {
  get inputs(): JoinCall__Inputs {
    return new JoinCall__Inputs(this);
  }

  get outputs(): JoinCall__Outputs {
    return new JoinCall__Outputs(this);
  }
}

export class JoinCall__Inputs {
  _call: JoinCall;

  constructor(call: JoinCall) {
    this._call = call;
  }

  get gameID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class JoinCall__Outputs {
  _call: JoinCall;

  constructor(call: JoinCall) {
    this._call = call;
  }
}

export class LeaveCall extends ethereum.Call {
  get inputs(): LeaveCall__Inputs {
    return new LeaveCall__Inputs(this);
  }

  get outputs(): LeaveCall__Outputs {
    return new LeaveCall__Outputs(this);
  }
}

export class LeaveCall__Inputs {
  _call: LeaveCall;

  constructor(call: LeaveCall) {
    this._call = call;
  }

  get gameID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class LeaveCall__Outputs {
  _call: LeaveCall;

  constructor(call: LeaveCall) {
    this._call = call;
  }
}

export class PlayCall extends ethereum.Call {
  get inputs(): PlayCall__Inputs {
    return new PlayCall__Inputs(this);
  }

  get outputs(): PlayCall__Outputs {
    return new PlayCall__Outputs(this);
  }
}

export class PlayCall__Inputs {
  _call: PlayCall;

  constructor(call: PlayCall) {
    this._call = call;
  }

  get gameID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get attack(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get def(): i32 {
    return this._call.inputValues[2].value.toI32();
  }
}

export class PlayCall__Outputs {
  _call: PlayCall;

  constructor(call: PlayCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RequestOwnershipHandoverCall extends ethereum.Call {
  get inputs(): RequestOwnershipHandoverCall__Inputs {
    return new RequestOwnershipHandoverCall__Inputs(this);
  }

  get outputs(): RequestOwnershipHandoverCall__Outputs {
    return new RequestOwnershipHandoverCall__Outputs(this);
  }
}

export class RequestOwnershipHandoverCall__Inputs {
  _call: RequestOwnershipHandoverCall;

  constructor(call: RequestOwnershipHandoverCall) {
    this._call = call;
  }
}

export class RequestOwnershipHandoverCall__Outputs {
  _call: RequestOwnershipHandoverCall;

  constructor(call: RequestOwnershipHandoverCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawToCall extends ethereum.Call {
  get inputs(): WithdrawToCall__Inputs {
    return new WithdrawToCall__Inputs(this);
  }

  get outputs(): WithdrawToCall__Outputs {
    return new WithdrawToCall__Outputs(this);
  }
}

export class WithdrawToCall__Inputs {
  _call: WithdrawToCall;

  constructor(call: WithdrawToCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawToCall__Outputs {
  _call: WithdrawToCall;

  constructor(call: WithdrawToCall) {
    this._call = call;
  }
}
