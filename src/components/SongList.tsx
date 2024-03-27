import Song from "./Song"
import { useState } from "react"

const SongList = ():JSX.Element => {
    return  (
    <div style={{}}>
        <h2>List of songs</h2>
        <ul><Song title="abc" artist="mvnv"/></ul>
        <ul><Song title="mbm" artist="oasdk"/></ul>
    </div>)
}

export default SongList