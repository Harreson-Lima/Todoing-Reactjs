class Item {

    constructor(text) {
        
        this.id = this.generateId();
        this.text = text;
        this.done = false;
    }

    generateId(){
        return Date.now().toString(16) + Math.random().toString(16).substring(2)
    }
}

export default Item;
