import { infoCartas } from "./constantes";

export interface Carta {
  idFoto: number;
  imagen: string;
  estaVuelta: boolean;
  encontrada: boolean;
}

export type EstadoPartida =
  | "PartidaNoIniciada"
  | "CeroCartasLevantadas"
  | "UnaCartaLevantada"
  | "DosCartasLevantadas"
  | "TresCartasLevantadas"
  | "CuatroCartasLevantadas"
  | "CincoCartasLevantadas"
  | "PartidaCompleta";

export interface Tablero {
  cartas: Carta[];
  estadoPartida: EstadoPartida;
  indiceCartaVolteadaA?: number;
  indiceCartaVolteadaB?: number;
}

export interface InfoCarta {
  idFoto: number;
  imagen: string;
}

export const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
  idFoto,
  imagen,
  estaVuelta: false,
  encontrada: false,
});

export const crearColeccionDeCartasInicial = (
  infoCartas: InfoCarta[]
): Carta[] =>
  infoCartas.map((infoCartas) =>
    crearCartaInicial(infoCartas.idFoto, infoCartas.imagen)
  );

export const cartas: Carta[] = [
  ...crearColeccionDeCartasInicial(infoCartas),
  ...crearColeccionDeCartasInicial(infoCartas),
];

export const crearTableroInicial = (): Tablero => ({
  cartas: cartas,
  estadoPartida: "PartidaNoIniciada",
});

export let tablero: Tablero = crearTableroInicial();
