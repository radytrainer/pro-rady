function proDyReversed(array)
{
    let newArray = [];
    let length = array.length - 1;
    for(let i = 0; i < array.length; i++)
    {
        newArray.push(array[length - i]);
    }

    return newArray;
}

function proDySum(array)
{
    let total = 0;
    for(let n of array)
    {
        total += n;
    }
    return total;
}

module.exports = {proDySum, proDyReversed};