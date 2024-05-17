const mongoose = require('mongoose')
const dbURL = 'mongodb+srv://naeemabargir9:KQSXSBkXW7O65x2V@cluster0.4zzfmn7.mongodb.net/'
//connect DB HERE
mongoose.connect(dbURL).then(() => {
     console.log('Connection Success');
}).catch((e) => {
     console.log('No Connection');
}) 
