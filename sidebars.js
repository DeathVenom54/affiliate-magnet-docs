// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    {
      type: 'doc',
      id: 'faq'
    },
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
      items: ['commands/set', 'commands/config', 'commands/affiliate', 'commands/register_commands'],
      link: { type: 'doc', id: 'commands' }
    },
    {
      type: 'category',
      label: 'Options',
      items: ['options/enabled',
        {
          type: 'category',
          label: 'unity',
          items: ['options/unity/affiliate_code', 'options/unity/replace_mode']
        },
        {
          type: 'category',
          label: 'humblebundle',
          items: ['options/humblebundle/partner', 'options/humblebundle/replace_mode']
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
