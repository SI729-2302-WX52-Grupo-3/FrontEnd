export class MedicalHistory {
  id = 1;
  allergy = '';
  pathological = '';
  weight = '95';
  bodyMass = 28;
  pacientId = 1;

  constructor(
    id: number,
    allergy: string,
    pathological: string,
    weight: string,
    bodyMass: number,
    pacientId: number
  ) {
    this.id = id;
    this.allergy = allergy;
    this.pacientId = pacientId;
    this.pathological = pathological;
    this.weight = weight;
    this.bodyMass = bodyMass;
  }
}
