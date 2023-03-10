import {createContext, useContext, useEffect} from "react";
import detectEthereumProvider from "@metamask/detect-provider";

const Web3Context = createContext(null)

export default function Web3Provider({children}) {
    useEffect(() => {
        const loadProvider = async () => {
            const provider = await detectEthereumProvider()
        }
        loadProvider()
    }, []);

    return (
        <Web3Context.Provider value={{test: "hello"}}>
            {children}
        </Web3Context.Provider>
    )
}

export function useWeb3() {
    return useContext(Web3Context)
}