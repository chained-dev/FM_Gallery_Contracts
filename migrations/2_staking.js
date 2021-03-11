const Staking = artifacts.require('Staking');
 
const { deployProxy } = require('@openzeppelin/truffle-upgrades');
 
module.exports = async function (deployer) {
  await deployProxy(Staking, [1614588620,1200], { deployer, initializer: 'initialize' });
};