function people(n, s, c) {
    this.name = n
    this.skill = s
    this.city = c
}

let p1 = new people("Amar", "Singer", "Goa")
let p2 = new people("Akbar", "Chef", "Mumbai")
let p3 = new people("Anthony", "Magician", "Kashmir")

function borrowSkill(name) {
    console.log(`${name} has ${this.skill} skill`)
}

borrowSkill.call(p1, "Akbar");
borrowSkill.call(p2, "Anthony");
borrowSkill.call(p3, "Amar");