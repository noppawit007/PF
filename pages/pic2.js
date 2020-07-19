export default ({ url }) => {
    let rl = [
        { image : "https://cdn.pixabay.com/photo/2014/02/27/16/10/spring-276014__340.jpg"},
        { image : 'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg'}, 
        { image : 'https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg'},
        { image : 'https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509__340.jpg'},
        
    ]
    return (
        <div>
           <div class = "flex-container" >           
            
            <ul>
            {
                rl.map(item => (
                    <li><img src ={item.image} alt="" width="400" height="400"/></li> )
                )
            }
            </ul>
            </div>

        </div>
    )

}