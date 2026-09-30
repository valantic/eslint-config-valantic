# eslint-config-valantic docs

Feature docs for this package, one file per exported config flavor, plus two docs on cross-cutting topics. See
[AGENTS.md](../AGENTS.md) for the convention.

- [overview](./overview.md) — what the package is, why it exists, how it's distributed, and which flavor to pick
- [rule-organization](./rule-organization.md) — how `rules/` is organized by category, how the configs compose, and
  how the self-test works
- [base-config](./base-config.md) — `index.js`, the base config for plain JavaScript projects
- [typescript](./typescript.md) — `typescript.js`, for TypeScript projects
- [vue](./vue.md) — `vue.js`, for Vue 3 projects
- [fix](./fix.md) — `fix.js`, layered on top for a separate `--fix` run
- [prettier](./prettier.md) — `prettier.js`, layered on top for projects also running Prettier
- [prettier-vue](./prettier-vue.md) — `prettier-vue.js`, layered on top for Vue projects also running Prettier
