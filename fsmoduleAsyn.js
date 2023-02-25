const {readFile, writeFile}=require('fs');

readFile('./asset/first.txt','utf8',(error,result)=>{
    if(error){
        console.log(error)
        return
    }
    const first=result;
    readFile('./asset/first.txt','utf8',(error,result)=>{
        if(error){
            console.log(error)
            return
        }
        const second=result;
        writeFile('./asset/result-asyn.txt',`Here is the asyn result \r\n${first} \r\n${second}`,()=>{});
    });
});