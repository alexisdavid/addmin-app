import SearchBox from "./SearchBox"

 const CardHeader =({nameTable})=>(
    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
    <div className="bg-gradient-dark shadow-info border-radius-lg pt-4 pb-3 d-flex ">
        <h6 className="text-white text-capitalize ps-3">{nameTable}</h6>
    <SearchBox/>
    </div>
</div>
)
export default  CardHeader