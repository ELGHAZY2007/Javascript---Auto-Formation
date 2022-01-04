class Person {
    #_name;
    #_age;
    #_gender;
    
    get name(){
        return this._name
    }

    set name(value){
        this._name = value
    }

    get age(){
        return this._age
    }

    set age(value){
        this._age = value
    }

    get gender(){
        return this.gender
    }

    set gender(value){
        this._gender = value
    }



    display() {
        console.log("I am " + this._name + " my age is " + this._age + " my gender is " + this._gender)
    }
}









// name;
// age;
// gender
// constructor(name, age, gender){
//     this.name= name,
//     this.age= age,
//     this.gender= gender
// }

// display() {
//     console.log("I am " + this.name + " my age is " + this.age + " my gender is " + this.gender)
// }