# Backend
Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
npx hardhat run scripts/deploy.ts --network sepolia # deploy to Goerli test network
```

### Project setup
```sh
npx hardhat
pnpm install -D @nomiclabs/hardhat-waffle ethereum-waffle @nomiclabs/hardhat-ethers ethers hardhat
pnpm install -D @nomicfoundation/hardhat-toolbox @nomicfoundation/hardhat-network-helpers @nomicfoundation/hardhat-chai-matchers @nomiclabs/hardhat-ethers @nomiclabs/hardhat-etherscan chai hardhat-gas-reporter solidity-coverage @typechain/hardhat typechain @typechain/ethers-v5 @ethersproject/abi @ethersproject/providers
pnpm install -D typescript ts-node @types/node @types/chai @types/mocha @ethersproject/bytes dotenv
pnpm install @openzeppelin/contracts
```

### Deployment
```sh
npx hardhat compile
# Make sure the .env is set up correctly.
npx hardhat run scripts/deploy.ts --network sepolia
# Validate that the contract is created (i.e. https://sepolia.etherscan.io/address/0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266)

```

### Referenes

🔗 https://sepolia.dev/
🔗 https://github.com/eth-clients/sepolia

