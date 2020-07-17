let express = require('express'); //ดึง ;ibary มา express เปิด server
let bodyParser = require('body-parser'); 
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());

// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let books = [{'id':0,'name':'Book1','imageUrl': 'https://images.pexels.com/photos/4392557/pexels-photo-4392557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
   {'id':1, 'name':'Book2','imageUrl': 'https://images.pexels.com/photos/3728395/pexels-photo-3728395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
];

router.route('/books')
   // get all bears
   .get( (req, res) =>  res.json(books) ) 

   // insert a new bear
   .post( (req, res)=> {
       var book = {};
       book.id =  books[books.length-1].id+1;
       book.name = req.body.name
       book.weight = req.body.imageUrl
       books.push(book);
       res.json( {message: 'Book created!'} )
   })


router.route('/books/:book_id')
   .get ( (req,res) => {
        let id = req.params.book_id
        let index = books.findIndex( book => (book.id === +id) )
        res.json(books[index])                   // get a bear
    })  

   .put ( (req,res) => {                               // Update a bear
       let id = req.params.book_id
       let index = books.findIndex( book => (book.id === +id) )
       books[index].name = req.body.name;   
       books[index].weight = req.body.imageUrl;   
       res.json({ message: 'Book updated!' + req.params.book_id});
   })

   .delete ( (req,res) => {                   // Delete a bear
       // delete     bears[req.params.bear_id]
       let id = req.params.book_id
       let index = books.findIndex( book => book.id === +id  )
       books.splice(index,1) 
       res.json({ message: 'Book deleted: ' + req.params.book_id});
   })

app.use("*", (req,res) => res.status(404).send('404 Not found') );
app.listen(80,  () => console.log("Server is running") ); //เปิดที่พอตไหน