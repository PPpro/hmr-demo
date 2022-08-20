import { _decorator, Component, Node, js } from 'cc';
const { ccclass, property } = _decorator;
import { child_module_1 } from './child-module-1';
import { child_module_2 } from './child-module-2';

console.log(child_module_1);
console.log(child_module_2);

@ccclass('parent_module')
export class parent_module extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }
}

// @ts-ignore
import.meta.ccHot?.dispose(() => {
    console.log('parent_module was update')
    js.unregisterClass(parent_module);
})

