const ms = import.meta.moduleSystem;

let originModuleMap;

const ccHot = import.meta.ccHot;
if (ccHot) {
    ccHot.preventHotReload = true;
}

globalThis.hotupdate = async function () {
    if (!ms) {
        return;
    }

    let modulesMap = ms.getModules();
    originModuleMap ??= modulesMap;
    
    // reload all modules excluding engine modules
    let modules = Object.keys(modulesMap);
    modules = modules.filter(id => !id.includes('cocos-js') && !id.includes('src/application'));
    await ms.reload(modules);

    let newModuleMap = ms.getModules();

    // custom hot update
    let originNs = originModuleMap["no-schema:/src/chunks/_virtual/main-module.ts"];
    let newNs = newModuleMap["no-schema:/src/chunks/_virtual/main-module.ts"];
    originNs['MainModule'].prototype.updateLabel = newNs['MainModule'].prototype.updateLabel;
    originNs['UpvalueClass'].prototype.getText = newNs['UpvalueClass'].prototype.getText;
}

export {}