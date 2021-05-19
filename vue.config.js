const path = require('path')

module.exports = {
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))

        // const svgRule = config.module.rule('svg');
        // svgRule.uses.clear()
        // svgRule
        //     .use('vue-loader')
        //     .loader('vue-loader') // or `vue-loader-v16` if you are using a preview support of Vue 3 in Vue CLI
        //     .end()
        //     .use('vue-svg-loader')
        //     .loader('vue-svg-loader');
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


