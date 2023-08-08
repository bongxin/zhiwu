import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({

    // ============主题配置============
    // 主题基本选项
    hostname: "https://docs.bongxin.com.cn/zhiwu",
    author: {
        name: "bongxin",
        url: "https://docs.bongxin.com.cn",
        email: "bongxin@126.com"
    },
    favicon: "/favicon.ico",
    hotReload: true,

    // 主题功能选项
    encrypt: {
        // global: true,
        config: {
            // 这会加密整个 guide 目录，并且两个密码都是可用的
            // "/": ["1234", "5678"],
            // 这只会加密 config/page.html
            // "/config/page.html": "1234",
        },
    },

    // 主题布局选项
    // 导航栏
    navbar,
    navbarIcon: false,
    navbarLayout: { start: ["Brand"], center: [], end: ["Links", "Language", "Repo", "Outlook", "Search"] },
    logo: "/logo.svg",
    logoDark: "/images/heroDark.png",
    repo: "vuepress-theme-hope/vuepress-theme-hope",
    repoDisplay: false,
    // navbarAutoHide: 'always',

    // 侧边栏
    sidebar,
    sidebarIcon: false,
    sidebarSorter: "title",
    headerDepth: 3,

    // 路径导航
    breadcrumbIcon: false,

    // 标题
    titleIcon: false,

    // 页脚
    footer: "知屋",
    copyright: "Copyright © 知屋",
    displayFooter: true,

    // 主题外观选项
    fullscreen: true,
    iconAssets: "fontawesome",
    darkmode: "toggle",
    backToTop: true,
    // 纯净模式
    pure: true,


    // ============插件配置============
    plugins: {
        // 博客配置
        blog: true,

        // 评论插件配置
        comment: {
            provider: "Giscus",
            repo: "vuepress-theme-hope/giscus-discussions",
            repoId: "R_kgDOG_Pt2A",
            category: "Announcements",
            categoryId: "DIC_kwDOG_Pt2M4COD69",
        },

        // 版权信息插件配置
        copyright: {
            global: true,
            disableSelection: true,
        },

        // MdEnhance 插件配置
        mdEnhance: {
            align: true,
            attrs: true,
            chart: true,
            codetabs: true,
            demo: true,
            echarts: true,
            figure: true,
            flowchart: true,
            gfm: true,
            imgLazyload: true,
            imgSize: true,
            include: true,
            katex: true,
            mark: true,
            mermaid: true,
            playground: {
                presets: ["ts", "vue"],
            },
            presentation: ["highlight", "math", "search", "notes", "zoom"],
            stylize: [
                {
                    matcher: "Recommended",
                    replacer: ({ tag }) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: { type: "tip" },
                                content: "Recommended",
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            tabs: true,
            vPre: true,
            vuePlayground: true,
        },

        // PWA插件配置
        pwa: {
            favicon: "/favicon.ico",
            cacheHTML: true,
            cachePic: true,
            appendBase: true,
            apple: {
                icon: "/assets/icon/apple-icon-152.png",
                statusBarColor: "black",
            },
            msTile: {
                image: "/assets/icon/ms-icon-144.png",
                color: "#ffffff",
            },
            manifest: {
                icons: [
                    {
                        src: "/assets/icon/chrome-mask-512.png",
                        sizes: "512x512",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-mask-192.png",
                        sizes: "192x192",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                ],
                shortcuts: [
                    {
                        name: "Demo",
                        short_name: "Demo",
                        url: "/demo/",
                        icons: [
                            {
                                src: "/assets/icon/guide-maskable.png",
                                sizes: "192x192",
                                purpose: "maskable",
                                type: "image/png",
                            },
                        ],
                    },
                ],
            },
        },
    },
});
