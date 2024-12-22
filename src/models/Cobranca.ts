import { IsInt, Min, Length, ValidateNested, IsOptional, IsDateString } from 'class-validator'
import Pagador, { PagadorInterface } from './Pagador'
import Base from './Base'

export interface CobrancaInterface {
  seuNumero: string
  valorNominal: number
  dataVencimento: Date | string
  numDiasAgenda: number
  pagador: PagadorInterface
}

export default class Cobranca extends Base {
  /**
   * Campo Seu Número do título
   *
   * @type {string}
   * @memberof Cobranca
   * @example '123456789'
   * @minLength 1
   * @maxLength 15
   * @required
   *
   */
  @Length(1, 15)
  public seuNumero: string

  /**
   * Valor Nominal do título
   *
   * @type {number}
   * @memberof Cobranca
   * @example 2.5
   * @min 2.5
   * @required
   *
   */
  @Min(2.5)
  public valorNominal: number

  /**
   * Data de vencimento do título
   *
   * @type {Date}
   * @memberof Cobranca
   * @example '2021-01-01'
   * @required
   *
   */
  @IsDateString()
  public dataVencimento: Date | string

  /**
   * Número de dias corridos após o vencimento para o cancelamento efetivo automático da cobrança. (de 0 até 60)
   *
   * @type {number}
   * @memberof Cobranca
   * @example 0
   * @min 0
   * @max 60
   * @required
   *
   */
  @IsInt()
  @IsOptional()
  public numDiasAgenda: number

  /**
   * Pagador
   *
   * @type {Pagador}
   * @memberof Cobranca
   * @required
   *
   */
  @ValidateNested()
  public pagador: Pagador

  constructor(cobranca: CobrancaInterface) {
    super()
    this.seuNumero = cobranca.seuNumero
    this.valorNominal = cobranca.valorNominal

    if (cobranca.dataVencimento instanceof Date) {
      this.dataVencimento = cobranca.dataVencimento.toISOString().split('T')[0]
    } else {
      this.dataVencimento = cobranca.dataVencimento
    }

    this.numDiasAgenda = cobranca.numDiasAgenda ?? 0
    this.pagador = Pagador.create(cobranca.pagador)

    return this
  }
}
