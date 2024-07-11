export interface customDataInterface {
    excel: any;
    word: any;
    txt: any;
    zip: any;
    image: any;
    video: any;
    ppt: any;
    pdf: any;
    audio: any;
    unknow: any;
}
export interface iconFieldInter {
    type: string;
    icon: string;
}

export interface fieldInter {
    name?: string;
    url?: string;
    suffix?: string;
    size?: number
}

type FileType = "excel" | "zip" | "image" | "video" | "audio" | "pdf" | "txt" | "word" | "ppt" | "exe" | "json" | "unknown";

export const getFileType = (file: any, mixDefaultField: any): FileType => {
    const __type = file?.response?.data
        ? getFileAttr(file?.response?.data?.suffix)
        : file.raw?.type || getFileAttr(file[mixDefaultField.suffix]);
    const type = __type?.toLowerCase()
    // 创建一个映射表，将文件类型映射到简化的类别标识
    const typeMap: {[key: string]: FileType} = {
        "sheet": "excel",
        "excel": "excel",
        "zip": "zip",
        "application/x-compressed": "zip",
        "image": "image",
        "video": "video",
        "audio": "audio",
        "pdf": "pdf",
        "text": "txt",
        "txt": "txt",
        "word": "word",
        "ppt": "ppt",
        "exe": "exe",
        "json": "json"
    };

    // 检查给定的type是否在映射表中
    for (let key in typeMap) {
        if (typeof type === 'string' && (type.includes(key) || type === key)) {
            return typeMap[key];
        }
    }
    // 如果type没有在映射表中找到对应项，考虑记录一个警告或错误
    return "unknown";
}

// 定义文件类型映射
const fileTypeMap: any = {
    ".doc": "word",
    ".docx": "word",
    ".docxf": "word",
    ".docm": "word",
    ".dot": "word",
    ".dotm": "word",
    ".dotx": "word",
    ".epub": "word",
    ".fodt": "word",
    ".htm": "word",
    ".html": "word",
    ".mht": "word",
    ".odt": "word",
    ".ott": "word",
    ".rtf": "word",
    ".djvu": "word",
    ".oxps": "word",
    ".oform": "word",
    ".fb2": "word",
    ".xml": "word",
    ".xps": "word",
    ".csv": "excel",
    ".xls": "excel",
    ".xlsx": "excel",
    ".fods": "excel",
    ".ods": "excel",
    ".ots": "excel",
    ".xlsb": "excel",
    ".xlsm": "excel",
    ".xlt": "excel",
    ".xltm": "excel",
    ".xltx": "excel",
    ".fodp": "ppt",
    ".odp": "ppt",
    ".otp": "ppt",
    ".pot": "ppt",
    ".potm": "ppt",
    ".potx": "ppt",
    ".pps": "ppt",
    ".ppsm": "ppt",
    ".ppsx": "ppt",
    ".ppt": "ppt",
    ".pptm": "ppt",
    ".pptx": "ppt",
    ".zip": "zip",
    ".rar": "zip",
    ".7z": "zip",
    ".apz": "zip",
    ".ar": "zip",
    ".bz": "zip",
    ".car": "zip",
    ".dar": "zip",
    ".cpgz": "zip",
    ".f": "zip",
    ".ha": "zip",
    ".hbc": "zip",
    ".hbc2": "zip",
    ".hbe": "zip",
    ".hpk": "zip",
    ".hyp": "zip",
    ".png": "image",
    ".jpg": "image",
    ".jpeg": "image",
    ".bmp": "image",
    ".gif": "image",
    ".webp": "image",
    ".psd": "image",
    ".svg": "image",
    ".tiff": "image",
    ".avi": "video",
    ".wmv": "video",
    ".mpeg": "video",
    ".mp4": "video",
    ".mpm4v": "video",
    ".mov": "video",
    ".asf": "video",
    ".flv": "video",
    ".f4v": "video",
    ".rmvb": "video",
    ".rm": "video",
    ".3gp": "video",
    ".vob": "video",
    ".txt": "txt",
    ".pdf": "pdf",
};

// 根据文件后缀名获取文件类型属性
export const getFileAttr = (suffix: string) => {
    const letter = suffix?.toLocaleLowerCase();
    const fixStr = letter?.startsWith(".") ? letter : `.${letter}`;
    if (!fixStr) {
        return "unknow";
    }
    // 尝试获取映射的文件类型，如果不存在则返回"unknow"
    return fileTypeMap[fixStr] || "unknow";
};


export const getFileTypes = (fileType: string) => {
    let docType = "";
    let fileTypesDoc = ["doc", "docx"];
    let fileTypesCell = ["xls", "xlsx"];
    let fileTypesSlide = ["ppt", "pptx"];
    let fileTypesPPt = ["pdf"];
    if (fileTypesDoc.includes(fileType)) {
        docType = "word";
    }
    if (fileTypesCell.includes(fileType)) {
        docType = "cell";
    }
    if (fileTypesSlide.includes(fileType)) {
        docType = "slide";
    }
    if (fileTypesPPt.includes(fileType)) {
        docType = "text-pdf";
    }
    return docType;
};
