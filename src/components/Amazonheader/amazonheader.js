import React from 'react'
import'./amazonheader.css'
function Header() {
  return (
      
    <div>  
        <div  id='amazoncontianer'>
            <div>
                <img id='amazonlogo' src='https://static.vecteezy.com/system/resources/previews/019/040/342/non_2x/amazon-logo-editorial-free-vector.jpg'/>
            </div>
            
                <div class='selecteraddera headerBlocks'>
                    <span>Hello</span>
                    <span>Select Your Address</span>
                </div>
                <div id='amazonsarach'>
                    <input type='text' placeholder='sarach amazon In'/>
                     <img src='https://w7.pngwing.com/pngs/168/806/png-transparent-google-search-amazon-com-south-san-francisco-amazon-appstore-search-button-miscellaneous-orange-internet-thumbnail.png'alt='amazon sarach bar'/>   
                    
                </div>
                
                <div class='headerBlocks'>
                    <span>Hello ,sign in</span>
                    <span>Accounts&lists</span>
                </div>
                <div class='headerBlocks'>
                    <span>Returns</span>
                    <span>&Orders</span>
                </div>
                <div>
                    <img src='https://img.freepik.com/free-icon/carts_318-676736.jpg?size=626&ext=jpg&ga=GA1.1.1905732667.1685945839&semt=sph'height='30px'/>
                    <span>Cart</span>
                </div>

           
        </div>
        <div  id='contianer1'>
            <div>
                <img id='logo' src='https://img.freepik.com/free-icon/menu_318-663914.jpg?size=626&ext=jpg&ga=GA1.2.1905732667.1685945839&semt=sph'height='25px'/>
            </div>
            
            <div> Amazon MiniTv </div>
            <div>sell</div>
            <div>Best Sellers</div>
            <div>Today's Deals</div>
            <div>mobile</div>
            <div>New Relase</div>
            <div>Customer Service </div>
            <div>prime</div>
            <div>Electronics</div>
            <div>New Lanches from Mobiles,&Electronics and more|Shope Now</div>

            
        </div>

    </div>
    


  )
}

export default Header
