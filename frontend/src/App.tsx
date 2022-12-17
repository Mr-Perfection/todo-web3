import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { ethers, BigNumber } from 'ethers';

import Task from './Task';
import { TaskContractAddress } from './constants';
// TaskContract.json is copied over from todo-web3/backend/artifacts/contracts/TaskContract.sol/TaskContract.json
import TaskAbi from 'Task/TaskContract.json';


function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [currentAccount, setCurrentAccount] = useState('');
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(false);

  const sepoliaChainId = '0xaa36a7';

  const getAllTasks = async() => {
    try {
      const {ethereum} = window
  
      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const TaskContract = new ethers.Contract(
          TaskContractAddress,
          TaskAbi.abi,
          signer
        )
  
        let allTasks = await TaskContract.getMyTasks();
        setTasks(allTasks);
      } else {
        console.log("Ethereum object doesn't exist");
      }
    } catch(error) {
      console.log(error);
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window

      if (!ethereum) {
        console.log("Metamask not detected");
        return;
      }

      let chainId = await ethereum.request({ method: 'eth_chainId' })
      if (chainId !== sepoliaChainId) {
        return;
      } else {
        setIsCorrectNetwork(true);
      }
      const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  }

  const addTask= async (e)=>{
    e.preventDefault();

    let task = {
      'taskText': input,
      'isDeleted': false
    };

    try {
      const {ethereum} = window

      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const TaskContract = new ethers.Contract(
          TaskContractAddress,
          TaskAbi.abi,
          signer
        )
        
        const addTaskTx = await TaskContract.addTask(task.taskText);
        await addTaskTx.wait();
        console.log("wait,",addTaskTx);
        await getAllTasks();
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch(error) {
      console.error("Error submitting new Tweet", error);
    }

    setInput('')
  };
  
  const deleteTask = key => async() => {
    console.log(key);

    // Now we got the key, let's delete our tweet
    try {
      const {ethereum} = window

      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const TaskContract = new ethers.Contract(
          TaskContractAddress,
          TaskAbi.abi,
          signer
        )

        let deleteTaskTx = await TaskContract.deleteTask(key);
        await deleteTaskTx.wait();
        await getAllTasks();
      } else {
        console.log("Ethereum object doesn't exist");
      }

    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllTasks()
  },[]);

  console.log('all tasks', tasks)
  return (
    <div>
      {currentAccount === '' ? (
        <button
          className='text-2xl font-bold py-3 px-12 bg-[#f1c232] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out'
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      ) : isCorrectNetwork ? (
        <div className="App">
          <h2> Task Management App</h2>
          <form>
            <TextField id="outlined-basic" label="Make Todo" variant="outlined" style={{ margin: "0px 5px" }} size="small" value={input}
              onChange={e => setInput(e.target.value)} />
            <Button variant="contained" color="primary" onClick={addTask} >Add Task</Button>
          </form>
          <ul>
            {tasks.map(item=> 
            <Task
              key={BigNumber.from(item.id)}
              taskText={item.taskText} 
              onClick={deleteTask(item.id)}
            />)
          }
          </ul>
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center mb-20 font-bold text-2xl gap-y-3'>
          <div>----------------------------------------</div>
          <div>Please connect to the Sepolia Testnet</div>
          <div>and reload the page</div>
          <div>----------------------------------------</div>
        </div>
      )}
    </div>
  );
}

export default App;
