input.onButtonPressed(Button.A, function () {
    basic.showNumber(feet)
    basic.showString("Feet")
    basic.showString("=")
    yards = feet / 3
    basic.showNumber(yards)
    basic.showString("Yards")
})
input.onButtonPressed(Button.B, function () {
    let inches = 0
    basic.showNumber(foot)
    basic.showString("Foot")
    basic.showString("=")
    foot = inches / 3
    basic.showNumber(inches)
    basic.showString("Inches")
})
let foot = 0
let yards = 0
let feet = 0
feet = randint(10, 100)
basic.forever(function () {
	
})
