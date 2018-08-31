const alfy = require('alfy');
const path = require('path');

const MAPPING = {
  initail: {
    desc: 'Initial commit.',
    emoji: ':tada:',
    icon: '1f389'
  },
  tag: {
    desc: 'Releasing / Version tags.',
    emoji: ':bookmark:',
    icon: '1f516'
  },
  feature: {
    desc: 'Introducing new features.',
    emoji: ':sparkles:',
    icon: '2728'
  },
  bug: {
    desc: 'Fixing a bug.',
    emoji: ':bug:',
    icon: '1F41B'
  },
  meta: {
    desc: 'Metadata',
    emoji: ':card_index:',
    icon: '1f5c2'
  },
  documentation: {
    desc: 'Writing Documentations.',
    emoji: ':books:',
    icon: '1f4da'
  },
  'documentation-source': {
    desc: 'Documenting source code.',
    emoji: ':bulb:',
    icon: '1f4a1'
  },
  performance: {
    desc: 'Performance',
    emoji: ':racehorse:',
    icon: '1F3C7'
  },
  style: {
    desc: 'Updating the UI and style files.',
    emoji: ':lipstick:',
    icon: '1F484'
  },
  tests: {
    desc: 'Adding tests.',
    emoji: ':white_check_mark:',
    icon: '2705'
  },
  general: {
    desc: 'Improving performance.',
    emoji: ':zap:',
    icon: '26A1'
  },
  improve: {
    desc: 'Improving structure / format of the code.',
    emoji: ':art:',
    icon: '1F3A8'
  },
  refactor: {
    desc: 'Refactoring code.',
    emoji: ':recycle:',
    icon: '267B'
  },
  remove: {
    desc: 'Removing code/files.',
    emoji: ':fire:',
    icon: '1f525'
  },
  ci: {
    desc: 'Fixing CI Build.',
    emoji: ':green_heart:',
    icon: '1F49A'
  },
  security: {
    desc: 'Fixing security issues.',
    emoji: ':lock:',
    icon: '1F512'
  },
  'upgrade-dep': {
    desc: 'Upgrading dependencies.',
    emoji: ':arrow_up:',
    icon: '2B06'
  },
  'downgrade-dep': {
    desc: 'Downgrading dependencies.',
    emoji: ':arrow_down:',
    icon: '2B07'
  },
  'liner-warnings': {
    desc: 'Removing linter warnings.',
    emoji: ':rotating_light:',
    icon: '1F6A8'
  },
  lint: {
    desc: 'Lint',
    emoji: ':shirt:',
    icon: '1F455'
  },
  i18n: {
    desc: 'Internationalization(i18n) and localization.',
    emoji: ':globe_with_meridians:',
    icon: '1F310'
  },
  typo: {
    desc: 'Fixing typos.',
    emoji: ':pencil:',
    icon: '270F'
  },
  hotfix: {
    desc: 'Critical hotfix.',
    emoji: ':ambulance:',
    icon: '1F691'
  },
  deploy: {
    desc: 'Deploying stuff.',
    emoji: ':rocket:',
    icon: '1F680'
  },
  macos: {
    desc: 'Fixing something on macOS.',
    emoji: ':apple:',
    icon: '1F34E'
  },
  linux: {
    desc: 'Fixing something on Linux.',
    emoji: ':penguin:',
    icon: '1F427'
  },
  windows: {
    desc: 'Fixing something on Windows.',
    emoji: ':checkered_flag:',
    icon: '1F3C1'
  },
  android: {
    desc: 'Fixing something on Android.',
    emoji: ':robot:',
    icon: '1F916'
  },
  ios: {
    desc: 'Fixing something on IOS.',
    emoji: ':green_apple:',
    icon: '1F34F'
  },
  wip: {
    desc: 'Work in progress.',
    emoji: ':construction:',
    icon: '1F6A7'
  },
  'add-ci': {
    desc: 'Adding CI build system.',
    emoji: ':construction_worker:',
    icon: '1F477'
  },
  analytics: {
    desc: 'Analytics or tracking code.',
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
    desc: 'Changing configuration files.',
    emoji: ':wrench:',
    icon: '1F527'
  },
  merge: {
    desc: 'Merging branches',
    emoji: ':twisted_rightwards_arrows:',
    icon: '1f500'
  },
  bas: {
    desc: 'Writing bad code that needs to be improved.',
    emoji: ':hankey:',
    icon: '1f4a9'
  },
  revert: {
    desc: 'Reverting changes',
    emoji: ':rewind:',
    icon: '23EA'
  },
  'breaking-change': {
    desc: 'Introducing breaking changes.',
    emoji: ':boom:',
    icon: '1F4A5'
  },
  review: {
    desc: 'Updating code due to code review changes.',
    emoji: ':ok_hand:',
    icon: '1F44C'
  },
  accessibility: {
    desc: 'Improving accessibility.',
    emoji: ':wheelchair:',
    icon: '267F'
  },
  mock: {
    desc: "Mocking things.",
    emoji: ":clown_face:",
    icon: '1F921'
  },
  pin: {
    desc: 'Pinning dependencies to specific versions.',
    emoji: ':pushpin:',
    icon: '1F4CC'
  },
  'update-files': {
    desc: 'Updating compiled files or packages.',
    emoji: ':package:',
    icon: '1F4E6'
  },
  'update-external': {
    desc: 'Updating code due to external API changes.',
    emoji: ':alien:',
    icon: '1F47D'
  },
  rename: {
    desc: 'Moving or renaming files.',
    emoji: ':truck:',
    icon: '1F69A'
  },
  license: {
    desc: 'Adding or updating license.',
    emoji: ':page_facing_up:',
    icon: '1F4C4'
  },
  assets: {
    desc: 'Adding or updating assets.',
    emoji: ':bento:',
    icon: '1F371'
  },
  drunkenly: {
    desc: 'Writing code drunkenly.',
    emoji: ':beers:',
    icon: '1F37B'
  },
  literals: {
    desc: 'Updating text and literals.',
    emoji: ':speech_balloon:',
    icon: '1F4AC'
  },
  database: {
    desc: 'Performing database related changes.',
    emoji: ':card_file_box:',
    icon: '1F5C3'
  },
  'add-log': {
    desc: 'Adding logs.',
    emoji: ':loud_sound:',
    icon: '1F50A'
  },
  'remove-log': {
    desc: 'Removing logs.',
    emoji: ':mute:',
    icon: '1F507'
  },
  contributor: {
    desc: 'Adding contributor(s).',
    emoji: ':busts_in_silhouette:',
    icon: '1F465'
  },
  ux: {
    desc: 'Improving user experience / usability.',
    emoji: ':children_crossing:',
    icon: '1F6B8'
  },
  architectural: {
    desc: 'Making architectural changes.',
    emoji: ':building_construction:',
    icon: '1F3D7'
  },
  responsive: {
    desc: 'Working on responsive design.',
    emoji: ':iphone:',
    icon: '1F4F1'
  },
  gitignore: {
    desc: 'Adding or updating a .gitignore file',
    emoji: ':see_no_evil:',
    icon: '1F648'
  },
  egg: {
    desc: 'Adding an easter egg.',
    emoji: ':egg:',
    icon: '1F95A'
  },
  snapshots: {
    desc: 'Adding or updating snapshots.',
    emoji: ':camera_flash:',
    icon: '1F4F8'
  }
}

const data = alfy.input.toLowerCase();
let res = Object.values(MAPPING).filter(m => m.desc.toLowerCase().includes(data.toLowerCase()));

res = res.map(m => ({
  title: m.emoji,
	subtitle: m.desc,
  arg: m.emoji,
  icon: {
    path: path.join(__dirname, `./images/emoji/${m.icon.toLowerCase()}.png`)
  }
}));

alfy.output(res);