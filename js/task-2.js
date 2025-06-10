class Storage {
    #items;

    constructor (InItems) {
        this.#items = InItems;
    }

    getItems () {
        return this.#items;
    }

    addItem (newItem) {
        this.#items.push(newItem);
    }

    removeItem (removeItem) {
        const dizi = [];
        array.forEach(element => {
            if (element !== removeItem) {
                dizi.push(element);
            }
        });
        this.#items = dizi;
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
