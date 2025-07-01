class Variable {
    constructor() {
        var name = "alagar";
        const age = 30;
        var place = "pdk";
        console.log(this.name,age,place)
    }

    // name ="alagar"
    result(){
        return this.name
    }
    // print

}

const res = new Variable();
console.log(res.result())