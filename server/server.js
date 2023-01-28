const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080; 
app.use(cors());
app.use(express.json());

const OurSchema = new mongoose.Schema({
        name: String,
        subject: String,
        description: String,
})

const OurModel = mongoose.model('Our', OurSchema);

mongoose.set('strictQuery', false)
mongoose 
    .connect(`mongodb+srv://najiya:najiya@cluster0.ldwafk6.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log("connected"))
    .catch((err) => console.log("err"));

app.get('/school', (req, res) => {
    OurModel.find( null, "name subject description").exec((err, data) => {
        if (err) return res.status(500).send({err})
        res.send(data)
    })
})

app.post('/school', (req, res) => {
    const newProduct =  new OurModel({
        ...req.body,
    })
    newProduct.save()
    res.send(newProduct)
})

app.get('/school/:id', async(req, res) => {
        const {id} = req.params
       const Our = await OurModel.findById(id)
       return res.status(200).send({"our": Our})
})

app.delete('/school/:id', async (req, res)=>{
    let {id} = req.params
    let deletedProduct = await OurModel.findByIdAndDelete(id)
    res.send(deletedProduct)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})