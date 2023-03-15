import { create } from 'zustand'

type BalanceStore = {
    balance: number
    setBalance: (balance: number) => void
}

export const useBalanceStore = create<BalanceStore>((set) => ({
    balance: 0,
    setBalance: (balance: number) => set({ balance }),
}))

type ethUsdValueStore = {
    ethUsdValue: number
    setEthUsdValue: (ethUsdValue: number) => void
}

export const useEthUsdValueStore = create<ethUsdValueStore>((set) => ({
    ethUsdValue: 1500,
    setEthUsdValue: (ethUsdValue: number) => set({ ethUsdValue }),
}))

type PlayerInfo = {
    playerId: number
    playerName: string
    keysOwned: number
    winningsVault: number
    generalVault: number
    affVault: number
    playerRoundEth: number
}


type PlayerInfoStore = {
    playerInfo: PlayerInfo
    setPlayerInfo: (playerInfo: PlayerInfo) => void
}

export const usePlayerInfoStore = create<PlayerInfoStore>((set) => ({
    playerInfo: {
        playerId: 0,
        playerName: "",
        keysOwned: 0,
        winningsVault: 0,
        generalVault: 0,
        affVault: 0,
        playerRoundEth: 0,
    },
    setPlayerInfo: (playerInfo: PlayerInfo) => set({ playerInfo }),
}))

type RoundInfo = {
    icoEth: number
    roundId: number
    totalKeys: number
    endTime: number
    startTime: number
    currentPot: number
    currentWinId: number
    currentWinAddress: string
    currentWinName: string
    roundWhales: number
    roundBears: number
    roundSneks: number
    roundBulls: number
    airdropTracker: number
}

type RoundInfoStore = {
    roundInfo: RoundInfo
    setRoundInfo: (roundInfo: RoundInfo) => void
}

export const useRoundInfoStore = create<RoundInfoStore>((set) => ({
    roundInfo: {
        icoEth: 0,
        roundId: 0,
        totalKeys: 0,
        endTime: 0,
        startTime: 0,
        currentPot: 0,
        currentWinId: 0,
        currentWinAddress: "",
        currentWinName: "",
        roundWhales: 0,
        roundBears: 0,
        roundSneks: 0,
        roundBulls: 0,
        airdropTracker: 0,
    },
    setRoundInfo: (roundInfo: RoundInfo) => set({ roundInfo }),
}))


type refferer = {
    refferer: string;
    setRefferer: (ref: string) => void;
}

export const useReffererStore = create<refferer>((set) => ({
    refferer: "solaire",
    setRefferer: (refferer: string) => set({ refferer }),
}))

type tokenUsdValueStore = {
    tokenUsdValue: number
    setTokenUsdValue: (tokenUsdValue: number) => void
}

export const useTokenUsdValueStore = create<tokenUsdValueStore>((set) => ({
    tokenUsdValue: 0.00036,
    setTokenUsdValue: (tokenUsdValue: number) => set({ tokenUsdValue }),
}))

