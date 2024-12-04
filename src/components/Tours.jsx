import Card  from './Card'
function Tours({tours, removeTours}){
    
    
    return(
        <div className='container'>
           <div> <h2 className='title'>Plan With Shivam</h2></div>
           <div>
            <div className='cards'>
                {
                    tours.map((tour) => {
                        return <Card {...tour} removeTours={removeTours}></Card>
                    })
                }

            </div>
           </div>
        </div>
    )
}


export default Tours;