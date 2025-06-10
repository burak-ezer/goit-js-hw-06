class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padStart(ek) {
    this.#value = `${ek}${this.#value}`;
  }

  padEnd(ek) {
    this.#value += ek;
  }

  padBoth(ek) {
    this.padStart(ek);
    this.padEnd(ek);
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
