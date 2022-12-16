## TODO Application built with React and Solidity Web3.0

### Requirements
1. Create a smart contract which tracks and stores TODO tasks.
2. Deploy the Smart Contract to Etherium blockchain.
3. Create the user interface that shows TODO tasks.
4. Provide TODO actions such as ADD and DELETE tasks.


### Setup (for Docker dev environment)
```sh
lscpu # aarch64
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install -y nodejs
sudo apt-get install -y npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash # install nvm
source ~/.bashrc
sudo nvm install –lts # Install the latest LTS version
npm install -g pnpm

# Current versions
node -v
v18.12.1
npm -v
9.2.0
pnpm -v
7.18.1

# Install hardhat
npx hardhat
```


### Backend
pre: cd into /backend

0) start local testnet ---> pnpm run testnet
1) Compile contracts ---> pnpm run build
2) Test contracts -->     pnpm run test
3) Deploy contracts -->   pnpm run deploy

### Frontend
pre: cd into /frontend

1) Install dependencies ---> pnpm install
2) start frontend ---> pnpm run dev
3) build --> pnpm run build

### References
[Pnpm (2x faster than npm)](https://pnpm.io/installation)
[TODO list tutorial](https://www.youtube.com/watch?v=ZCwTeMi4uoc&t=137s)
speed up npm install in dev container ([youtube](https://www.youtube.com/watch?v=iDdJWIPRUx4))


### Etc
Here are some ready to use IPFS services 📡, that you can easily use for your next project 🚀

🔗 https://pinata.cloud  
🔗 https://nft.storage 
🔗 https://docs.moralis.io/moralis-dapp/files/ipfs
🔗 https://infura.io/product/ipfs 