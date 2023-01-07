var jwt = require('jsonwebtoken');
let JWT_SECRET ='Iam$0urav';


// Get the user from jwt token and add id to req object
const fetchuser = (req, res, next) => {
  //const rawtoken = req.header('auth-token');
  const token = req.header('auth-token');
  

  //const token = rawtoken.split(' ')[1];
  
  if (!token) {
    res.status(401).send({ error: "Please Autheticate " })
  }

  try{

      const data = jwt.verify(token,'Iamsourav');
      req.user = data.user;
      next();

    }
    catch (error){
      res.status(401).send({error})
    }



}






module.exports = fetchuser