const validateValue = (a,b,c)=>{
   if (c == '+'){
    return a + b;
   }
   else if (c == '-'){
    return a - b;
   }
   else if (c == '*'){
    return a * b;
   }
   else if (c == '/'){
    return a /b;
   }
    else {
        return false;
    }
}

module.exports = validateValue;