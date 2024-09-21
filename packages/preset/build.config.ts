import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    './src/index.ts',
  ],
  declaration: true,
  rollup: {
    inlineDependencies: true,
  },
  clean: true,
})
