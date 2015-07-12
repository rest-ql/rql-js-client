({
    include: ["../vendor/almond"],
    optimize: "none",
    baseUrl: "../src",
    cjsTranslate: true,
    wrap: {
        startFile: 'wrap-start.frag.js',
        endFile: 'wrap-end.frag.js'
    }
})