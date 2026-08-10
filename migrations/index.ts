import * as migration_20260809_121900 from './20260809_121900';

export const migrations = [
  {
    up: migration_20260809_121900.up,
    down: migration_20260809_121900.down,
    name: '20260809_121900'
  },
];
