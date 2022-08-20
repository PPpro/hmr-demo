let originModuleMap;

window.hotupdate = async function () {
    let modules = [];

    let firstUpdate = !originModuleMap;

    if (firstUpdate) {
        originModuleMap = {};
    } 

    let oldEntries = System.entries();
    for (let it of oldEntries) {
        const [key, ns] = it;
        modules.push(key);
        if (firstUpdate) {
            originModuleMap[key] = ns;
        }
    }
    
    // reload all modules excluding engine modules
    modules = modules.filter(id => !id.includes('cocos-js') && !id.includes('src/application'));
    await System.reload(modules);

    let newModuleMap = {};
    let newEntries = System.entries();
    for (let it of newEntries) {
        const [key, ns] = it;
        newModuleMap[key] = ns;
    }

    // custom hot update
    let originNs = originModuleMap["chunks:///_virtual/main-module.ts"];
    let newNs = newModuleMap["chunks:///_virtual/main-module.ts"];
    originNs.mainModule.prototype.updateLabel = newNs.mainModule.prototype.updateLabel;
}