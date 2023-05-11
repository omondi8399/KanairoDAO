const KanairoDAO = artifacts.require('KanairoDAO')

module.exports = async function (deployer) {
    await deployer.deploy(KanairoDAO)
}