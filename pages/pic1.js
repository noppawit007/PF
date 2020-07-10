import Navbar from '../components/Nev'
import Header from '../components/Header'

const pic1 = () => {
   
  
    let url = [
        { image : "https://cdn.pixabay.com/photo/2020/06/02/05/39/barley-5249498__340.jpg"},
        { image : 'https://cdn.stocksnap.io/img-thumbs/960w/beach-aerial_NPCFR4GDNF.jpg'}, 
        { image : 'https://cdn.pixabay.com/photo/2020/07/04/06/40/clouds-5368435__340.jpg'},
        { image : 'https://cdn.pixabay.com/photo/2019/08/06/12/14/chile-4388204__340.jpg'}
    ]
    return (
        <div>
            <Header/>
            <Navbar/>
            <ul>
            {
                url.map(item => (
                    <li><img src ={item.image} alt="Me" width="250" height="200"/></li> )
                )
            }
            </ul>
        </div>
    )
}
export default pic1