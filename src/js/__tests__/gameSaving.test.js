import GameSavingLoader from '../classes/GameSavingLoader';
import GameSaving from '../classes/GameSaving';

test('Load in GameSavingLoader', async () => {
  const expected = new GameSaving({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
  const result = await GameSavingLoader.load();
  expect(result).toEqual(expected);
});