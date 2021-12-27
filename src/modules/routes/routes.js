const express = require('express');
const router = express.Router();

const {
  getAllPurchases,
  createNewPurchase,
  changePurchaseInfo,
  deletePurchase
} = require("../controllers/task.controller");;

//Purchases routers
router.get('/allPurchases', getAllPurchases);
router.post('/createPurchase', createNewPurchase);
router.delete('/deletePurchase', deletePurchase);
router.patch('/updatePurchase', changePurchaseInfo);

//User routers

module.exports = router