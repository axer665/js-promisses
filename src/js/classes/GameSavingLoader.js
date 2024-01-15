import read from './../reader';
import toString from './../parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((result) => toString(result))
      .then((result) => JSON.parse(result))
      .then((result) => new GameSaving(result));
  }
}