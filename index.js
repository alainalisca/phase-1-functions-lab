// Code your solution in this file!

function distanceFromHqInBlocks(street){
    let value = street; 
   
    if (value < 42){
    return 42 - value;
    } else {
    console.log(value - 42)
}
    return value - 42;
}

function distanceFromHqInFeet(street){
    let value = street;

    if (value < 42) {
        return ((42 - value) * 264);
    } else {
        console.log((value - 42) * 264)
    }
    return ((value - 42) * 264); 
}

function distanceTravelledInFeet(start, destination){
    let  valueA = start;
    let valueB = destination; 

    if (valueA < valueB) {
        return ((valueB - valueA) * 264);
    } else {
        console.log ((valueA - valueB) * 264);
    } 
    return ((valueA - valueB) * 264);
}

function calculatesFarePrice(start, destination){ 
    let newValue = distanceTravelledInFeet(start, destination)
    console.log("should be the return value of distance travelled in feet", newValue);
    
    if (newValue <= 400) {
        return 0
    } else if (newValue > 400 && newValue <= 2000){
        return (newValue - 400) * .02
    } else if (newValue > 2000 && newValue < 2500){
        return 25
    }
        else if (newValue > 2500) {
        return("cannot travel that far");
    }
}

//     it('does not allow rides over 2500 feet', function () {
//         expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');