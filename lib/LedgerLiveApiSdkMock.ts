import data from "./mocks.json";
import {RequestAccountParams} from "./LedgerLiveApiSdk.types";
import {generateRandomTxID} from "../src/DAPPBrowser/mocks";
import {Account, Currency, SignedTransaction} from "./types"
import {deserializeAccount} from "./serializers";

const { rawAccounts, rawCurrencies } = data;

const accounts = rawAccounts.map(deserializeAccount);
const currencies = rawCurrencies;



export default class LedgerLiveApiMock {
    connected: boolean = false;

    connect() {
        this.connected = true;
    }

    async disconnect() {
        this.connected = false;
    }

    /** Legder Live Methods */

    async requestAccount(_params: RequestAccountParams): Promise<Account> {
        return accounts[0];
    }

    async listCurrencies(): Promise<Currency[]> {
        if (!this.connected) {
            throw new Error("Ledger Live API not connected");
        }

        return currencies;
    }

    async listAccounts(): Promise<Account[]> {
        if (!this.connected) {
            throw new Error("Ledger Live API not connected");
        }
        return accounts;
    }

    async getAccount(accountId: string): Promise<Account> {
        if (!this.connected) {
            throw new Error("Ledger Live API not connected");
        }
        const account = accounts.find((account: any) => account.id === accountId);

        if (!account) {
            throw new Error("Account not found");
        }
        return account;
    }

    async receive(accountId: string): Promise<string> {
        if (!this.connected) {
            throw new Error("Ledger Live API not connected");
        }
        const account = accounts.find((account: any) => account.id === accountId);
        if (!account) {
            throw new Error("Account not found");
        }
        return account.address;
    }

    async signTransaction(_accountId: string, _transaction: Object) {
        if (!this.connected) {
            throw new Error("Ledger Live API not connected");
        }
        return { operation: {}, signature: generateRandomTxID(109), expirationDate: null }
    }

    async broadcastSignedTransaction(_accountId: string, _signedTransaction: SignedTransaction) {
        if (!this.connected) {
            throw new Error("Ledger Live API not connected");
        }
        return generateRandomTxID(64);
    }

}