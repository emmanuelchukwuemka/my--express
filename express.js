const express=require('express')
const app=express()
const path=require('path')
const PublicDirectryPath=path.join(__dirname,'../express')
const viewsPath=path.join(__dirname,'../express')

app.get('/index', (req,res)=>{
    res.send('index.html')
})
app.get('/text',(req,res)=>{
    res.send('text.html')
})

app.get('',(req,res)=>{
    res.send('<h1>helloword</h1>')
})

app.listen(3000,()=>{
    console.log('oya server has started');
})