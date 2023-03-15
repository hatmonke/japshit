import Axios from 'axios';
import { tokenAddress } from '@utils/config';

// Get the current ETH/USD value from the CoinGecko API https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2&vs_currencies=usd

export const GetEthUsdValue = async () => {
    const response = await Axios.get(
        'https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2&vs_currencies=usd'
    );
    
    return response.data['0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'].usd;
}

export const GetTokenUsdValue = async () => {
    const response = await Axios.get(
        `https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${tokenAddress}&vs_currencies=usd`
    );
    const addressToLowerCase = tokenAddress.toLowerCase();

    return response.data[addressToLowerCase].usd;
}