export enum CredentialScope {
  EXTRATO_READ = 'extrato.read', // Consulta de Extrato e Saldo
  BOLETO_COBRANCA_READ = 'boleto-cobranca.read', // Consulta de boletos e exportação para PDF
  BOLETO_COBRANCA_WRITE = 'boleto-cobranca.write', // Emissão e cancelamento de boletos
  PAGAMENTO_BOLETO_WRITE = 'pagamento-boleto.write', // Pagamento de titulo com código de barras
  PAGAMENTO_BOLETO_READ = 'pagamento-boleto.read', // Obter dados completos do titulo a partir do código de barras ou da linha digitável
  PAGAMENTO_DARF_WRITE = 'pagamento-darf.write', // Pagamento de DARF sem código de barras
  COB_WRITE = 'cob.write', // Emissão / alteração de pix cobrança imediata
  COB_READ = 'cob.read', // Consulta de pix cobrança imediata
  COBV_WRITE = 'cobv.write', // Emissão / alteração de pix cobrança com vencimento
  COBV_READ = 'cobv.read', // Consulta de cobrança com vencimento
  PIX_WRITE = 'pix.write', // Solicitação de devolução de pix
  PIX_READ = 'pix.read', // Consulta de pix
  WEBHOOK_READ = 'webhook.read', // Consulta do webhook
  WEBHOOK_WRITE = 'webhook.write', // Alteração do webhook
  PAYLOADLOCATION_WRITE = 'payloadlocation.write', // Criação de location do payload
  PAYLOADLOCATION_READ = 'payloadlocation.read', // Consulta de locations de payloads
  PAGAMENTO_PIX_WRITE = 'pagamento-pix.write', // Pagamento de pix
  PAGAMENTO_PIX_READ = 'pagamento-pix.read', // Consulta de pix
  WEBHOOK_BANKING_WRITE = 'webhook-banking.write', // Alteração de webhooks da API Banking
  WEBHOOK_BANKING_READ = 'webhook-banking.read' // Consulta do webhooks da API Banking
}
