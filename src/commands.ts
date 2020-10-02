// eslint-disable-next-line @typescript-eslint/no-var-requires
require('module-alias')(__dirname)

// eslint-disable-next-line import/first
import { commandsRoot } from './_internals'

export const {
  advancement,
  attribute,
  bossbar,
  clear,
  clone,
  comment,
  data,
  datapack,
  debug,
  defaultgamemode,
  difficulty,
  effect,
  enchant,
  execute,
  experience,
  fill,
  forceload,
  gamemode,
  gamerule,
  give,
  help,
  kill,
  list,
  locate,
  locatebiome,
  loot,
  me,
  msg,
  particle,
  playsound,
  raw,
  recipe,
  reload,
  replaceitem,
  say,
  schedule,
  scoreboard,
  seed,
  setblock,
  setidletimeout,
  setworldspawn,
  spawnpoint,
  spectate,
  spreadplayers,
  stopsound,
  summon,
  tag,
  team,
  teammessage,
  teleport,
  tellraw,
  title,
  trigger,
  w,
  weather,
  worldborder,
} = commandsRoot
