import { Veiculo } from "./interfaces/veiculos.interface";
import { filtrarVeiculos } from "./utils/filtro";

const filtro = new filtrarVeiculos();

export class Veiculos {
  public filtraMarca(marca: string): Veiculo[] | undefined {
    return filtro.filtrarMarca(marca);
  }

  public filtraAno(ano: number): Veiculo[] | undefined {
    return filtro.filtrarAno(ano);
  }

  public soma(marca: string): number {
    return filtro.soma(marca);
  }
}
