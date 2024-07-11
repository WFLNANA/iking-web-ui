// const uitils = require("./uitils")
//import type { ProjectManifest } from "@pnpm/types"
const {copyFile, mkdir} = require("fs/promises")
const {viteStaticCopy} = require("vite-plugin-static-copy")
const path = require("path")
const fsExtra = require("fs-extra")
const fs = require("fs")
const {defineConfig, build} = require("vite")
const vue = require("@vitejs/plugin-vue")
const vueJsx = require("@vitejs/plugin-vue-jsx")
const ts = require("typescript")
const dts = require("vite-plugin-dts").default
const {createLogger} = require("vite")

const {version} = require('./version.json')
console.log('\x1B[32m[Iking Web UI]当前发布版本: ', version);

const logger = createLogger()

logger.info = (msg) => {
    if (msg.includes('dist')) {
        return
    }
    console.info('\x1B[32m[Iking Web UI]:', msg)
}

logger.warn = (msg) => {
    // 忽略空 CSS 文件的警告
    if (msg.includes('larger than')) {
        console.info('\x1B[33m[Iking Web UI (warn)]:', '存在打包后的文件大小大于1000 kb的文件，建议优化')
    } else if (msg.includes('Nested CSS')) {
        console.info('\x1B[33m[Iking Web UI (warn)]: [vite:css] Nested CSS was detected, but CSS nesting has not been configured correctly')
    } else if (!msg.includes('[plugin:vite')) {
        console.info('\x1B[33m[Iking Web UI (warn)]: ', msg)
    }
}

// 根目录
const projRoot = path.resolve(__dirname, "..")
// src
const pkgRoot = path.resolve(projRoot, "src")
// components
const entryDir = path.resolve(pkgRoot, "components")

// dist/iking-web-ui-pro
const outputIk = path.resolve(projRoot, "iking-web-ui-pro")
// dist
const outputDir = path.resolve(outputIk, "dist")

// src/iking-ui
const epRoot = path.resolve(pkgRoot, "iking-ui")
// src/iking-ui/package.json
const epPackage = path.resolve(epRoot, "package.json")
const folderPath = path.join(projRoot, "iking-web-ui-pro")

if (fs.existsSync(folderPath)) fs.rmdirSync(folderPath, {recursive: true})

fs.readFile(epPackage, "utf8", (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    const file = JSON.parse(data)

    file.version = version
    fsExtra.outputFile(epPackage, JSON.stringify(file, null, 2), "utf-8")
})

const baseConfig = defineConfig({
    configFile: false,
    publicDir: false,
    plugins: [
        vue({
            script: {
                defineModel: true
            }
        }),
        vueJsx(),
        dts()
    ],
    css: {
        postcss: {
            plugins: []
        }
    },
    logLevel: 'error',
    customLogger: logger,
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       /* 自动引入全局scss文件 */
    //       additionalData: '@import "../src/theme/global.scss";'
    //     }
    //   }
    // }
})

const changePackageJson = (name) => {
    fs.readFile(
        path.resolve(entryDir, `${name}/package.json`),
        "utf8",
        (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            let file = JSON.parse(data)
            file = {
                ...file,
                main: "index.umd.js",
                module: "index.es.js",
                style: "style.css"
            }
            fsExtra.outputFile(
                path.resolve(outputDir, `${name}/package.json`),
                JSON.stringify(file, null, 2),
                "utf-8"
            )
        }
    )
}

const createDeclare = (name) => {
    viteStaticCopy({
        targets: [{src: `"${pkgRoot}/${name}/.d.ts`, dest: "."}]
    })
    // const filePath = path.resolve(entryDir, `${name}/index.ts`)
    // const fileContent = fs.readFileSync(filePath)
    // fs.writeFileSync(path.resolve(outputDir, `${name}/index.d.ts`), fileContent)
}

const getPackageManifest = (pkgPath) => {
    return require(pkgPath)
}
const getPackageDependencies = (pkgPath) => {
    const manifest = getPackageManifest(pkgPath)
    const {dependencies = {}, peerDependencies = {}} = manifest

    return {
        dependencies: Object.keys(dependencies),
        peerDependencies: Object.keys(peerDependencies)
    }
}
const generateExternal = async (flag) => {
    const {dependencies, peerDependencies} = getPackageDependencies(epPackage)
    return (id) => {
        const packages = [...peerDependencies]
        if (!flag) {
            packages.push("@vue", ...dependencies)
        }

        return [...new Set(packages)].filter(
            (pkg) => id === pkg || id.startsWith(`${pkg}/`)
        )
    }
}

const buildAll = async () => {
    // const fn = await generateExternal(false);
    await build(
        defineConfig({
            ...baseConfig,
            build: {
                rollupOptions: {
                    logLevel: 'error',
                    onLog: (lev, log, hander) => {
                        // console.log(lev, log,hander)
                    },
                    external: ['vue', 'lodash-es', 'element-plus', 'iking-utils-pro', 'axios', 'vuedraggable'],
                    output: {
                        globals: {
                            vue: "vue",
                            axios: "axios",
                            "lodash-es": "lodash-es",
                            "element-plus": "element-plus",
                            "iking-utils-pro": "iking-utils-pro",
                            vuedraggable: "vuedraggable"
                        }
                    }
                },
                lib: {
                    entry: path.resolve(entryDir, "index.ts"),
                    name: "index",
                    fileName: (format) => `index.${format}.js`
                },
                outDir: outputDir
            }
        })
    )
}

const buildSingle = async (name) => {
    await build(
        defineConfig({
            ...baseConfig,

            build: {
                rollupOptions: {
                    logLevel: 'error',
                    onLog: (lev, log, hander) => {
                        // console.log(lev, log,hander)
                    },
                    external: ['vue', 'lodash-es', 'element-plus', 'iking-utils-pro', 'axios', 'vuedraggable'],
                    output: {
                        globals: {
                            vue: "vue",
                            "element-plus": "element-plus",
                            "iking-utils-pro": "iking-utils-pro",
                            vuedraggable: "vuedraggable"
                        }
                    }
                },
                lib: {
                    entry: path.resolve(entryDir, name),
                    name: "index",
                    fileName: (format) => `ik.index.${format}.js`
                },
                outDir: path.resolve(outputDir, name)
            }
        })
    )
}

const buildLib = async () => {
    await buildAll()
    // 获取组件名称组成的数组
    const components = fs.readdirSync(entryDir).filter((name) => {
        const componentDir = path.resolve(entryDir, name)
        const isDir = fs.lstatSync(componentDir).isDirectory()
        return isDir && fs.readdirSync(componentDir).includes("index.ts") && !name.endsWith("-beta")
    })

    const len = components.length
    let num = 1
    for (const name of components) {
        console.info(`\x1B[33m===================开始构建=> ${name} ${num}/${len}`);
        await buildSingle(name)
        console.info(`\x1B[33m===================构建完成=> ${name} ${num}/${len}\n\n`);
        num++
        // changePackageJson(name)
    }
    copyFile(epPackage, path.join(outputIk, "package.json"))
}
buildLib()