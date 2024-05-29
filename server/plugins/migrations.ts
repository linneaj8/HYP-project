import { consola } from 'consola'
import { migrate } from 'drizzle-orm/d1/migrator'

import * as drizzleConf from '../../drizzle.config'

export default defineNitroPlugin(async () => {
    if (!import.meta.dev) return

    await migrate(useDrizzle(), { migrationsFolder: drizzleConf.default.out })
    .then(() => {
        consola.success('Database migrations done')
    })
    .catch((err) => {
        consola.error('Database migrations failed', err)
    })
})
