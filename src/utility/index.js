
const getDataFromLocalHost = () => {
    const getData = localStorage.getItem('blogDetails');
    if (getData) {
        return JSON.parse(getData);
    } else {
        return [];
    }
}

const saveDataToLocalHost = (blogDis) => {
    const allReadyHave = getDataFromLocalHost();
    const isExits = allReadyHave.find(singleItem => singleItem.id == blogDis.id);

    if (!isExits) {
        allReadyHave.push(blogDis);
        localStorage.setItem('blogDetails', JSON.stringify(allReadyHave));
    } else {
        alert('Sorry all ready have');
    }
}

export { getDataFromLocalHost, saveDataToLocalHost }