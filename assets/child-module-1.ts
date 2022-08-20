import { _decorator, Component, Node, js } from 'cc';
import { TestPureTs } from './pure-ts';
const { ccclass, property } = _decorator;

console.log(TestPureTs);

@ccclass('child_module_1')
export class child_module_1 extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }
}

// @ts-ignore
import.meta.ccHot?.dispose(() => {
    console.log('child_module_1 was update')
    js.unregisterClass(child_module_1);
})


