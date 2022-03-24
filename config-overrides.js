
module.exports = {
    resolve: {
        fallback: {
            url: require.resolve("url"),
            stream: require.resolve("stream-browserify")
        }
    }
}