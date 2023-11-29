function right () {
    sparkbitO.rotateMotorModule(SparkbitOutPort.Output2, SparkbitDirection.Clockwise, 100)
    basic.pause(1000)
    sparkbitO.stopMotorModule(SparkbitOutPort.Output2)
}
function backword () {
    sparkbitO.rotateMotorModule(SparkbitOutPort.Output1, SparkbitDirection.Counterclockwise, 100)
    basic.pause(1000)
    sparkbitO.stopMotorModule(SparkbitOutPort.Output1)
}
function left () {
    sparkbitO.rotateMotorModule(SparkbitOutPort.Output2, SparkbitDirection.Counterclockwise, 100)
    basic.pause(1000)
    sparkbitO.stopMotorModule(SparkbitOutPort.Output2)
}
function forward () {
    sparkbitO.rotateMotorModule(SparkbitOutPort.Output1, SparkbitDirection.Clockwise, 100)
    basic.pause(1000)
    sparkbitO.stopMotorModule(SparkbitOutPort.Output1)
}
right()
forward()
left()
right()
left()
right()
backword()
left()
right()
left()
basic.forever(function () {
	
})
