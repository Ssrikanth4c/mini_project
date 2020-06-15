import React from 'react'
import { connect } from 'react-redux'
import Display from './display'
import  {addToCart} from '../redux/action'

const Home=({restName,search,loading, addToCart})=>{
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
        <div className='container'>

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
        </div>

        {/* display search results */}
        <div className='container '>
            <div className='row border border-info'>

                    {restName?.map(item=>(
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    
                    {/* Restaurant Food items arrenged in Grid Layout and also Responsive */}
                        <div key={item.id} className='m-1 ' >
                            <Display  data={item} addToCardHandler={addToCart} />
                            
                        </div>
                </div>
                    ))}           
            </div>     
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
// mapDispatchToProps allows you to specify which action your component need to dispatch.
const mapDispatchToProps=dispatch=>({
    // explicitly forwarding arguments
    addToCart: id=>dispatch(addToCart(id))
})
//passiing mapStateToProps,mapDispatchToProps to connect
export default connect(mapStateToProps,mapDispatchToProps)(Home)