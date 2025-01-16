import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// Sidebar configuration for Loreum Docs
// Organizes the categories and pages for the documentation site.

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'intro', // Refers to docs/intro.md
        'getting-started', // Refers to docs/getting-started.md
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts', 
      items: [
        'core/overview', // Refers to docs/core/overview.md
        'core/architecture', // Refers to docs/core/architecture.md
        'core/governance', // Refers to docs/core/governance.md
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
            'guides/setup/local-installation', // Refers to docs/guides/setup/local-installation.md
            'guides/setup/cloud-deployment', // Refers to docs/guides/setup/cloud-deployment.md
          ],
        },
        {
          type: 'category',
          label: 'Advanced',
          items: [
            'guides/advanced/query-optimization', // Refers to docs/guides/advanced/query-optimization.md
            'guides/advanced/token-integration', // Refers to docs/guides/advanced/token-integration.md
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/overview', // Refers to docs/api/overview.md
        'api/endpoints', // Refers to docs/api/endpoints.md
      ],
    },
    {
      type: 'link',
      label: 'GitHub',
      href: 'https://github.com/Loreum',
    },
  ],
};

export default sidebars;
