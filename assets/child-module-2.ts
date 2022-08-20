import { _decorator, Component, Node, js } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('child_module_2')
export class child_module_2 extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }
}



// @ts-ignore
import.meta.ccHot?.dispose(() => {
    console.log('child_module_2 was update')
    js.unregisterClass(child_module_2);
})