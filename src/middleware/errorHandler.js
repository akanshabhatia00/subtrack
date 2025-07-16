exports.errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    
    // Check if the error is a Mongoose validation error
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({ message: 'Validation Error', errors: messages });
    }
    
    // Check if the error is a Mongoose duplicate key error
    if (err.code === 11000) {
      return res.status(400).json({ message: 'Duplicate field value entered' });
    }
    
    // Default server error
    res.status(500).json({
      message: 'Server Error',
      error: process.env.NODE_ENV === 'production' ? 'Something went wrong' : err.message
    });
  };