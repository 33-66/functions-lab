function distanceFromHqInBlocks(somevalue){
    const hqStreet= 42;

    if(somevalue<hqStreet){
        let distance= hqStreet -somevalue;
        return distance;
    }
    else if(somevalue>hqStreet){
        let distance = somevalue - hqStreet;
        return distance;
    }
    else{
        console.log('invalid information');
    }
}

function distanceFromHqInFeet(someValue){
    let distInBlocks = distanceFromHqInBlocks(someValue);
  return distInBlocks * 264
}
function distanceTravelledInFeet(start,destination){
   if(start<destination)
    {let dist = destination - start 
    return dist * 264}
        else if (destination<start){
            let dist = start - destination
            return dist * 264
        }
        else ( console.log('invalid input'))
}

function calculatesFarePrice(start,destination){
    let dist = distanceTravelledInFeet(start,destination);

    if(dist <= 400){
        let price = 0;
        return price;
    }
    else if(dist >400 && dist <= 2000){
        let price = (dist - 400)* 0.02;
        return price;
    }
    else if(dist > 2000 && dist <= 2500){
        let price = 25;
        return price;
    }
    else{
        return 'cannot travel that far'
    }
}
    
