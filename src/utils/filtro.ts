import * as veiculosData from "../database/veiculos.json";
import { VeiculoTipo, Veiculo } from "../interfaces/veiculos.interface";

const veiculos: VeiculoTipo = veiculosData as VeiculoTipo;

export class filtrarVeiculos {
  public filtrarMarca(marca: string): Veiculo[] | undefined {
    const veiculosFiltrados: Veiculo[] = [];

    this.filtrarVeiculos(veiculos.carros, veiculosFiltrados, marca);
    this.filtrarVeiculos(veiculos.motos, veiculosFiltrados, marca);

    return veiculosFiltrados.length > 0 ? veiculosFiltrados : undefined;
  }

  public filtrarAno(ano: number): Veiculo[] | undefined {
    const veiculosFiltrados: Veiculo[] = [];

    this.filtrarVeiculos(veiculos.carros, veiculosFiltrados, null, ano);
    this.filtrarVeiculos(veiculos.motos, veiculosFiltrados, null, ano);

    return veiculosFiltrados.length > 0 ? veiculosFiltrados : undefined;
  }

  public soma(marca: string): number {
    const veiculosFiltrados: Veiculo[] = [];

    this.filtrarVeiculos(veiculos.carros, veiculosFiltrados, marca);
    this.filtrarVeiculos(veiculos.motos, veiculosFiltrados, marca);

    const somaValores = veiculosFiltrados.reduce(
      (acc, veiculo) => acc + veiculo.valor,
      0
    );

    return somaValores;
  }

  private filtrarVeiculos(
    listaVeiculos: { novos?: Veiculo[]; usados?: Veiculo[] }[],
    veiculosFiltrados: Veiculo[],
    marca?: string | unknown,
    ano?: number | unknown
  ): void {
    listaVeiculos.forEach((condicao) => {
      if (condicao.novos) {
        veiculosFiltrados.push(
          ...condicao.novos.filter((veiculo) =>
            this.atendeFiltro(veiculo, marca, ano)
          )
        );
      }
      if (condicao.usados) {
        veiculosFiltrados.push(
          ...condicao.usados.filter((veiculo) =>
            this.atendeFiltro(veiculo, marca, ano)
          )
        );
      }
    });
  }

  private atendeFiltro(
    veiculo: Veiculo,
    marca?: string | unknown,
    ano?: number | unknown
  ): boolean {
    return (
      (!marca || veiculo.marca === marca) &&
      (!ano || (typeof ano === "number" && veiculo.ano >= ano))
    );
  }
}
