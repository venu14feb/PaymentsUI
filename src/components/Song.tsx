type songType = {
    title:String,
    artist:String
}
const Song = (songProps:songType) :JSX.Element => (
    <div>
        <li>Song: {songProps.title} Artist: {songProps.artist}</li>
    </div>)

export default Song