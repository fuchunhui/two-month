class Bar {}
class Baz extends Bar {
    static [Symbol.hasInstance]() {
        return false;
    }
}

const b = new Baz();
console.log(Bar[Symbol.hasInstance](b));
console.log(b instanceof Bar);
console.log(Baz[Symbol.hasInstance]());
console.log(b instanceof Baz);
