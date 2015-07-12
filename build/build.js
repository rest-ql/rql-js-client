({
    include: ["./rql", "../vendor/almond", "../vendor/q"],
    optimize: "none",
    baseUrl: "../src",
    cjsTranslate: true,
    wrap: {
        startFile: 'wrap-start.frag.js',
        endFile: 'wrap-end.frag.js'
    }
})