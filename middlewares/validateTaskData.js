export const validateTaskData = ( req, res, next ) => {
    const { title, status } = req.body;
    if(!title || typeof title !== 'string' ){
        return res.status(400).json({message:'Invalid or missing descrition'});
    }
    if (!status || typeof status !== 'string') {
        return res.status(400).json({ message: 'Invalid or missing status' });
    }
    next();
}
