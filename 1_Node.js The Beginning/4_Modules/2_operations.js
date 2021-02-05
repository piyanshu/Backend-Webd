// This whole file is a module 
/*
module.exports is an object, we can add a property add and assign a value as func
module.exports = {
    add : function()
}
*/
// Humne apne functions ko export kar diya i.e. use outside this file
module.exports.add = function(a, b)
{
    return a+b;
}
module.exports.multiply = function(a, b)
{
    return a*b;
}
// We cannot export this func. 
var divsion = function(a, b)
{
    return a/b;
}