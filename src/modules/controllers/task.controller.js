const Purchase = require("../../db/models/task/index");

module.exports.getAllPurchases = (req, res, next) => {
  Purchase.find().then((result) => {
    res.send({ data: result });
  });
};

module.exports.createNewPurchase = (req, res, next) => {

  const purchases = new Purchase(req.body);
  purchases.save().then((result) => {
    res.send({ data: result });
  });
};

module.exports.changePurchaseInfo = (req, res) => {
  Purchase.updateOne({ _id: req.body._id }, req.body).then((result) => {
    Purchase.find().then((result) => {
      res.send({ data: result });
    });
  });
};

module.exports.deletePurchase = (req, res) => {
  if (req.query._id) {
    Purchase.deleteOne({ _id: req.query._id }).then((result) => {
      Purchase.find().then((result) => {
        res.send({ data: result });
      });
    });
  } else {
    res.status(500).send("Error");
  }
}
