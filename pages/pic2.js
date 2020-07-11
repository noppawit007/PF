import Navbar from '../components/Nev'
import Header from '../components/Header'

const pic2 = () => {
   
  
    let url = [
        { image : "https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830__340.jpg"},
        { image : 'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__340.jpg'}, 
        { image : 'https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509__340.jpg'},
        { image : 'https://cdn.pixabay.com/photo/2018/01/28/11/24/sunflower-3113318__340.jpg'}
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
export default pic2