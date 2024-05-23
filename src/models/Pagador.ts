import { MinLength, MaxLength, IsEmail, IsOptional } from 'class-validator'
import Base from './Base'

export enum EnumUF {
  AC = 'AC',
  AL = 'AL',
  AP = 'AP',
  AM = 'AM',
  BA = 'BA',
  CE = 'CE',
  DF = 'DF',
  ES = 'ES',
  GO = 'GO',
  MA = 'MA',
  MT = 'MT',
  MS = 'MS',
  MG = 'MG',
  PA = 'PA',
  PB = 'PB',
  PR = 'PR',
  PE = 'PE',
  PI = 'PI',
  RJ = 'RJ',
  RN = 'RN',
  RS = 'RS',
  RO = 'RO',
  RR = 'RR',
  SC = 'SC',
  SP = 'SP',
  SE = 'SE',
  TO = 'TO'
}

export enum EnumTipoPessoa {
  FISICA = 'FISICA',
  JURIDICA = 'JURIDICA'
}

export interface PagadorInterface {
  email?: string
  nome: string
  ddd?: string
  telefone?: string
  numero?: string
  complemento?: string
  cpfCnpj: string
  tipoPessoa: EnumTipoPessoa
  endereco: string
  bairro?: string
  cidade: string
  uf: EnumUF
  cep: string
}

export default class Pagador extends Base {
  /**
   * E-mail do pagador
   *
   * @type {string}
   * @memberof Pagador
   * @example '
   * @default ''
   * @MaxLength 50
   *
   */
  @MaxLength(50)
  @IsEmail()
  @IsOptional()
  public email: string | undefined

  /**
   * Nome do pagador
   *
   * @type {string}
   * @memberof Pagador
   * @example 'João da Silva'
   * @required
   * @MinLength 1
   * @MaxLength 100
   *
   */
  @MinLength(1)
  @MaxLength(100)
  public nome: string

  /**
   * DDD do telefone do pagador
   *
   * @type {string}
   * @memberof Pagador
   * @example '00'
   * @default ''
   * @MaxLength 2
   *
   */
  @MaxLength(2)
  @IsOptional()
  public ddd: string | undefined

  /**
   * Telefone do pagador
   *
   * @type {string}
   * @memberof Pagador
   * @example '000000000'
   * @default ''
   * @MaxLength 9
   *
   */
  @MaxLength(9)
  @IsOptional()
  public telefone: string | undefined

  /**
   * Número no logradouro do pagador
   *
   * @type {string}
   * @memberof Pagador
   * @example '123'
   * @default ''
   * @MaxLength 10
   *
   */
  @MaxLength(10)
  @IsOptional()
  public numero: string | undefined

  /**
   * Complemento do endereço do pagador
   *
   * @type {string}
   * @memberof Pagador
   * @example 'apartamento 3 bloco 4'
   * @default ''
   * @MaxLength 30
   *
   */
  @MaxLength(30)
  @IsOptional()
  public complemento: string | undefined

  /**
   * CPF/CNPJ do pagador do título
   *
   * @type {string}
   * @memberof Pagador
   * @example '00000000000'
   * @required
   * @MinLength 11
   * @MaxLength 18
   *
   */
  @MinLength(11)
  @MaxLength(18)
  public cpfCnpj: string

  /**
   * Tipo do pagador:
   *
   * FISICA - Pessoa Física
   * JURIDICA - Pessoa Jurídica
   *
   * @type {EnumTipoPessoa}
   * @memberof Pagador
   * @required
   *
   */
  public tipoPessoa: EnumTipoPessoa

  /**
   * Endereço do pagador
   *
   * @type {string}
   * @memberof Pagador
   * @example 'João da Silva'
   * @required
   * @MinLength 1
   * @MaxLength 100
   *
   */
  @MinLength(1)
  @MaxLength(100)
  public endereco: string

  /**
   * Bairro do pagador
   *
   * @type {string}
   * @memberof Pagador
   * @example 'Bela Vista'
   * @default ''
   * @MaxLength 60
   *
   */
  @MaxLength(60)
  @IsOptional()
  public bairro: string | undefined

  /**
   * Cidade do pagador
   *
   * @type {string}
   * @memberof Pagador
   * @example 'São Paulo'
   * @required
   * @MinLength 1
   * @MaxLength 60
   *
   */
  @MinLength(1)
  @MaxLength(60)
  public cidade: string

  /**
   * UF
   *
   * @type {EnumUF}
   * @memberof Pagador
   * @required
   *
   */
  public uf: EnumUF

  /**
   * CEP do pagador
   *
   * @type {string}
   * @memberof Pagador
   * @example '00000000'
   * @required
   * @MinLength 8
   *
   */
  @MinLength(8)
  public cep: string

  constructor(pagador: PagadorInterface) {
    super()
    this.email = pagador.email
    this.nome = pagador.nome
    this.ddd = pagador.ddd
    this.telefone = pagador.telefone
    this.numero = pagador.numero
    this.complemento = pagador.complemento
    this.cpfCnpj = pagador.cpfCnpj
    this.tipoPessoa = pagador.tipoPessoa
    this.endereco = pagador.endereco
    this.bairro = pagador.bairro
    this.cidade = pagador.cidade
    this.uf = pagador.uf
    this.cep = pagador.cep

    return this
  }
}
