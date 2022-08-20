import { _decorator, Component, Node, Label, js } from 'cc';
import { parent_module } from './parent-module';
const { ccclass, property } = _decorator;

console.log(parent_module);

@ccclass('root')
export class mainModule extends Component {
    @property(Label)
    label: Label = null!;
    
    updateLabel () {
        this.label.string = 'hello world';
    }

    update () {
        this.updateLabel();
    }
}



// @ts-ignore
import.meta.ccHot?.dispose(() => {
    console.log('mainModule was update')
    js.unregisterClass(mainModule);
})