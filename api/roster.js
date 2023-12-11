function convertDate(num) {
    if (String(num).length === 1) {
        return `0${num}`;
    } else {
        return num;
    }
}

module.exports = async (req, res) => {
    week = req.query.week || 0;
    group = req.query.group;

    currentDate = new Date();

    await req.id.check();

    firstDate = new Date(currentDate.getFullYear(), (currentDate.getMonth() + 1), currentDate.getDate() - (currentDate.getDay() - 1)); 
    lastDate = new Date(currentDate.getFullYear(), (currentDate.getMonth() + 1), currentDate.getDate() + 1 + (7 - currentDate.getDay())); 

    start = `${firstDate.getFullYear()}${convertDate(firstDate.getMonth())}${convertDate(firstDate.getDate())}`;
    end = `${lastDate.getFullYear()}${convertDate(lastDate.getMonth())}${convertDate(lastDate.getDate())}`;
    rawResponse = await fetch(`https://roosters.deltion.nl/api/roster?group=${group}&start=${start}&end=${end}`, {
        headers: {
            "Cookie": req.id.cookies
        }
    });
    results = await rawResponse.json();

    results.calculated_time = currentDate;
    results.calculated_date = `${start}-${end}`;

    res.send(results);
}