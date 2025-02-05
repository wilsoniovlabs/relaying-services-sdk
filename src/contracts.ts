import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { RelayingServicesAddresses } from './interfaces';
import { getContract, getContractAddresses } from './utils';
import { DEFAULT_NETWORK_ID } from './constants';
import {
    DeployVerifier,
    RelayVerifier,
    SmartWalletFactory
} from '@rsksmart/rif-relay-contracts';

export class Contracts {
    private readonly web3Instance: Web3;
    public readonly addresses: RelayingServicesAddresses;

    private smartWalletFactory: Contract;
    private smartWalletRelayVerifier: Contract;
    private smartWalletDeployVerifier: Contract;

    constructor(web3Instance: Web3, chainId: number) {
        this.web3Instance = web3Instance;
        this.addresses = getContractAddresses(chainId ?? DEFAULT_NETWORK_ID);
        this.initialize()
            .then(() => {
                console.debug('Contracts initialized correctly');
            })
            .catch((error) => {
                console.error('Contracts fail to initialize', error);
            });
    }

    async initialize(): Promise<void> {
        this.smartWalletRelayVerifier =
            await new this.web3Instance.eth.Contract(
                RelayVerifier.abi,
                this.addresses.smartWalletRelayVerifier
            );
        this.smartWalletDeployVerifier =
            await new this.web3Instance.eth.Contract(
                DeployVerifier.abi,
                this.addresses.smartWalletDeployVerifier
            );
    }

    public getSmartWalletFactory(): Contract {
        if (!this.smartWalletFactory) {
            this.smartWalletFactory = getContract(
                this.web3Instance,
                SmartWalletFactory.abi,
                this.addresses.smartWalletFactory
            );
        }
        return this.smartWalletFactory;
    }

    public getSmartWalletRelayVerifier(): Contract {
        if (!this.smartWalletRelayVerifier) {
            this.smartWalletRelayVerifier = getContract(
                this.web3Instance,
                RelayVerifier.abi,
                this.addresses.smartWalletRelayVerifier
            );
        }
        return this.smartWalletRelayVerifier;
    }

    public getSmartWalletDeployVerifier(): Contract {
        if (!this.smartWalletDeployVerifier) {
            this.smartWalletDeployVerifier = getContract(
                this.web3Instance,
                DeployVerifier.abi,
                this.addresses.smartWalletDeployVerifier
            );
        }
        return this.smartWalletDeployVerifier;
    }
}
