import './demo';
import { _decorator, Component, Node, Label, js } from 'cc';
import { parent_module } from './parent-module';
const { ccclass, property } = _decorator;

console.log(parent_module);

@import.meta.upvalue('UpvalueClass')
class UpvalueClass {
    getText () {
        return 'This is a hotupdatable text';
    }
}

const upvalue = new UpvalueClass(); 

@ccclass('root')
export class MainModule extends Component {
    @property(Label)
    label: Label = null!;
    
    @property(Label)
    label2: Label = null!;
    
    updateLabel () {
        this.label.string = 'hello world';
        this.label2.string = upvalue.getText();
    }

    update () {
        this.updateLabel();
    }
}

