const express = require('express');
const morgan = require('morgan');  
const cors = require('cors');
const clientsRoutes = require('./routes/clientsRoutes');
const pagosRoutes = require('./routes/pagosRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//Routing:
app.use('/api/clients', clientsRoutes);
app.use('/api/pagos', pagosRoutes);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server at port: ${PORT}`)
})