import React from 'react';

function leftSection({imageURL, productName, productDescription , tryDemo, learnmore, googlePlay, appStore}) {
    return ( 
        <div className='container border-bottom mb-5'>
            <div className='row '>
            <div className='col-6 '>
                <img src={imageURL} alt='abc' />
            </div>
            
            <div className='col-6  mt-5 p-5'>
                <h1>{productName}</h1>
                <p>{productDescription}</p>

                <div >
                    <a href={tryDemo} style={{textDecoration:"none"}}>try demo <i class="fa-solid fa-arrow-right"></i></a>
                <a href={learnmore}  style={{marginLeft:"50px" ,textDecoration:"none"}}>learn more <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                
                <div className='mt-3'>
                    <a href={googlePlay}><img src="media/googlePlayBadge.svg" alt='img'/></a>
                <a href={appStore}  style={{marginLeft:"50px"}}><img src='media/appstoreBadge.svg' alt='img'/></a>
                </div>
                
                </div>
            </div>
        </div>
     );
}

export default leftSection;