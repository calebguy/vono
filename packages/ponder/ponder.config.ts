import { createConfig } from "ponder";
import { http } from "viem";

import { ExampleContractAbi } from "./abis/ExampleContractAbi";

export default createConfig({
	chains: {
		mainnet: {
			id: 1,
			rpc: http(process.env.PONDER_RPC_URL_1),
		},
	},
	contracts: {
		ExampleContract: {
			chain: "mainnet",
			abi: ExampleContractAbi,
			address: "0x0000000000000000000000000000000000000000",
			startBlock: 1234567,
		},
	},
});
