function doWork(params) {
  const username = params.username;
  let prepared = checkReady(username);
  if (prepared) {
    return prepared;
  } else {
    let cropedLink = cropLink(username);
    return addPrefix(getLastBlock(cropedLink));
  }
}

function checkReady(text) {
  let re = /@\w*/.exec(text);


  return re != null ? re[0] : false;
}

function getLastBlock(text) {
  let re = /(?!.*\/).*/.exec(text);
  return re == null ? text : re[0];
}

function addPrefix(username) {
  return '@' + username;
}

function cropLink(text) {
  let re = /\/\/[^\/]+\/[^\/]*/.exec(text);
  return re == null ? text : re[0];
}


module.exports.doWork = doWork;
