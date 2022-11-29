// apeman
function apeman(atomicMass, atomicNumber){
    console.log(atomicMass - atomicNumber + ' Neutrons');
}
apeman(31, 15);

// apeman v2 maybe better?
function apemanv2(atomMass, atomNum){
    let neutrons = atomMass - atomNum;
    console.log(neutrons + ' Neutrons');
}
apemanv2(75, 33);

// density
function density(mass, volume) {
    console.log(mass / volume);
}
density(60, 10);

// distance
function distance(speed, time){
    console.log(speed * time)
}
distance(60, 20);

// volume
function sciVolume(newMeniscus, inital){
    console.log(newMeniscus - inital);
}
sciVolume(30, 25);

// speed
function speed(distance, time) {
    console.log(distance / time)
}
speed(50, 7);

// time
function time(distance, speed) {
    console.log(distance / speed)
}
time(60, 20);