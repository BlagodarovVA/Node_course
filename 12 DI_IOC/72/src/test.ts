function Component(id: number) {
    console.log('init comp');
    return (target: Function) => {
        console.log('run comp');
        target.prototype.id = id;
    }
}

function Logger() {
    console.log('init logger');
    return (target: Function) => {
        console.log('run logger');
    }
}

function Method(
    target: Object,
    propKey: string,
    propertyDescriptor: PropertyDescriptor
) {
    console.log(propKey);
    const oldValue = propertyDescriptor.value;
    propertyDescriptor.value = function(...args: any[]) {
        return args[0] * 10;
    }
}

function Prop(
    target: Object,
    propKey: string) {
    let value: number;

    const getter = () => {
        console.log('Get');
        return value;
    }

    const setter = (newValue: number) => {
        console.log('Set');
        value = newValue;
    }

    Object.defineProperty(target, propKey, {
        get: getter,
        set: setter
    })
}

function Param(
    target: Object,
    propKey: string,
    index: number
) {
    console.log(propKey, index);
}


@Logger()
@Component(1)
export class User {
    @Prop id: number;

    @Method
    updateId(@Param newId: number) {
        this.id = newId;
        return this.id;
    }
}

console.log(new User().id);
console.log(new User().updateId(2));
