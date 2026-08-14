import * as migration_20260809_121900 from './20260809_121900';
import * as migration_20260810_100421 from './20260810_100421';
import * as migration_20260810_110854 from './20260810_110854';
import * as migration_20260810_111456 from './20260810_111456';
import * as migration_20260814_103932 from './20260814_103932';
import * as migration_20260814_104158 from './20260814_104158';
import * as migration_20260814_105304 from './20260814_105304';
import * as migration_20260814_105515 from './20260814_105515';

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
    name: '20260810_110854',
  },
  {
    up: migration_20260810_111456.up,
    down: migration_20260810_111456.down,
    name: '20260810_111456',
  },
  {
    up: migration_20260814_103932.up,
    down: migration_20260814_103932.down,
    name: '20260814_103932',
  },
  {
    up: migration_20260814_104158.up,
    down: migration_20260814_104158.down,
    name: '20260814_104158',
  },
  {
    up: migration_20260814_105304.up,
    down: migration_20260814_105304.down,
    name: '20260814_105304',
  },
  {
    up: migration_20260814_105515.up,
    down: migration_20260814_105515.down,
    name: '20260814_105515'
  },
];
