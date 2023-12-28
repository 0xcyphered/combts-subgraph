// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Account must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Account", id.toString(), this);
    }
  }

  static load(id: string): Account | null {
    return changetype<Account | null>(store.get("Account", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get plays(): Array<string> {
    let value = this.get("plays");
    return value!.toStringArray();
  }

  get payments(): Array<string> {
    let value = this.get("payments");
    return value!.toStringArray();
  }

  get games(): Array<string> {
    let value = this.get("games");
    return value!.toStringArray();
  }
}

export class Game extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Game entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Game must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Game", id.toString(), this);
    }
  }

  static load(id: string): Game | null {
    return changetype<Game | null>(store.get("Game", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get creator(): string | null {
    let value = this.get("creator");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set creator(value: string | null) {
    if (!value) {
      this.unset("creator");
    } else {
      this.set("creator", Value.fromString(<string>value));
    }
  }

  get rival(): string | null {
    let value = this.get("rival");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set rival(value: string | null) {
    if (!value) {
      this.unset("rival");
    } else {
      this.set("rival", Value.fromString(<string>value));
    }
  }

  get bet(): BigInt | null {
    let value = this.get("bet");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set bet(value: BigInt | null) {
    if (!value) {
      this.unset("bet");
    } else {
      this.set("bet", Value.fromBigInt(<BigInt>value));
    }
  }

  get rounds(): BigInt | null {
    let value = this.get("rounds");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set rounds(value: BigInt | null) {
    if (!value) {
      this.unset("rounds");
    } else {
      this.set("rounds", Value.fromBigInt(<BigInt>value));
    }
  }

  get startDate(): BigInt | null {
    let value = this.get("startDate");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set startDate(value: BigInt | null) {
    if (!value) {
      this.unset("startDate");
    } else {
      this.set("startDate", Value.fromBigInt(<BigInt>value));
    }
  }

  get roundTime(): i32 {
    let value = this.get("roundTime");
    return value!.toI32();
  }

  set roundTime(value: i32) {
    this.set("roundTime", Value.fromI32(value));
  }

  get leaveTime(): i32 {
    let value = this.get("leaveTime");
    return value!.toI32();
  }

  set leaveTime(value: i32) {
    this.set("leaveTime", Value.fromI32(value));
  }

  get plays(): BigInt | null {
    let value = this.get("plays");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set plays(value: BigInt | null) {
    if (!value) {
      this.unset("plays");
    } else {
      this.set("plays", Value.fromBigInt(<BigInt>value));
    }
  }

  get rivalPlays(): BigInt | null {
    let value = this.get("rivalPlays");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set rivalPlays(value: BigInt | null) {
    if (!value) {
      this.unset("rivalPlays");
    } else {
      this.set("rivalPlays", Value.fromBigInt(<BigInt>value));
    }
  }

  get score(): BigInt {
    let value = this.get("score");
    return value!.toBigInt();
  }

  set score(value: BigInt) {
    this.set("score", Value.fromBigInt(value));
  }

  get rivalScore(): BigInt {
    let value = this.get("rivalScore");
    return value!.toBigInt();
  }

  set rivalScore(value: BigInt) {
    this.set("rivalScore", Value.fromBigInt(value));
  }

  get isFinished(): boolean {
    let value = this.get("isFinished");
    return value!.toBoolean();
  }

  set isFinished(value: boolean) {
    this.set("isFinished", Value.fromBoolean(value));
  }

  get isJoined(): boolean {
    let value = this.get("isJoined");
    return value!.toBoolean();
  }

  set isJoined(value: boolean) {
    this.set("isJoined", Value.fromBoolean(value));
  }

  get isPlayed(): boolean {
    let value = this.get("isPlayed");
    return value!.toBoolean();
  }

  set isPlayed(value: boolean) {
    this.set("isPlayed", Value.fromBoolean(value));
  }

  get isCanceled(): boolean {
    let value = this.get("isCanceled");
    return value!.toBoolean();
  }

  set isCanceled(value: boolean) {
    this.set("isCanceled", Value.fromBoolean(value));
  }

  get isLeft(): boolean {
    let value = this.get("isLeft");
    return value!.toBoolean();
  }

  set isLeft(value: boolean) {
    this.set("isLeft", Value.fromBoolean(value));
  }

  get leaver(): string | null {
    let value = this.get("leaver");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set leaver(value: string | null) {
    if (!value) {
      this.unset("leaver");
    } else {
      this.set("leaver", Value.fromString(<string>value));
    }
  }

  get lastRound(): BigInt | null {
    let value = this.get("lastRound");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set lastRound(value: BigInt | null) {
    if (!value) {
      this.unset("lastRound");
    } else {
      this.set("lastRound", Value.fromBigInt(<BigInt>value));
    }
  }

  get ties(): BigInt {
    let value = this.get("ties");
    return value!.toBigInt();
  }

  set ties(value: BigInt) {
    this.set("ties", Value.fromBigInt(value));
  }

  get winner(): string | null {
    let value = this.get("winner");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set winner(value: string | null) {
    if (!value) {
      this.unset("winner");
    } else {
      this.set("winner", Value.fromString(<string>value));
    }
  }

  get gamePlays(): Array<string> {
    let value = this.get("gamePlays");
    return value!.toStringArray();
  }

  get payments(): Array<string> {
    let value = this.get("payments");
    return value!.toStringArray();
  }
}

export class Play extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Play entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Play must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Play", id.toString(), this);
    }
  }

  static load(id: string): Play | null {
    return changetype<Play | null>(store.get("Play", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get game(): string {
    let value = this.get("game");
    return value!.toString();
  }

  set game(value: string) {
    this.set("game", Value.fromString(value));
  }

  get player(): string {
    let value = this.get("player");
    return value!.toString();
  }

  set player(value: string) {
    this.set("player", Value.fromString(value));
  }

  get play(): BigInt {
    let value = this.get("play");
    return value!.toBigInt();
  }

  set play(value: BigInt) {
    this.set("play", Value.fromBigInt(value));
  }

  get attack(): i32 {
    let value = this.get("attack");
    return value!.toI32();
  }

  set attack(value: i32) {
    this.set("attack", Value.fromI32(value));
  }

  get def(): i32 {
    let value = this.get("def");
    return value!.toI32();
  }

  set def(value: i32) {
    this.set("def", Value.fromI32(value));
  }
}

export class Payment extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Payment entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Payment must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Payment", id.toString(), this);
    }
  }

  static load(id: string): Payment | null {
    return changetype<Payment | null>(store.get("Payment", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get game(): string {
    let value = this.get("game");
    return value!.toString();
  }

  set game(value: string) {
    this.set("game", Value.fromString(value));
  }

  get to(): string {
    let value = this.get("to");
    return value!.toString();
  }

  set to(value: string) {
    this.set("to", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class Withdraw extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Withdraw entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Withdraw must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Withdraw", id.toString(), this);
    }
  }

  static load(id: string): Withdraw | null {
    return changetype<Withdraw | null>(store.get("Withdraw", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get to(): string {
    let value = this.get("to");
    return value!.toString();
  }

  set to(value: string) {
    this.set("to", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}
