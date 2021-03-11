const WAH = artifacts.require('WAHToken');
 
 
module.exports = async function (deployer) {
  await deployer.deploy(WAH);
};