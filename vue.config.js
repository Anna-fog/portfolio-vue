const path = require('path')

module.exports = {
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
        // config.module.rule("svg")
        //     .oneOf("inline")
        //     .resourceQuery(/inline/)
        //     .use("svg-url-loader")
        //     .loader("svg-url-loader")
        //     .end()
        //     .end()
        //     .oneOf("external")
        //     .use("vue-svg-loader")
        //     .loader("vue-svg-loader");
    },
}

function addStyleResource (rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/assets/styles/styles.scss'),
                path.resolve(__dirname, './src/assets/styles/base/variables.scss'),
            ],
        })
}


