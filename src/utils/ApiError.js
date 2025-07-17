class Apierror extends Error {
    constructor(
        message="something went wrong",
        statusCode,
        errors=[],
        stack=""
    ){
        super(message)
        this.statusCode = statusCode || 500;
        this.errors = errors;
        this.success = false;
        this.data= null;
        if(stack)
            {
            this.stack = stack;
            }
            else{
                Error.captureStackTrace(this, this.constructor);
            }

}}

export default Apierror;