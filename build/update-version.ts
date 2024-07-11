const fs = require("fs")

const updateVersion = async () => {
    const versionJsonPath = './build/version.json'

    function incrementVersion(currentVersion) {
        let [major, minor, patch] = currentVersion.split('.').map(Number);
        patch++;
        return `${major}.${minor}.${patch}`;
    }

    try {
        // 读取 version.json 文件内容
        const fileContent = await fs.promises.readFile(versionJsonPath, 'utf-8');

        // 将文件内容解析为 JSON 对象
        const versionData = JSON.parse(fileContent);

        // 获取当前版本号
        const currentVersion = versionData.version;

        // 更新版本号
        const incrementedVersion = incrementVersion(currentVersion);

        // 更新 version 字段的值
        versionData.version = incrementedVersion;

        // 将更新后的 JSON 对象序列化为字符串
        const updatedFileContent = JSON.stringify(versionData, null, 2); // 保留缩进以保持文件可读性

        // 写入更新后的 version.json 文件
        fs.promises.writeFile(versionJsonPath, updatedFileContent).then(() => {
            console.info(`version [${currentVersion}] Publish Successfully`);
            console.info(`Auto updated version to [${incrementedVersion}] Successfully`);
        })
    } catch (error) {
        console.error('Error updating version:', error);
        process.exit(1);
    }
}

updateVersion()