const hre = require("hardhat");

async function main() {
    const WellnessProfiles = await hre.ethers.getContractFactory("WellnessProfiles");
    const wellnessProfiles = await WellnessProfiles.deploy();

    await wellnessProfiles.deployed();

    console.log("WellnessProfiles deployed to:", wellnessProfiles.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
