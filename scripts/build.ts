import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import * as rolldown from '@rolldown/node'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function main() {
  const build = await rolldown.rolldown({
    input: path.resolve(__dirname, '../src/index.js'),
    // plugins: [],
    resolve: {
      conditionNames: [],
      alias: {},
    },
  })

  const result = await build.generate({
    dir: path.join(__dirname, '../dist'),
  })

  console.log({ result })
}

try {
  await main()
} catch (err) {
  console.log(err)
  process.exit(1)
}
