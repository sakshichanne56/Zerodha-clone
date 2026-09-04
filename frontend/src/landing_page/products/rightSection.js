import React from 'react';

function rightSection({imageURL, productName, productDescription , learnmore}) {
    return ( 
        <div className='container border-bottom mb-5'>
            <div className='row '>
            
            
            <div className='col-6  mt-5 p-5'>
                <h1>{productName}</h1>
                <p>{productDescription}</p>

                <div >
                   
                <a href={learnmore}  style={{textDecoration:"none"}}>learn more <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                
                </div>
                <div className='col-6 '>
                <img src={imageURL} alt='abc' />
            </div>
            </div>
        </div>
     );
}

export default rightSection;