const Supplier = require("../models/Supplier");
const SupplierLedger = require("../models/supplierLedger");

exports.getSuppliersService = async () => {
  const response = await Supplier.find({}).select("sortName _id");
  return response;
};

exports.getSupplierService = async (_id) => {
  const response = await Supplier.findById(_id).populate("ledger");
  return response;
};

exports.postSupplierService = async (supplieData) => {
  const { fullName: name, address, contact } = supplieData;

  const supplierLedger = {
    name,
    address,
    contact,
    currentBalance: 0,
    payments: [],
    credits: [],
  };

  const ledger = await SupplierLedger.create(supplierLedger);

  if (ledger._id) {
    const newSupplier = { ...supplieData, ledger: ledger._id };
    const response = await Supplier.create(newSupplier);
    return response;
  }
};

exports.updateSupplierService = async (supplieData) => {
  console.log(supplieData);

  const response = await Supplier.updateOne(
    {
      _id: supplieData._id,
    },
    {
      $set: supplieData,
    },
    {
      runValidators: true,
    }
  );

  console.log(response);

  return response;
};
