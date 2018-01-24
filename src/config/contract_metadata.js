module.exports = {
  BodhiToken: {
    address: 'f6177bc9812eeb531907621af6641a41133dea9e',
    abi: [{
      constant: true, inputs: [], name: 'name', outputs: [{ name: '', type: 'string' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: false, inputs: [{ name: '_spender', type: 'address' }, { name: '_value', type: 'uint256' }], name: 'approve', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function',
    }, {
      constant: true, inputs: [], name: 'totalSupply', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: false, inputs: [{ name: '_from', type: 'address' }, { name: '_to', type: 'address' }, { name: '_value', type: 'uint256' }], name: 'transferFrom', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function',
    }, {
      constant: true, inputs: [], name: 'decimals', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: false, inputs: [{ name: '_to', type: 'address' }, { name: '_amount', type: 'uint256' }], name: 'mintByOwner', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function',
    }, {
      constant: true, inputs: [{ name: '_owner', type: 'address' }], name: 'balanceOf', outputs: [{ name: 'balance', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'symbol', outputs: [{ name: '', type: 'string' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: false, inputs: [{ name: '_to', type: 'address' }, { name: '_value', type: 'uint256' }], name: 'transfer', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function',
    }, {
      constant: true, inputs: [{ name: '_owner', type: 'address' }, { name: '_spender', type: 'address' }], name: 'allowance', outputs: [{ name: 'remaining', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: false, inputs: [{ name: 'newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
    }, {
      constant: true, inputs: [], name: 'tokenTotalSupply', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor',
    }, {
      anonymous: false, inputs: [{ indexed: false, name: 'supply', type: 'uint256' }, { indexed: true, name: 'to', type: 'address' }, { indexed: false, name: 'amount', type: 'uint256' }], name: 'Mint', type: 'event',
    }, {
      anonymous: false, inputs: [{ indexed: true, name: '_owner', type: 'address' }, { indexed: true, name: '_spender', type: 'address' }, { indexed: false, name: '_value', type: 'uint256' }], name: 'Approval', type: 'event',
    }, {
      anonymous: false, inputs: [{ indexed: true, name: '_from', type: 'address' }, { indexed: true, name: '_to', type: 'address' }, { indexed: false, name: '_value', type: 'uint256' }], name: 'Transfer', type: 'event',
    }],
  },

  BaseContract: {
    abi: [{
      constant: true, inputs: [], name: 'resultIndex', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'version', outputs: [{ name: '', type: 'uint16' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'getBetBalances', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'getVoteBalances', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'getTotalVotes', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'getTotalBets', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'INVALID_RESULT_INDEX', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'numOfResults', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function',
    }],
  },

  EventFactory: {
    address: 'd49b4e6133957c635ecbabfb67fd14fe74da52cd',
    abi: [{
      constant: true, inputs: [{ name: '', type: 'bytes32' }], name: 'topics', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'version', outputs: [{ name: '', type: 'uint16' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: false, inputs: [{ name: '_oracle', type: 'address' }, { name: '_name', type: 'bytes32[10]' }, { name: '_resultNames', type: 'bytes32[10]' }, { name: '_bettingStartBlock', type: 'uint256' }, { name: '_bettingEndBlock', type: 'uint256' }, { name: '_resultSettingStartBlock', type: 'uint256' }, { name: '_resultSettingEndBlock', type: 'uint256' }], name: 'createTopic', outputs: [{ name: 'topicEvent', type: 'address' }], payable: false, stateMutability: 'nonpayable', type: 'function',
    }, {
      inputs: [{ name: '_addressManager', type: 'address' }], payable: false, stateMutability: 'nonpayable', type: 'constructor',
    }, {
      anonymous: false, inputs: [{ indexed: true, name: '_version', type: 'uint16' }, { indexed: true, name: '_topicAddress', type: 'address' }, { indexed: false, name: '_name', type: 'bytes32[10]' }, { indexed: false, name: '_resultNames', type: 'bytes32[11]' }, { indexed: false, name: '_numOfResults', type: 'uint8' }], name: 'TopicCreated', type: 'event',
    }],
  },

  TopicEvent: {
    abi: [{
      constant: false, inputs: [{ name: '_resultIndex', type: 'uint8' }, { name: '_sender', type: 'address' }, { name: '_amount', type: 'uint256' }], name: 'voteFromOracle', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function',
    }, {
      constant: true, inputs: [], name: 'totalBotValue', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'resultIndex', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'calculateWinnings', outputs: [{ name: '', type: 'uint256' }, { name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [{ name: '', type: 'address' }], name: 'didWithdraw', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'status', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: false, inputs: [{ name: '_better', type: 'address' }, { name: '_resultIndex', type: 'uint8' }], name: 'betFromOracle', outputs: [], payable: true, stateMutability: 'payable', type: 'function',
    }, {
      constant: true, inputs: [], name: 'getFinalResult', outputs: [{ name: '', type: 'uint8' }, { name: '', type: 'bool' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: false, inputs: [], name: 'decentralizedOracleFinalizeResult', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function',
    }, {
      constant: true, inputs: [], name: 'version', outputs: [{ name: '', type: 'uint16' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [{ name: '', type: 'uint256' }], name: 'eventResults', outputs: [{ name: '', type: 'bytes32' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [{ name: '', type: 'uint256' }], name: 'oracles', outputs: [{ name: 'oracleAddress', type: 'address' }, { name: 'didSetResult', type: 'bool' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: false, inputs: [{ name: '_oracle', type: 'address' }, { name: '_resultIndex', type: 'uint8' }, { name: '_consensusThreshold', type: 'uint256' }], name: 'centralizedOracleSetResult', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
    }, {
      constant: true, inputs: [], name: 'totalQtumValue', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'getBetBalances', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'QTUM_PERCENTAGE', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'getVoteBalances', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'getTotalVotes', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'getTotalBets', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'INVALID_RESULT_INDEX', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'numOfResults', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: false, inputs: [], name: 'withdrawWinnings', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
    }, {
      constant: false, inputs: [{ name: '_resultIndex', type: 'uint8' }, { name: '_currentConsensusThreshold', type: 'uint256' }], name: 'decentralizedOracleSetResult', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function',
    }, {
      constant: false, inputs: [{ name: '_newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
    }, {
      constant: true, inputs: [{ name: '', type: 'uint256' }], name: 'eventName', outputs: [{ name: '', type: 'bytes32' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      inputs: [{ name: '_version', type: 'uint16' }, { name: '_owner', type: 'address' }, { name: '_centralizedOracle', type: 'address' }, { name: '_name', type: 'bytes32[10]' }, { name: '_resultNames', type: 'bytes32[11]' }, { name: '_numOfResults', type: 'uint8' }, { name: '_bettingStartBlock', type: 'uint256' }, { name: '_bettingEndBlock', type: 'uint256' }, { name: '_resultSettingStartBlock', type: 'uint256' }, { name: '_resultSettingEndBlock', type: 'uint256' }, { name: '_addressManager', type: 'address' }], payable: false, stateMutability: 'nonpayable', type: 'constructor',
    }, { payable: true, stateMutability: 'payable', type: 'fallback' }, {
      anonymous: false, inputs: [{ indexed: true, name: '_version', type: 'uint16' }, { indexed: true, name: '_eventAddress', type: 'address' }, { indexed: false, name: '_finalResultIndex', type: 'uint8' }], name: 'FinalResultSet', type: 'event',
    }, {
      anonymous: false, inputs: [{ indexed: true, name: '_version', type: 'uint16' }, { indexed: true, name: '_winner', type: 'address' }, { indexed: false, name: '_qtumTokenWon', type: 'uint256' }, { indexed: false, name: '_botTokenWon', type: 'uint256' }], name: 'WinningsWithdrawn', type: 'event',
    }, {
      anonymous: false, inputs: [{ indexed: true, name: '_previousOwner', type: 'address' }, { indexed: true, name: '_newOwner', type: 'address' }], name: 'OwnershipTransferred', type: 'event',
    }],
  },

  OracleFactory: {
    address: '18a4fd5add78af3deb2e3dd97a47f9dc008caf82',
    abi: [{
      constant: false, inputs: [{ name: '_eventAddress', type: 'address' }, { name: '_numOfResults', type: 'uint8' }, { name: '_oracle', type: 'address' }, { name: '_bettingStartBlock', type: 'uint256' }, { name: '_bettingEndBlock', type: 'uint256' }, { name: '_resultSettingStartBlock', type: 'uint256' }, { name: '_resultSettingEndBlock', type: 'uint256' }, { name: '_consensusThreshold', type: 'uint256' }], name: 'createCentralizedOracle', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'nonpayable', type: 'function',
    }, {
      constant: true, inputs: [], name: 'version', outputs: [{ name: '', type: 'uint16' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: false, inputs: [{ name: '_eventAddress', type: 'address' }, { name: '_numOfResults', type: 'uint8' }, { name: '_lastResultIndex', type: 'uint8' }, { name: '_arbitrationEndBlock', type: 'uint256' }, { name: '_consensusThreshold', type: 'uint256' }], name: 'createDecentralizedOracle', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'nonpayable', type: 'function',
    }, {
      constant: true, inputs: [{ name: '', type: 'bytes32' }], name: 'oracles', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      inputs: [{ name: '_addressManager', type: 'address' }], payable: false, stateMutability: 'nonpayable', type: 'constructor',
    }, {
      anonymous: false, inputs: [{ indexed: true, name: '_version', type: 'uint16' }, { indexed: true, name: '_contractAddress', type: 'address' }, { indexed: true, name: '_eventAddress', type: 'address' }, { indexed: false, name: '_numOfResults', type: 'uint8' }, { indexed: false, name: '_oracle', type: 'address' }, { indexed: false, name: '_bettingStartBlock', type: 'uint256' }, { indexed: false, name: '_bettingEndBlock', type: 'uint256' }, { indexed: false, name: '_resultSettingStartBlock', type: 'uint256' }, { indexed: false, name: '_resultSettingEndBlock', type: 'uint256' }, { indexed: false, name: '_consensusThreshold', type: 'uint256' }], name: 'CentralizedOracleCreated', type: 'event',
    }, {
      anonymous: false, inputs: [{ indexed: true, name: '_version', type: 'uint16' }, { indexed: true, name: '_contractAddress', type: 'address' }, { indexed: true, name: '_eventAddress', type: 'address' }, { indexed: false, name: '_numOfResults', type: 'uint8' }, { indexed: false, name: '_lastResultIndex', type: 'uint8' }, { indexed: false, name: '_arbitrationEndBlock', type: 'uint256' }, { indexed: false, name: '_consensusThreshold', type: 'uint256' }], name: 'DecentralizedOracleCreated', type: 'event',
    }],
  },

  CentralizedOracle: {
    abi: [{
      constant: true, inputs: [], name: 'resultIndex', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'bettingEndBlock', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'version', outputs: [{ name: '', type: 'uint16' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'oracle', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: false, inputs: [{ name: '_resultIndex', type: 'uint8' }], name: 'setResult', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
    }, {
      constant: true, inputs: [], name: 'getBetBalances', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'getVoteBalances', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'getTotalVotes', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'getTotalBets', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'resultSettingStartBlock', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'INVALID_RESULT_INDEX', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'finished', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'numOfResults', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: false, inputs: [{ name: '_resultIndex', type: 'uint8' }], name: 'bet', outputs: [], payable: true, stateMutability: 'payable', type: 'function',
    }, {
      constant: true, inputs: [], name: 'resultSettingEndBlock', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'bettingStartBlock', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: false, inputs: [{ name: '_newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
    }, {
      constant: true, inputs: [], name: 'consensusThreshold', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'eventAddress', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      inputs: [{ name: '_version', type: 'uint16' }, { name: '_owner', type: 'address' }, { name: '_eventAddress', type: 'address' }, { name: '_numOfResults', type: 'uint8' }, { name: '_oracle', type: 'address' }, { name: '_bettingStartBlock', type: 'uint256' }, { name: '_bettingEndBlock', type: 'uint256' }, { name: '_resultSettingStartBlock', type: 'uint256' }, { name: '_resultSettingEndBlock', type: 'uint256' }, { name: '_consensusThreshold', type: 'uint256' }], payable: false, stateMutability: 'nonpayable', type: 'constructor',
    }, { payable: true, stateMutability: 'payable', type: 'fallback' }, {
      anonymous: false, inputs: [{ indexed: true, name: '_version', type: 'uint16' }, { indexed: true, name: '_oracleAddress', type: 'address' }, { indexed: true, name: '_participant', type: 'address' }, { indexed: false, name: '_resultIndex', type: 'uint8' }, { indexed: false, name: '_votedAmount', type: 'uint256' }], name: 'OracleResultVoted', type: 'event',
    }, {
      anonymous: false, inputs: [{ indexed: true, name: '_version', type: 'uint16' }, { indexed: true, name: '_oracleAddress', type: 'address' }, { indexed: false, name: '_resultIndex', type: 'uint8' }], name: 'OracleResultSet', type: 'event',
    }, {
      anonymous: false, inputs: [{ indexed: true, name: '_previousOwner', type: 'address' }, { indexed: true, name: '_newOwner', type: 'address' }], name: 'OwnershipTransferred', type: 'event',
    }],
  },

  DecentralizedOracle: {
    abi: [{
      constant: true, inputs: [], name: 'resultIndex', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'arbitrationEndBlock', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'lastResultIndex', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'version', outputs: [{ name: '', type: 'uint16' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: false, inputs: [], name: 'finalizeResult', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
    }, {
      constant: true, inputs: [], name: 'getBetBalances', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'getVoteBalances', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'getTotalVotes', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: false, inputs: [{ name: '_eventResultIndex', type: 'uint8' }, { name: '_botAmount', type: 'uint256' }], name: 'voteResult', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
    }, {
      constant: true, inputs: [], name: 'getTotalBets', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'INVALID_RESULT_INDEX', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'finished', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'numOfResults', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: false, inputs: [{ name: '_newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
    }, {
      constant: true, inputs: [], name: 'consensusThreshold', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      constant: true, inputs: [], name: 'eventAddress', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function',
    }, {
      inputs: [{ name: '_version', type: 'uint16' }, { name: '_owner', type: 'address' }, { name: '_eventAddress', type: 'address' }, { name: '_numOfResults', type: 'uint8' }, { name: '_lastResultIndex', type: 'uint8' }, { name: '_arbitrationEndBlock', type: 'uint256' }, { name: '_consensusThreshold', type: 'uint256' }], payable: false, stateMutability: 'nonpayable', type: 'constructor',
    }, {
      anonymous: false, inputs: [{ indexed: true, name: '_version', type: 'uint16' }, { indexed: true, name: '_oracleAddress', type: 'address' }, { indexed: true, name: '_participant', type: 'address' }, { indexed: false, name: '_resultIndex', type: 'uint8' }, { indexed: false, name: '_votedAmount', type: 'uint256' }], name: 'OracleResultVoted', type: 'event',
    }, {
      anonymous: false, inputs: [{ indexed: true, name: '_version', type: 'uint16' }, { indexed: true, name: '_oracleAddress', type: 'address' }, { indexed: false, name: '_resultIndex', type: 'uint8' }], name: 'OracleResultSet', type: 'event',
    }, {
      anonymous: false, inputs: [{ indexed: true, name: '_previousOwner', type: 'address' }, { indexed: true, name: '_newOwner', type: 'address' }], name: 'OwnershipTransferred', type: 'event',
    }],
  },
};