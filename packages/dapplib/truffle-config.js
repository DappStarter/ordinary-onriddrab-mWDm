require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remember universe include enroll boil tone'; 
let testAccounts = [
"0x28cf20dc36d3cb553f8a506685d8ff4b1a76cf53562d557f5075eeb9cef448cc",
"0x8f9b09938bf26bbd467b3c39c6a26d7667aa8b10d277c215dcb30445f82bf692",
"0x70de808c4d7b6fb21106a22d4812756b75a5e90b023695f09870c4e462f90071",
"0xb5d5b2ef1009230950d8596df7196a5096de2794e1edc658eed25187b9b77869",
"0xdac2d88805048c47b20883c42639dbf73c91ee18c466ee7dd78ff33e38624d31",
"0x783e223f5b902a8d991fe472732c8cd9eab23724e56481fd8649c3aab8e6891a",
"0x18993e82d313ef9d5707e09a35980026519893b6f61a3d0c03055056a251e753",
"0xe4ccbd9dd852475d3f838dae4799a84cceb080d2b7cc6ab650907355bcd42303",
"0x6492ff7e341dc4f696da77697864de2b76298b5ef7ff6dd727c7308d3b8d23af",
"0xc44adb8aff8df20334d3bfa513cc1a6c7c6b95711dc1ad168d97a11cae1a92ea"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

