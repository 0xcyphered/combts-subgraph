import {
  Withdraw as WithdrawEvent,
  GameCreated,
  GameJoined,
  GameCanceled,
  RivalLeft,
  GameQuitted,
  GamePayment,
  GamePlayed,
  GameScored,
  GameTied,
} from "./types/CombatsV1/CombatsV1";
import { Withdraw, Game, Payment, Play } from "./types/schema";
import { createEventID, createOrLoadAccount, createOrLoadGame } from "./utils";
import { BigInt } from "@graphprotocol/graph-ts";

export function handleGameCreated(event: GameCreated): void {
  let game = new Game(event.params.id.toHex());
  let creator = createOrLoadAccount(event.params.creator.toHex());
  game.creator = creator.id;
  let rival = createOrLoadAccount(event.params.rival.toHex());
  game.rival = rival.id;
  game.bet = event.params.bet;
  game.rounds = event.params.rounds;
  game.roundTime = event.params.roundTime;
  game.leaveTime = event.params.leaveTime;
  game.startDate = event.params.startDate;
  game.save();
}

export function handleGamePlayed(event: GamePlayed): void {
  let play = new Play(createEventID(event));
  let game = createOrLoadGame(event.params.gameID.toHex());
  let player = createOrLoadAccount(event.params.player.toHex());
  play.player = player.id;
  play.game = game.id;
  play.play = event.params.play;
  play.attack = event.params.attack;
  play.def = event.params.def;
  game.isPlayed = true;
  play.save();
  game.save();
}

export function handleGameScored(event: GameScored): void {
  let play = new Play(createEventID(event));
  let game = createOrLoadGame(event.params.gameID.toHex());
  let player = createOrLoadAccount(event.params.player.toHex());
  play.player = player.id;
  if (game.creator === player.id) {
    game.score = game.score ? game.score.plus(new BigInt(1)) : new BigInt(1);
  } else {
    game.rivalScore = game.rivalScore
      ? game.rivalScore.plus(new BigInt(1))
      : new BigInt(1);
  }
  game.save();
}

export function handleGameTied(event: GameTied): void {
  let game = createOrLoadGame(event.params.gameID.toHex());
  game.ties = game.ties ? game.ties.plus(new BigInt(1)) : new BigInt(1);
  game.save();
}

export function handleGameJoined(event: GameJoined): void {
  let game = createOrLoadGame(event.params.gameID.toHex());
  let rival = createOrLoadAccount(event.params.rival.toHex());
  game.rival = rival.id;
  game.isJoined = true;
  game.save();
}

export function handleGameCanceled(event: GameCanceled): void {
  let game = createOrLoadGame(event.params.gameID.toHex());
  game.isCanceled = true;
  game.save();
}

export function handleRivalLeft(event: RivalLeft): void {
  let game = createOrLoadGame(event.params.gameID.toHex());
  // let player = createOrLoadAccount(event.params.player.toHex());
  // game.rival = player.id;
  game.isJoined = false;
  game.save();
}

export function handleGameQuitted(event: GameQuitted): void {
  let game = createOrLoadGame(event.params.gameID.toHex());
  let player = createOrLoadAccount(event.params.player.toHex());
  game.leaver = player.id;
  game.isLeft = false;
  game.save();
}

export function handleGamePayment(event: GamePayment): void {
  let game = createOrLoadGame(event.params.gameID.toHex());
  let player = createOrLoadAccount(event.params.player.toHex());
  let payment = new Payment(createEventID(event));
  payment.to = player.id;
  payment.game = game.id;
  payment.amount = event.params.amount;
  payment.save();
}

export function handleWithdraw(event: WithdrawEvent): void {
  let withdraw = new Withdraw(createEventID(event));
  let user = createOrLoadAccount(event.params.to.toHex());
  withdraw.to = user.id;
  withdraw.amount = event.params.amount;
  withdraw.save();
}
