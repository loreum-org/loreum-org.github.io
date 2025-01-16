// Sidebar configuration for Loreum Docs
// Organizes the categories and pages for the documentation site.

module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'why-loreum',
      label: 'Why Loreum?',
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'core/overview',
        'core/architecture',
        'core/governance',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'category',
          label: 'Setup',
          items: [
            'guides/setup/local-installation',
            'guides/setup/cloud-deployment',
          ],
        },
        {
          type: 'category',
          label: 'Advanced',
          items: [
            'guides/advanced/query-optimization',
            'guides/advanced/token-integration',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/overview',
        'api/endpoints',
      ],
    },
  ],
};
