// docs/.vitepress/theme/data/skills.ts
export interface Skill {
  id: string;
  name: string;
  description: string;
  author: string;
  authorUrl?: string; // Optional URL for author profile
  version: string;
  category: string;
  tags: string[];
  platform: ('claude' | 'chatgpt' | 'codex' | 'antigravity')[];
  content: string; // The actual prompt content
  downloads: number;
  featured?: boolean;
  updatedAt: string; // ISO date string
}

export const skills: Skill[] = [
  {
    id: 'deep-research',
    name: 'Deep Research Assistant',
    description: 'An autonomous agent that conducts deep web research, summarizes findings across multiple sources, and generates a comprehensive report with citations.',
    author: 'OhMySkills Team',
    version: '1.2.0',
    category: 'Research',
    tags: ['research', 'summary', 'report', 'web-browsing'],
    platform: ['claude', 'chatgpt', 'antigravity'],
    content: `You are a Deep Research Assistant. Your goal is to provide comprehensive, well-researched answers based on multiple credible sources.

Step 1: Understand the user's query and break it down into key search topics.
Step 2: Use your browsing tool to search for each topic.
Step 3: Analyze the content found. Cross-reference facts.
Step 4: Compile a final report with an Executive Summary, Key Findings, and References.
    `,
    downloads: 1240,
    featured: true,
    updatedAt: '2024-03-15'
  },
  {
    id: 'n8n-io-n8n-claude-skills-create-pr-skill-md',
    name: 'Create PR',
    description: 'Creates GitHub pull requests with properly formatted titles that pass the check-pr-title CI validation. Use when creating PRs, submitting changes for review, or when the user says /pr.',
    author: 'n8n-io',
    version: '1.0.0',
    category: 'Development',
    tags: ['github', 'pull-request', 'workflow', 'automation', 'CI'],
    platform: ['claude', 'codex'],
    content: `
# Create GitHub PR

Creates GitHub pull requests with properly formatted titles.

Use this skill when:
- Creating PRs
- Submitting changes for review
- User says /pr or "create a pull request"

## Instructions

1.  Check the current branch.
2.  Format the PR title according to Conventional Commits (e.g., feat:, fix:, chore:).
3.  Ensure the title passes the 'check-pr-title' CI validation.
4.  Generate a PR description summarizing the changes.
5.  Use the GitHub CLI or API to create the pull request.
`,
    downloads: 169800,
    featured: true,
    updatedAt: '2026-01-19'
  },
  {
    id: 'f-awesome-chatgpt-prompts-plugins-claude-prompts-chat-skills-skill-lookup-skill-md',
    name: 'Skill Lookup',
    description: 'Activates when the user asks about Agent Skills, wants to find reusable AI capabilities, needs to install skills, or mentions skills for Claude. Use for discovering, retrieving, and installing skills.',
    author: 'f',
    version: '1.0.0',
    category: 'Tools',
    tags: ['skills', 'discovery', 'installation', 'claude-plugins'],
    platform: ['claude', 'chatgpt'],
    content: `
# Skill Lookup

Helps users find and install Agent Skills.

## Activation
- User asks about "Agent Skills"
- User mentions specific skill names for installation
- User needs to find reusable AI capabilities

## Actions
1.  Search the internal skill registry or external marketplace (if configured).
2.  Provide skill descriptions, author info, and installation commands.
3.  Format output clearly with installation code blocks.
`,
    downloads: 142700,
    featured: true,
    updatedAt: '2026-01-19'
  },
  {
    id: 'f-awesome-chatgpt-prompts-plugins-claude-prompts-chat-skills-prompt-lookup-skill-md',
    name: 'Prompt Lookup',
    description: 'Activates when the user asks about AI prompts, needs prompt templates, wants to search for prompts, or mentions prompts.chat. Use for discovering, retrieving, and improving prompts.',
    author: 'f',
    version: '1.0.0',
    category: 'Tools',
    tags: ['prompts', 'templates', 'search', 'improvement'],
    platform: ['claude', 'chatgpt'],
    content: `
# Prompt Lookup

Assists in finding and utilizing high-quality prompts.

## Activation
- User asks for prompt templates
- User searches for prompts
- User mentions "prompts.chat"

## Actions
1.  Query the prompt database based on user intent.
2.  Retrieve relevant prompt content.
3.  Suggest improvements or variations if requested.
`,
    downloads: 142700,
    featured: true,
    updatedAt: '2026-01-19'
  },
  {
    id: 'vercel-next-js-claude-plugin-plugins-cache-components-skills-cache-components-skill-md',
    name: 'Next.js Cache Components',
    description: 'Expert guidance for Next.js Cache Components and Partial Prerendering (PPR). Proactively guides component authoring, data fetching, and caching decisions in Next.js projects.',
    author: 'vercel',
    version: '1.0.0',
    category: 'Development',
    tags: ['nextjs', 'caching', 'performance', 'react', 'ppr'],
    platform: ['claude'],
    content: `
# Next.js Cache Components

Expert guidance for Next.js caching strategies.

## Triggers
- \`cacheComponents: true\` detected in next.config.ts/js
- User asks about 'use cache', 'cacheLife', 'cacheTag'
- User needs help with static vs dynamic content

## Best Practices
- Advise on 'use cache' directive placement.
- Optimize cache lifetimes with cacheLife().
- Implement cache invalidation with updateTag()/revalidateTag().
- Debug cache misses and hits.
`,
    downloads: 137200,
    featured: true,
    updatedAt: '2026-01-19'
  },
  {
    id: 'langgenius-dify-claude-skills-frontend-code-review-skill-md',
    name: 'Frontend Code Review',
    description: 'Trigger when the user requests a review of frontend files (e.g., .tsx, .ts, .js). Support both pending-change reviews and focused file reviews while applying checklist rules.',
    author: 'langgenius',
    version: '1.0.0',
    category: 'Development',
    tags: ['code-review', 'frontend', 'react', 'checklist', 'best-practices'],
    platform: ['claude'],
    content: `
# Frontend Code Review (Dify)

Conducts thorough reviews of frontend code.

## Scopes
- File types: .tsx, .ts, .js
- Contexts: Pending changes, specific file requests

## Review Checklist
1.  Check for component modularity and reusability.
2.  Verify type safety (TypeScript).
3.  Ensure React hooks rules are followed.
4.  Performance check (memoization, render cycles).
5.  Accessibility compliance.
`,
    downloads: 126400,
    featured: true,
    updatedAt: '2026-01-19'
  },
   {
    id: 'langgenius-dify-claude-skills-component-refactoring-skill-md',
    name: 'Component Refactoring',
    description: 'Refactor high-complexity React components in Dify frontend. Use when complexity > 50 or lineCount > 300, or when code splitting is requested. Suggests hook extraction and structure improvements.',
    author: 'langgenius',
    version: '1.0.0',
    category: 'Development',
    tags: ['refactoring', 'react', 'clean-code', 'complexity-reduction'],
    platform: ['claude'],
    content: `
# Component Refactoring

Specialized in reducing React component complexity.

## Triggers
- Complexity > 50
- Line count > 300
- User asks for "code splitting" or "refactoring"

## Strategies
1.  Extract logic into custom hooks.
2.  Split large components into smaller sub-components.
3.  Keep render functions pure and small.
4.  Avoid deep props prop-drilling (suggest Context or Composition).
`,
    downloads: 126400,
    featured: false,
    updatedAt: '2026-01-19'
  },
   {
    id: 'langgenius-dify-claude-skills-orpc-contract-first-skill-md',
    name: 'oRPC Contract First',
    description: 'Guide for implementing oRPC contract-first API patterns. Triggers when creating new API contracts, adding endpoints, or integrating TanStack Query with typed contracts.',
    author: 'langgenius',
    version: '1.0.0',
    category: 'Development',
    tags: ['api', 'orpc', 'contract-first', 'typescript', 'tanstack-query'],
    platform: ['claude'],
    content: `
# oRPC Contract First

Implementing typesafe API contracts.

## Usage
- Creating new API contracts.
- Adding service endpoints in web/contract or web/service.
- Migrating legacy calls to oRPC.

## Guidelines
1.  Define the contract schema first.
2.  Generate TypeScript types from schema.
3.  Implement the service logic matching the contract.
4.  Consume with TanStack Query integration.
`,
    downloads: 126400,
    featured: false,
    updatedAt: '2026-01-19'
  },
   {
    id: 'langgenius-dify-claude-skills-skill-creator-skill-md',
    name: 'Skill Creator',
    description: 'Guide for creating effective skills. Use when users want to create a new skill or update an existing one extending capabilities with specialized knowledge, workflows, or tool integrations.',
    author: 'langgenius',
    version: '1.0.0',
    category: 'Tools',
    tags: ['meta-skill', 'guide', 'creation', 'workflows'],
    platform: ['claude'],
    content: `
# Skill Creator

Helps users build new Agent Skills.

## Process
1.  Identify the unique capability or workflow.
2.  Define the trigger conditions (when should the agent use this?).
3.  Write clear instructions in SKILL.md format.
4.  Add necessary scripts or templates.
5.  Create a marketplace.json for distribution.
`,
    downloads: 126400,
    featured: true,
    updatedAt: '2026-01-19'
  },
  {
    id: 'langgenius-dify-claude-skills-frontend-testing-skill-md',
    name: 'Frontend Testing',
    description: 'Generate Vitest + React Testing Library tests for components, hooks, and utilities. Triggers on testing requests, spec files coverage, or write/review test requests.',
    author: 'langgenius',
    version: '1.0.0',
    category: 'Testing & Security',
    tags: ['testing', 'vitest', 'react-testing-library', 'frontend', 'qa'],
    platform: ['claude'],
    content: `
# Frontend Testing Generator

Automates test creation for React applications.

## Targets
- Components (.tsx)
- Hooks (.ts)
- Utilities (.ts)

## Tools
- Vitest
- React Testing Library

## Output
Generates comprehensive test cases covering rendering, user interactions, and edge cases.
`,
    downloads: 126400,
    featured: false,
    updatedAt: '2026-01-19'
  },
  {
    id: 'langgenius-dify-claude-skills-vercel-react-best-practices-skill-md',
    name: 'Vercel React Best Practices',
    description: 'React and Next.js performance optimization guidelines from Vercel Engineering. Use when writing, reviewing, or refactoring code to ensure optimal performance patterns.',
    author: 'langgenius',
    version: '1.0.0',
    category: 'Development',
    tags: ['react', 'nextjs', 'performance', 'best-practices', 'vercel'],
    platform: ['claude'],
    content: `
# Vercel React Best Practices

Performance guidelines for Next.js and React.

## Focus Areas
- Server Components vs Client Components.
- Data fetching strategies (Parallel, Sequential).
- Image optimization.
- Bundle size reduction.
- Web Vitals formatting (LCP, CLS, INP).
`,
    downloads: 126400,
    featured: true,
    updatedAt: '2026-01-19'
  },
  {
    id: 'electron-electron-claude-skills-electron-chromium-upgrade-skill-md',
    name: 'Electron Chromium Upgrade',
    description: 'Guide for performing Chromium version upgrades in the Electron project. Use when working on the roller/chromium/main branch to fix patch conflicts during sync.',
    author: 'electron',
    version: '1.0.0',
    category: 'Development',
    tags: ['electron', 'chromium', 'upgrade', 'maintenance', 'c++'],
    platform: ['claude'],
    content: `
# Electron Chromium Upgrade

Guide for upgrading the internal Chromium version in Electron.

## Workflow
1.  Sync with upstream Chromium.
2.  Resolve patch conflicts in \`patches/\`.
3.  Verify compilation and tests.
4.  Commit changes with proper formatting.
`,
    downloads: 119800,
    featured: false,
    updatedAt: '2026-01-18'
  },
  {
    id: 'pytorch-pytorch-claude-skills-at-dispatch-v2-skill-md',
    name: 'PyTorch Dispatch V2',
    description: 'Convert PyTorch AT_DISPATCH macros to AT_DISPATCH_V2 format in ATen C++ code. Use when porting dispatch macros to the new v2 API for kernel files and operator implementations.',
    author: 'pytorch',
    version: '1.0.0',
    category: 'Development',
    tags: ['cpp', 'pytorch', 'migration', 'macros', 'optimization'],
    platform: ['claude'],
    content: `
# PyTorch Dispatch V2 Migration

Helper for modernizing PyTorch ATen dispatch macros.

## Task
Replace legacy \`AT_DISPATCH_ALL_TYPES_AND*\` macros with \`AT_DISPATCH_V2\`.

## Benefits
- Improved compile times.
- Better error messages.
- Simplified macro maintenance.
`,
    downloads: 96700,
    featured: false,
    updatedAt: '2026-01-19'
  }
];
