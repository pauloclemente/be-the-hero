import connection from '../../database/connection';

class IncidentController {
  async index(req, res) {
    const ong_id = req.headers.authorization;

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');
    return res.json(incidents);
  }
}
export default new IncidentController();
