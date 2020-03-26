import crypto from 'crypto';
import connection from '../../database/connection';

class OngController {
  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;
    const id = crypto.randomBytes(4).toString('HEX');
    await connection('ongs').insert({
      id,
      name,
      email,
      city,
      whatsapp,
      uf,
    });
    return res.json({ id });
  }

  async index(req, res) {
    const ongs = await connection('ongs').select('*');
    return res.json(ongs);
  }
}
export default new OngController();
