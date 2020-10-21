const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  throw new CustomError('Not implemented');
  let abc = ''
  let def = ''
  
  if (!members) return false;
  for (let i = 0; i <= members.length; i++) {
    if (typeof(members[i]) === 'string') {
      abc = members[i].replace(/ /g, '').toUpperCase()
      def += abc[0]
    }
  }
  return def.split('').sort().join('')
};
