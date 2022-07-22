const fs =require('fs')
const express = require('express')
var axios = require('axios');
const app = express()

var assets= ["AAVEEUR","ADAEUR","ALGOEUR","ALICEEUR","ANKREUR",
             "ARPAEUR","AVAXEUR","AXSEUR","BATEUR","BCHEUR",
             "BITAY1EUR","BITAY2EUR","BITAYEUR","BSVEUR","BTCEUR",
             "BTTCEUR","C98EUR","CEEKEUR","CELREUR","CHZEUR",
             "COMPEUR","CRVEUR","CVCEUR","DAIEUR","DASHEUR",
             "DOGEEUR","DOTEUR","DYDXEUR","EGTEUR","EKTEUR",
             "ELFEUR","ENJEUR","ETCEU","ETHEUR","FIROEUR",
             "FTMEUR","FTTEUR","GALAEUR","GLMEUR","GRTEUR",
             "HOTEUR","HTEUR","KANEUR","KNCEUR","LAMBEUR",
             "LINKEUR","LRCEUR","LTCEUR","MANAEUR","MATICEUR",
             "MKREUR","MTLEUR","OGNEUR","OMGEUR","RENEUR",
             "RVNEUR","SANDEUR","SHIBEUR","SLPEUR", "SNTEUR",
             "SOLEUR","SRMEUR","STORJEUR","SXPEUR","TRXEUR",
             "UNIEUR","VETEUR","WAVESEUR","WBTCEUR","WTCEUR",
             "XLMEUR","XRPEUR","XTZEUR","ZECEUR","ZRXEUR"];


    async function getAssets() {
        for (var i = 0;i<assets.length;i++){
            try {
                const response = await axios.get('https://api.binance.com/api/v3/exchangeInfo');
                console.log(response.data)
                /*console.log(assets[i])
                if(response.data.error == 'EQuery:Unknown asset pair'){
                    console.log('Pair Bulunamadı');
                } else {
                    console.log('Pair Bulundu');
                }*/
                
            } catch (error) {
                console.error(error);
            }
        }
    }

    

    
    getAssets()
 

    /*async function getAssets() {
        
                const response = await axios.get('https://api.kraken.com/0/public/AssetPairs?pair='+assets[1]);
                console.log(assets[1])
                const zort=response.data.result.ADAEUR.ordermin
                console.log(zort)
    }*/

