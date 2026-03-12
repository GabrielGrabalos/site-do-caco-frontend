/**
 * Model que representa um professor
 */
export class Professor {
  constructor(data) {
    this.id = data.id;
    this.name = data.name || '';
  }

  static fromDTO(dto) {
    return new Professor(dto);
  }

  static fromDTOArray(dtoArray) {
    return dtoArray.map((dto) => Professor.fromDTO(dto));
  }
}
