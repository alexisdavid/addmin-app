import Request from '../../utils/http'
const request = new Request()

const fetchNextData=async(url, params) =>{
    const response = await request.get(url,params)
    console.log("🚀 ~ file: fetchNexData.js ~ line 6 ~ fetchNextData ~ response", response)
        if (response && response.statusCode===200){
            return response.result.data;
        }
}
export default  fetchNextData