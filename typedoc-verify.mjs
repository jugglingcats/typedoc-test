import {Application, TSConfigReader, TypeDocReader} from "typedoc"

const app = new Application()
app.options.addReader(new TypeDocReader())
app.options.addReader(new TSConfigReader())

app.bootstrap({
    entryPoints: ["./test.ts"],
    tsconfig: "./tsconfig.json",
    skipErrorChecking: true
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
