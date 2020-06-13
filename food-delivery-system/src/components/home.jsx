import React from 'react'
import { connect } from 'react-redux'
import Display from './display'

const Home=({restName,search,loading})=>{
    console.log(restName)
    const handleSearch=(e)=>{
        console.log(e.target.value)
        search=e.target.value
    
    }
const handleSubmit=(e)=>{
    e.preventDefault()
    loading=true
    console.log(search+'ss')
}

    return(
        // search bar 
        <React.Fragment>

        <div className="container m-2">
            <form>
                <div className="form-group row">
                    <div className="col-11">
                        <input type="search" className="form-control  border-primary" id='search'  onChange={handleSearch} />
                    </div>  
                    <div className="col-1">
                        <input type="button" className=" btn btn-primary" value="Search" id="searchBtn" onClick={handleSubmit}  />
                    </div>
                    <div className="col-12">
                        <small id="emailHelp" className="form-text text-muted">Search Restaurant's to order food  online.</small>
                    </div>
                </div>
            </form>
        </div>
        {/* display search results */}
        <div className='row border border-info m-2'>
            {restName?.map(item=>(
                
                <div className='container'>

                    <div key={item.id} className='fld-flex flex-wrap border border-info' >{item.restaurantName}</div>
                
                </div>     
            
            ))}           
            </div>
        
    </React.Fragment>
    )
};

const mapStateToProps=state=>({
    restName: state.restData,
    search:state.search,
    loading:state.loading,
    filterData: state.filterData
})


export default connect(mapStateToProps)(Home)