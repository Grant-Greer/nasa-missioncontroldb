import { planets } from '../models/planets.model';

function getAllPlanets(req, res) {
  res.status(200).json(planets);
}

export default { getAllPlanets };
