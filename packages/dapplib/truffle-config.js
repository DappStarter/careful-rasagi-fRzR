require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue off smooth fine birth sister common gesture deputy equal general'; 
let testAccounts = [
"0xdac8e681e9cf142d4226874258f9c3ed19b0da2342da8a0d9d651748adce8dd4",
"0xe0d15ee87bcc32d20b3aea6563ebe678f60e04cbb94f1ba192769f27fd100169",
"0x00d526038df3056af155adfe452a42e20e78f089b8f322225e3a7c33d5695d46",
"0x143c4bbb2c7bc6cd01785ab0017f54f6d3a5e57e12c468988226bf2478ae2cbe",
"0xe3824283522a50e692b15214491665d372a24d16a235904c99f72c494fe23443",
"0x0867de8cc85f30316c1022104949fc2eee87103ae9a9aed447de874e5e2bdb88",
"0xf820761cf1007fde34de043bc3b7ac9a3234612af441d04c82b87a3c8dd0b86f",
"0xc7992eec5c14fc6a2030cd26e96750636228dd728897d51e6bbcab710373716b",
"0x14d181873308cbfe2d5c3beccc245d9242b9d5634198dfded89dedb1723cfaa9",
"0xd7c22e7313cb06ce32eba989ac75cae6c86b7e27f2b1300359e075ed470d608e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

