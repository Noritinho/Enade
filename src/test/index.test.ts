import { Veiculos } from "../index";

describe("Veiculos", () => {
  test("deve filtrar veículos superior ao ano de 2024", () => {
    const veiculos = new Veiculos();
    const resultado = veiculos.filtraAno(2024);
    expect(resultado).toHaveLength(10);
  });

  test("deve filtrar veículos superior ao ano de 2010", () => {
    const veiculos = new Veiculos();
    const resultado = veiculos.filtraAno(2010);
    expect(resultado).toHaveLength(17);
  });

  test("deve filtrar veículos superior ao ano de 2025", () => {
    const veiculos = new Veiculos();
    const resultado = veiculos.filtraAno(2025);
    expect(!resultado);
  });

  test("deve filtrar veículos por marca sem considerar o ano", () => {
    const veiculos = new Veiculos();
    const resultado = veiculos.filtraMarca("Fiat");
    expect(resultado).toHaveLength(3);
  });

  test("deve filtrar veículos por marca sem considerar o ano", () => {
    const veiculos = new Veiculos();
    const resultado = veiculos.filtraMarca("Ferrari");
    expect(!resultado);
  });

  test("deve somar os valores dos veículos da marca especificada", () => {
    const veiculos = new Veiculos();
    const resultado = veiculos.soma("Fiat");
    expect(resultado).toEqual(196200);
  });

  test("deve somar os valores dos veículos da marca especificada", () => {
    const veiculos = new Veiculos();
    const resultado = veiculos.soma("Ferrari");
    expect(!resultado);
  });
});
