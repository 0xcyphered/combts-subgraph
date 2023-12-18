// Import types and APIs from graph-ts
import { ethereum, log } from "@graphprotocol/graph-ts";
import { Account, Game } from "./types/schema";

export function createEventID(event: ethereum.Event): string {
  return event.block.number
    .toString()
    .concat("-")
    .concat(event.logIndex.toString());
}

export function createOrLoadAccount(address: string): Account {
  let account = Account.load(address);
  if (account == null) {
    account = new Account(address);
    account.save();
  }

  return account;
}

export function createOrLoadGame(id: string): Game {
  let game = Game.load(id);
  if (game == null) {
    game = new Game(id);
    game.save();
  }

  return game;
}