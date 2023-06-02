/*
 * Copyright (c) 2023. Glowbuzzer. All rights reserved
 */

import {Application, TSConfigReader, TypeDocReader} from "typedoc"

const entryPoint = "./test.ts"
const tsconfig = "./tsconfig.doc.json"

console.log("Generate typedoc, entryPoint=", entryPoint, "tsconfig=", tsconfig)

const app = new Application()
app.options.addReader(new TypeDocReader())
app.options.addReader(new TSConfigReader())

app.bootstrap({
    entryPoints: [entryPoint],
    tsconfig,
})

try {
    const project = app.convert()

    if (project) {
        app.serializer.toObject(project)
    } else {
        console.log("No typedoc generated!")
    }
} catch (error) {
    throw error
}
