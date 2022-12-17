## TODO Application built with React and Solidity Web3.0

### Requirements
1. Create a smart contract which tracks and stores TODO tasks.
2. Deploy the Smart Contract to Etherium blockchain.
3. Create the user interface that shows TODO tasks.
4. Provide TODO actions such as ADD and DELETE tasks.


### Setup (for Docker dev environment)
https://github.com/Mr-Perfection/MyDockerDevEnvironmentSetup


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
