class GetData {
    getListData = () => {
        return $.getJSON("../data/Data.json");
    }
}

export default GetData; 