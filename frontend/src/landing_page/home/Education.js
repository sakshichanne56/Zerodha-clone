import React from 'react';

function Education() {
    return ( 
       <div className='container mt-5'>
        <div className='row'>
            <div className='col-6'>
                <img src='media/education.svg' alt='random img' style={{width:"70%"}}/>
            </div>

            <div className='col-6'>
                <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p>Varisity, the largest online stock mrket education book in the world covering everythig from basics to advanced tradig.</p>
                    <a href='' className='mx-5' style={{textDecoration:"none"}}>Versity <i class="fa-solid fa-arrow-right"></i></a>

                    <p className='mt-5'>Trading Q&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' className='mx-5' style={{textDecoration:"none"}}>Trading Q&A <i class="fa-solid fa-arrow-right"></i></a>


            </div>
        </div>
       </div>
     );
}

export default Education;