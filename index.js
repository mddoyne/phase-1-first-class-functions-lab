const returnFirstTwoDrivers = (a) =>
{
    return a.slice(0,2);
}

const returnLastTwoDrivers = (a) =>
{
    return a.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (b) =>
{
    function fareMultiplier(b)
    {
        return (b * 5);
    };

    return fareMultiplier;
}

const fareDoubler = (c) =>
{
    return c * 2;
}

const fareTripler = (d) =>
{
    return d * 3;
}

const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) =>
{
    return returnFirstTwoDrivers(drivers, returnFirstTwoDrivers);
}