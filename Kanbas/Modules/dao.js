import Database from "../Database/index.js";
export function findModulesForCourse(courseId) {
    const { modules } = Database;
    return modules.filter((module) => module.course === courseId);
}
export function createModule(module) {
    console.log("Before adding the module:", Database.modules.length) 
    const newModule = { ...module, _id: Date.now().toString() };
    // Database.modules = [...Database.modules, newModule];
    Database.modules.push(newModule);
    console.log("New Module ID:", newModule._id)
    console.log("After adding the module:", Database.modules.length) 
    return newModule;
}
export function deleteModule(moduleId) {
    const { modules } = Database;
    console.log("Module ID to delete:", moduleId)
    console.log("Before deleting the module", Database.modules.length )
    Database.modules = modules.filter((module) => module._id !== moduleId);
    console.log("After deleting the module", Database.modules.length )
    console.log(Database.modules.find((module) => module._id === moduleId))
}

export function updateModule(moduleId, moduleUpdates) {
    console.log(moduleUpdates);
    const { modules } = Database;
    const module = modules.find((module) => module._id === moduleId);
    console.log(module);
    Object.assign(module, moduleUpdates);
    return module;
}



