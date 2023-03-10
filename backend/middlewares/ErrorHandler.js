 const errorHandler = (err, req, res, next) => {

      return  res
      .status(500)
      .json({message: 'Something went wrong', succuss:false, status: 500 }) 
}

export default errorHandler