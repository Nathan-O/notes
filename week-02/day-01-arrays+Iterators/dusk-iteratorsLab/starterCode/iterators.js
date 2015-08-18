//where our iterators live
var o_o = {
  // each: function(list, callback) {
  //   //code here...
  // },

  map: function(list, callback) {
    var second = [];
    for (var i = 0; i < list.length; i += 1) {
        var elm = list[i];
        elm = elm + 1;
        second.push(elm); 
    }
    return second;
  },

  filter: function(list, callback) {

  }
    
};

//expose our iterators to other files
//such as our assertions
module.exports = o_o;








