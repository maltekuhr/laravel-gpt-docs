import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
    lang: 'en-US',
    description: 'The official documentation for LaravelGPT',
    theme: defaultTheme({
        logo: '/logo/light.svg',
        logoDark: '/logo/dark.svg',
        repo: 'maltekuhr/laravel-gpt-docs',
        navbar: [
/*            {
                text: 'Foo',
                link: '/foo/',
            },*/
        ]
    })
})