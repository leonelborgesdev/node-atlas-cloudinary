import Client from "../models/client.model";

export const getClientById = (req, res) => {
  try {
    const { id } = req.params;
    const client = Client.findById(id);

    return res.json(client);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const createClient = async (req, res) => {
  try {
    const { name, phone } = req.body;
    const client = new Client({
      name,
      phone,
    });
    await client.save();
    return res.json(client);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
