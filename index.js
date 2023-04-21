let Apple=function(weight){
    this.weight=weight;
    this.decrease=function(){
        this.weight-=1;
    }
    this.isEmpty=function (){
        if(this.weight<1){
            return false;
        }else{
            return true;
        }
    }
    this.getWeight=function(){
        return this.weight;
    }
}


function Human(){
    this.name;
    this.gender;
    this.weight;
    this.isMale=function(){
        if(this.gender==true){
            return true;
        }else{
            return false;
        }
    }
    this.setGender=function(gender){
        this.gender=gender;
    }
    this.setName=function(name){
        this.name=name;
    }
    this.getName=function(){
        document.write("<br/> name ="+ this.name);
    }
    this.setWeight=function (weight){
        this.weight=weight;
    }
    this.getWeight=function(){
        document.write("<br/>weight = "+this.weight);
    }
    this.say=function(value){
        document.write(this.name + "say : " +value);
    }
    this.checkApple=function(apple){
        return apple.isEmpty();
    }
    this.eat=function(apple){
        apple.decrease();
        this.weight+=1;
    }
}

let apple=new Apple(10);
let adam=new Human();
adam.setWeight(50);
adam.setGender(true);
adam.setName("Adam");
adam.say("hello baybe");
adam.checkApple(apple);
adam.eat(apple)
adam.say(apple.getWeight());