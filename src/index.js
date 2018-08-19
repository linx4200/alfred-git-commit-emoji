const alfy = require('alfy');
const path = require('path');

const MAPPING = {
  initail: {
    desc: 'Initial commit',
    emoji: ':tada:',
    icon: '1f389'
  },
  tag: {
    desc: 'Version tag',
    emoji: ':bookmark:',
    icon: '1f516'
  },
  feature: {
    desc: 'New feature',
    emoji: ':sparkles:',
    icon: '2728'
  },
  bug: {
    desc: 'Bugfix',
    emoji: ':bug:',
    icon: '1F41B'
  },
  meta: {
    desc: 'Metadata',
    emoji: ':card_index:',
    icon: '1f5c2'
  },
  documentation: {
    desc: 'Documentation',
    emoji: ':books:',
    icon: '1f4da'
  },
  'documentation-source': {
    desc: 'Documenting source code',
    emoji: ':bulb:',
    icon: '1f4a1'
  },
  performance: {
    desc: 'Performance',
    emoji: ':racehorse:',
    icon: '1F3C7'
  },
  style: {
    desc: 'Cosmetic',
    emoji: ':lipstick:',
    icon: '1F484'
  },
  // tests: {
  //   desc:🚨  'Tests',
  // emoji: ':rotating_light:'
  // },
  tests: {
    desc: 'Adding a test',
    emoji: ':white_check_mark:',
    icon: '2705'
  },
  general: {
    desc: ' eneral update  ',
    emoji: '⚡ :zap:',
    icon: '26A1'
  },
  improve: {
    desc: 'Improve format/structure',
    emoji: ':art:',
    icon: '1F3A8'
  },
  refactor: {
    desc: 'Refactor code',
    emoji: ':hammer:',
    icon: '1f528'
  },
  remove: {
    desc: 'Removing code/files',
    emoji: ':fire:',
    icon: '1f525'
  },
  ci: {
    desc: 'Continuous Integration',
    emoji: ':green_heart:',
    icon: '1F49A'
  },
  security: {
    desc: 'Security',
    emoji: ':lock:',
    icon: '1F512'
  },
  'upgrade-dep': {
    desc: ' pgrading dependencies',
    emoji: '⬆ :arrow_up:',
    icon: '2B06'
  },
  'downgrade-dep': {
    desc: ' owngrading dependencies',
    emoji: '⬇ :arrow_down:',
    icon: '2B07'
  },
  lint: {
    desc: 'Lint',
    emoji: ':shirt:',
    icon: '1F455'
  },
  i18n: {
    desc: 'Translation, i18n',
    emoji: ':alien:',
    icon: '1F47D'
  },
  typo: {
    desc: 'Text',
    emoji: ':pencil:',
    icon: '270F'
  },
  hotfix: {
    desc: 'Critical hotfix',
    emoji: ':ambulance:',
    icon: '1F691'
  },
  deploy: {
    desc: 'Deploying stuff',
    emoji: ':rocket:',
    icon: '1F680'
  },
  macos: {
    desc: 'Fixing on MacOS',
    emoji: ':apple:',
    icon: '1F34E'
  },
  linux: {
    desc: 'Fixing on Linux',
    emoji: ':penguin:',
    icon: '1F427'
  },
  windows: {
    desc: 'Fixing on Windows',
    emoji: ':checkered_flag:',
    icon: '1F3C1'
  },
  wip: {
    desc: 'Work in progress',
    emoji: ':construction:',
    icon: '1F6A7'
  },
  'add-ci': {
    desc: 'Adding CI build system',
    emoji: ':construction_worker:',
    icon: '1F477'
  },
  analytics: {
    desc: 'Analytics or tracking code',
    emoji: ':chart_with_upwards_trend:',
    icon: '1F4C8'
  },
  'remove-dep': {
    desc: 'Removing a dependency',
    emoji: ':heavy_minus_sign:',
    icon: '2796'
  },
  'add-dep': {
    desc: 'Adding a dependency',
    emoji: ':heavy_plus_sign:',
    icon: '2795'
  },
  docker: {
    desc: 'Docker',
    emoji: ':whale:',
    icon: '1F433'
  },
  configuration: {
    desc: 'Configuration files',
    emoji: ':wrench:',
    icon: '1F527'
  },
  merge: {
    desc: 'Merging branches',
    emoji: ':twisted_rightwards_arrows:',
    icon: '1f500'
  },
  bas: {
    desc: 'Bad code / need improv.',
    emoji: ':hankey:',
    icon: '1f4a9'
  },
  revert: {
    desc: 'Reverting changes',
    emoji: ':rewind:',
    icon: '23EA'
  },
  'breaking-change': {
    desc: 'Breaking changes',
    emoji: ':boom:',
    icon: '1F4A5'
  },
  review: {
    desc: 'Code review changes',
    emoji: ':ok_hand:',
    icon: '1F44C'
  },
  accessibility: {
    desc: ' Accessibility',
    emoji: ':wheelchair:',
    icon: '267F'
  },
  mock: {
    desc: "🤡 Mocking things.",
    emoji: ":clown_face:",
    icon: '1F921'
  },
}

const data = alfy.input.toLowerCase();
const perfectMatch = MAPPING[data];
let res = [];

if (!perfectMatch) {
  res = Object.values(MAPPING).filter(m => m.desc.toLowerCase().includes(data));
} else {
  res = [perfectMatch];
}

res = res.map(m => ({
  title: m.emoji,
	subtitle: m.desc,
  arg: m.emoji,
  icon: {
    path: path.join(__dirname, `./images/emoji/${m.icon.toLowerCase()}.png`)
  }
}));

alfy.output(res);