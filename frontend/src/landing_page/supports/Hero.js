import React from 'react';

function Hero() {
    return ( 
   <section  className='container-fluid' id="supportHero">
    <div className='row p-3 'id="supportWrapper">
        <h4>Support Portal</h4>
        <a href='abc'>Track Ticket</a>
    </div>
    <div className='row p-3 m-3 '>
        <div className='col-6 p-3 '>
            <h1 className='fs-3'>Search for an answer or browse help topics to create a tickets</h1>
            <input placeholder='Eg: how do i activate F &O, why is my order getting rejected'/> <br></br>
             <a href='abc'>Track account opening</a>
               <a href='abc'>Track ssegment activation</a>
                 <a href='abc'>Intraday margines</a>
                   <a href='abc'>Kite user manual</a>
        </div>
        <div className='col-6 p-3 '>
            <h1 className='fs-3'>Featured</h1>
            <ol>
              <li><a href='abc'>Current Takeovers and Delistings-January 2024</a></li>
                <li><a href='abc'>Latest Intraday leverages - MIS & CO </a></li>
                </ol>
        </div>
        
    </div>
   </section>
 );
}

export default Hero;