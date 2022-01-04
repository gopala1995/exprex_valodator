const formatErrors = (ErrArr)=>{
     return ErrArr.map((err)=>{
    return {
     message: err.msg,
     field: err.param,
    }
    
})
}

module.exports = {formatErrors}