import { useState } from "react";
function Card({id,name,info,image,price,removeTours}){
    const [readmore,setReadMore]=useState(false);
    var description = readmore ? info : `${info.substring(0, 200)}....`;
    
    const [desc,setDesc]=useState(description);

    function readmoreHandler(){
        setReadMore(!readmore);
        
        // setDesc(description);
    }
    return(
        <div>
            <div className="card">
                <img className="image" src={image} alt="image" />
                <div className="tour-details">
                    <div className="tour-info">
                        <h4 className="tour-price">{price}</h4>
                        <h4 className="tour-name">{name}</h4>
                    </div>
                    <div className="description">
                        {description}
                        <span className="readMore" onClick={readmoreHandler}>
                            {readmore? 'show less' :'show more'}</span>
                    </div>
                </div>

            </div>
            <div>
                <button className="btnRed" onClick={()=>removeTours(id)}>Not Interested</button>
            </div>
        </div>
    )


}

export default Card;