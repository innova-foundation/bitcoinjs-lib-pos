// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731

module.exports = {
  bitcoin: {
    magic: 0xd9b4bef9,
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80,
    dustThreshold: 546, // https://github.com/bitcoin/bitcoin/blob/v0.9.2/src/core.h#L151-L162
    isPoS: false
  },
  testnet: {
    magic: 0xd9b4bef9,
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
    dustThreshold: 546,
    isPoS: false
  },
  litecoin: {
    magic: 0xd9b4bef9,
    messagePrefix: '\x19Litecoin Signed Message:\n',
    bip32: {
      public: 0x019da462,
      private: 0x019d9cfe
    },
    pubKeyHash: 0x30,
    scriptHash: 0x05,
    wif: 0xb0,
    dustThreshold: 0, // https://github.com/litecoin-project/litecoin/blob/v0.8.7.2/src/main.cpp#L360-L365
    isPoS: false
  },
  dogecoin: {
    messagePrefix: '\x19Dogecoin Signed Message:\n',
    bip32: {
      public: 0x02facafd,
      private: 0x02fac398
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x16,
    wif: 0x9e,
    dustThreshold: 0, // https://github.com/dogecoin/dogecoin/blob/v1.7.1/src/core.h#L155-L160
    isPoS: false
  },
  denarius: {
    magicPrefix: '\x19Denarius Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x5a,
    wif: 0x9e,
    dustThreshold: 0,
	isPoS: true
  },
  innova: {
    magicPrefix: '\x19Innova Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x66,
    scriptHash: 0x5a,
    wif: 0x89,
    dustThreshold: 0,
	isPoS: true
  },
  peercoin: {
    messagePrefix: '\x17PPcoin Signed Message:\n',
    bip32: {
      public: 0x01da950b,  // start with "Ppub..."
      private: 0x01da90d0  // start with "Pprv..."
    },
    pubKeyHash: 0x37,
    scriptHash: 0x75,
    wif: 0xb7,
    dustThreshold: 0,
    isPoS: true
  },
}
