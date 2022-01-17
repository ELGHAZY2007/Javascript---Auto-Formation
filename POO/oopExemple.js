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
        document.write("I am " + this._name + " my age is " + this._age + " my gender is " + this._gender)
    }
}