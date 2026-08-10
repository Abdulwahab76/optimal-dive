import * as migration_20260809_121900 from './20260809_121900';
import * as migration_20260810_100421 from './20260810_100421';
import * as migration_20260810_110854 from './20260810_110854';

export const migrations = [
  {
    up: migration_20260809_121900.up,
    down: migration_20260809_121900.down,
    name: '20260809_121900',
  },
  {
    up: migration_20260810_100421.up,
    down: migration_20260810_100421.down,
    name: '20260810_100421',
  },
  {
    up: migration_20260810_110854.up,
    down: migration_20260810_110854.down,
    name: '20260810_110854'
  },
];
