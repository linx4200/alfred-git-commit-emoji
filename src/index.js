const alfy = require('alfy');

const MAPPING = {
  initail: {
    desc: '🎉 Initial commit',
    emoji: ':tada:'
  },
  tag: {
    desc: '🔖 Version tag',
    emoji: ':bookmark:'
  },
  feature: {
    desc: '✨ New feature',
    emoji: ':sparkles:'
  },
  bug: {
    desc: '🐛 Bugfix',
    emoji: ' :bug:',
  },
  meta: {
    desc: '📇 Metadata',
    emoji: ' :card_index:'
  },
  documentation: {
    desc: '📚 Documentation',
    emoji: ' :books:'
  },
  'documentation-source': {
    desc: '💡 Documenting source code',
    emoji: ' :bulb:'
  },
  performance: {
    desc: '🐎 Performance',
    emoji: ' :racehorse:'
  },
  style: {
    desc: '💄 Cosmetic',
    emoji: ' :lipstick:'
  },
  // tests: {
  //   desc:🚨  'Tests',
  // emoji: ' :rotating_light:'
  // },
  tests: {
    desc: '✅ Adding a test',
    emoji: ' :white_check_mark:'
  },
  general: {
    desc: 'G️ eneral update  ',
    emoji: '⚡ :zap:'
  },
  improve: {
    desc: '🎨 Improve format/structure',
    emoji: ' :art:'
  },
  refactor: {
    desc: '🔨 Refactor code',
    emoji: ' :hammer:'
  },
  remove: {
    desc: '🔥 Removing code/files',
    emoji: ' :fire:'
  },
  ci: {
    desc: '💚 Continuous Integration',
    emoji: ' :green_heart:'
  },
  security: {
    desc: '🔒 Security',
    emoji: ' :lock:'
  },
  'upgrade-dep': {
    desc: 'U️ pgrading dependencies',
    emoji: '⬆ :arrow_up:'
  },
  'downgrade-dep': {
    desc: 'D️ owngrading dependencies',
    emoji: '⬇ :arrow_down:'
  },
  lint: {
    desc: '👕 Lint',
    emoji: ' :shirt:'
  },
  i18n: {
    desc: '👽 Translation, i18n',
    emoji: ' :alien:'
  },
  typo: {
    desc: '📝 Text',
    emoji: ' :pencil:'
  },
  hotfix: {
    desc: '🚑 Critical hotfix',
    emoji: ' :ambulance:'
  },
  deploy: {
    desc: '🚀 Deploying stuff',
    emoji: ' :rocket:'
  },
  macos: {
    desc: '🍎 Fixing on MacOS',
    emoji: ' :apple:'
  },
  linux: {
    desc: '🐧 Fixing on Linux',
    emoji: ':penguin:'
  },
  windows: {
    desc: '🏁 Fixing on Windows',
    emoji: ':checkered_flag:'
  },
  wip: {
    desc: '🚧 Work in progress',
    emoji: ':construction:'
  },
  'add-ci': {
    desc: '👷 Adding CI build system',
    emoji: ':construction_worker:'
  },
  analytics: {
    desc: '📈 Analytics or tracking code',
    emoji: ':chart_with_upwards_trend:'
  },
  'remove-dep': {
    desc: '➖ Removing a dependency',
    emoji: ':heavy_minus_sign:'
  },
  'add-dep': {
    desc: '➕ Adding a dependency',
    emoji: ':heavy_plus_sign:'
  },
  docker: {
    desc: '🐳 Docker',
    emoji: ':whale:'
  },
  configuration: {
    desc: '🔧 Configuration files',
    emoji: ':wrench:'
  },
  merge: {
    desc: '🔀 Merging branches',
    emoji: ':twisted_rightwards_arrows:'
  },
  bas: {
    desc: '💩 Bad code / need improv.',
    emoji: ':hankey:'
  },
  revert: {
    desc: '⏪ Reverting changes',
    emoji: ':rewind:'
  },
  'breaking-change': {
    desc: '💥 Breaking changes',
    emoji: ':boom:'
  },
  review: {
    desc: '👌 Code review changes',
    emoji: ':ok_hand:'
  },
  accessibility: {
    desc: '♿️ Accessibility',
    emoji: ':wheelchair:'
  }
}

const data = alfy.input;
const perfectMatch = MAPPING[data];
let res = [];

if (!perfectMatch) {
  res = Object.values(MAPPING).filter(m => m.desc.includes(data));
} else {
  res = [perfectMatch];
}

res = res.map(m => ({
  title: m.emoji,
	subtitle: m.desc,
	arg: m.emoji
}));

alfy.output(res);