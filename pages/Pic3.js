export default ({ url }) => {
    let l = [
        { image : "https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295436__340.jpg"},
        { image : 'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662__340.jpg'}, 
        { image : 'https://cdn.pixabay.com/photo/2014/12/28/18/19/snail-582201__340.jpg'},
        { image : 'https://cdn.pixabay.com/photo/2019/09/19/17/40/insects-4489864__340.jpg'}
        
    ]
    return (
        <div>
           <div class = "flex-container" >           
            
            <ul>
            {
              l.map(item => (
                    <li><img src ={item.image} alt="" width="400" height="400"/></li> )
                )
            }
            </ul>
            </div>

        </div>
    )

}