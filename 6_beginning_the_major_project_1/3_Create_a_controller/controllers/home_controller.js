// Here we need to export this function which is publically available to my routes file and which is return something
module.exports.home = function(req, res){
	res.end('<h1>Express is up for codeial</h1>');
};