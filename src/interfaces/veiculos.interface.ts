export interface VeiculoTipo {
  carros: {
    novos?: Veiculo[];
    usados?: Veiculo[];
  }[];
  motos: {
    novos?: Veiculo[];
    usados?: Veiculo[];
  }[];
}

export interface Veiculo {
  id: number;
  marca: string;
  modelo: string;
  ano: number;
  valor: number;
}
