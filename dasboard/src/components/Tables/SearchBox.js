

const SearchBox = () => {
    const style={backgroundColor:'white'}
    return (
        <div class="ms-md-auto pe-md-3 d-flex align-items-center ">
              <div class="input-group input-group-outline ">
                <label class="form-label text-white">Buscar...</label>
                <input type="text" class="form-control text-white" />
              </div>
            </div>
    )
};

export default SearchBox;