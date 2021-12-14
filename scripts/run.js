const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["King", "Spoon", "Adventurer"],
      ["https://i.postimg.cc/sMGYRYWd/1.png",
      "https://i.postimg.cc/2q4n1CT0/426.png",
      "https://i.postimg.cc/rd6SyDGd/4993.png"],
      [700, 1000, 500],
      [100, 200, 150]
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    let returnedTokenUri = await gameContract.tokenURI(1);
    console.log("Token URI:", returnedTokenUri);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();