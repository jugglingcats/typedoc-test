import * as React from "react"
import {render} from "react-dom"
import {ReflectionKind} from "typedoc";

const App = () => {
    const kindString = ReflectionKind.singularString(ReflectionKind.Class)
    return <div>Hello {kindString}</div>
}

render(<App/>, document.getElementById("root"))