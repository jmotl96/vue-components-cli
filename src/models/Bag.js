import {bagItem} from "@/models/BagItem";

function BagCollection(){
    let arr = [];

    arr.addItem = function (item){
        this.push(new bagItem(
            item,
            (item) => this.removeItem(item)
        ));

        return this;
    }

    arr.removeItem = function (item){
        console.log(item, this);
        this.splice(this.indexOf(item), 1);
        return this;
    }

    return arr;
}

export default BagCollection;