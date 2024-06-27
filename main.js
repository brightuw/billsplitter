let obj = {
    "anderson": 62,
    "vivian": 55,
    "tom": 24,
    "amy": 0
}

let total = 0
let size = Object.keys(obj).length
for (const person in obj) {
    total += obj[person]
}

let split = total / size

let printed = ""

for (const person in obj) {
    if (obj[person] < split) {
        for (const receiver in obj) {
            if (obj[receiver] > split) {
                let payment = Math.min(split - obj[person], obj[receiver] - split)
                if (payment != 0) {
                    printed += ("\n" + person + " pays $" + payment + " to " + receiver)
                    obj[person] = obj[person] + payment
                    obj[receiver] = obj[receiver] - payment
                }
            }
        }
    }
}

console.log(printed)