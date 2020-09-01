//soal satu
//relase 0
console.log("=========== soal 1, relase 0===========")

class Animal {
    constructor(hewan) {
        this.hewan = hewan;
    }

    get name() {
        return this.calcArea();
    }
    get legs() {
        return 4
    }

    get cold_booded() {
        return false
    }

    calcArea() {
        return this.hewan;
    }

}

const sheep = new Animal("shaun");

console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_booded);

console.log("=========== soal 1, relase 1===========")

//Relase1

class Animals {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name);
    }
}

class Ape extends Animals {
    yell() {
        console.log(this.name + ' Auooo');
    }
}

class Frog extends Animals {
    jump() {
        console.log(this.name + ' hop hop')
    }
}

var sungokong = new Ape("Kera Sakti");
sungokong.yell();

var kodok = new Frog("buduk");
kodok.jump()

//soal 2
console.log("=========== soal 2===========")

class Clock {
    constructor({
        template
    }) {
        this.template = template;
        this.timer;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) secs = '0' + mins;

        let secs = date.getSeconds();
        if (mins < 10) secs = '0' + secs

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(timer);
    }

    start() {
        this.render();
        this.timer = setInterval(this.render.bind(this), 1000);
    }

}

let clock = new Clock({
    template: 'h:m:s'
});
clock.start();