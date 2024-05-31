// Step 1: Create a variable to hold your NFTs
let nftCollection = [];

// Step 2: Function to mint an NFT
function mintNFT(name, description, category, clothType, license) {
    const nft = {
        name: name,
        description: description,
        category: category,
        clothType: clothType,
        license: license,
        tokenId: nftCollection.length + 1
    };
    nftCollection.push(nft);
    console.log("minted :" , name ,"\n");


}

// Step 3: Function to list all NFTs
function listNFTs() {
    let i = 0;
    while(i < nftCollection.length){
        console.log(`NFT ${i + 1}`);
        console.log(`Name: ${nftCollection[i].name}`);
        console.log(`Description: ${nftCollection[i].description}`);
        console.log(`Category: ${nftCollection[i].category}`);
        console.log(`Cloth Type: ${nftCollection[i].clothType}`);
        console.log(`License: ${nftCollection[i].license}`);
        console.log(`Token ID: ${nftCollection[i].tokenId}`);
        console.log('---------------------');
        i++;

    }
}

// Step 4: Function to get the total supply of NFTs
function getTotalSupply() {
    console.log("Total Supply of Nfts : " ,nftCollection.length); 
    
        
}

// Call the functions to test
mintNFT("Abstract Universe", "Colorful abstract representation of the universe", "Art", "Digital", "Standard License");
mintNFT("Cyberpunk Cityscape", "Futuristic cityscape with neon lights and flying cars", "Sci-Fi", "Digital", "Extended License");
mintNFT("Steampunk Goggles", "Vintage goggles with steampunk design", "Fashion", "Physical", "Standard License");
mintNFT("Phoenix Rising", "A mythical phoenix rising from the ashes", "Fantasy", "Digital", "Extended License");
mintNFT("Jungle Panther", "A sleek black panther prowling through the jungle", "Animals", "Digital", "Standard License");
listNFTs();
getTotalSupply();
