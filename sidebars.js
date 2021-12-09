// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    {
      type: 'doc',
      id: 'intro'
    },
    {
      type: 'doc',
      id: 'invite'
    },
    {
      type: 'category',
      label: 'Commands',
      items: ['commands', 'commands/set', 'commands/config', 'commands/affiliate', 'commands/register'],
    },
    {
      type: 'category',
      label: 'Options',
      items: ['options/enabled',
        {
          type: 'category',
          label: 'unity',
          items: ['options/unity/code', 'options/unity/mode']
        }],
    },
    {
      type: 'category',
      label: 'Extras',
      items: ['misc/command-types'],
    },
  ],
};

module.exports = sidebars;
