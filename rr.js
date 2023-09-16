
const express=require('express')
const app=express()
const path=require('path')


// defined path for express location

const PublicDirectryPath=path.join(__dirname,'../express')
const viewsPath=path.join(__dirname,'../express')

// setting of handbars and locations
app.set('veiws engine' ,'hbs')
app.set('veiws',viewsPath)


app.use(express.static(path.join(__dirname,'../express')))
app.get('',(req,res)=>{
    res.send('<h1>helloword</h1>')
})


app.get('/text', (req,res)=>{
    res.send('text')
})

app.get('/index',(req,res)=>{
    res.send('<h1>we are here</h1>')
})

app.get('*', (req,res)=>{
    res.send('welcome from the server')
})

app.listen(3000,()=>{console.log('server lauch')})