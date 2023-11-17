class GetData {
    getListData = async () => {
        const data = await fetch("../data/Data.json");
        const dataArr = await data.json(); 

        return dataArr;
    }
}

export default GetData; 