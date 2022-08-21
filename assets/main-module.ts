import { _decorator, Component, Node, Label, js } from 'cc';
import { parent_module } from './parent-module';
const { ccclass, property } = _decorator;

console.log(parent_module);

const updatableObj = {
    text: 'This is a hotupdatable text',
}
// @ts-ignore
import.meta.addUpvalue?.('updatableObj', updatableObj);

@ccclass('root')
export class mainModule extends Component {
    @property(Label)
    label: Label = null!;
    
    @property(Label)
    label2: Label = null!;
    
    updateLabel () {
        this.label.string = 'hello world';
        this.label2.string = updatableObj.text;
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