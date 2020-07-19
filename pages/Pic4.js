export default ({ url }) => {
    let cl = [
        { image : "https://cdn.pixabay.com/photo/2015/09/18/11/34/fireworks-945386__340.jpg"},
        { image : 'https://cdn.pixabay.com/photo/2019/04/28/02/16/conservatory-4161955__340.jpg'}, 
        { image : 'https://cdn.pixabay.com/photo/2016/11/14/03/21/fireworks-1822479__340.jpg'},
        { image : 'https://cdn.pixabay.com/photo/2018/04/23/23/27/garden-3345970__340.jpg'}
    ]
        
    return (
        <div>
           <div class = "flex-container" >           
            
            <ul>
            {
              cl.map(item => (
                    <li><img src ={item.image} alt="" width="400" height="400"/></li> )
                )
            }
            </ul>
            </div>

        </div>
    )

}