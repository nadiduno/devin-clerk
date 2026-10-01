export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "Fenix Camisetas",
  description: "Site para Fenix para vender camisetas.",
  emoji: "🔥",
  accent: "#ea580c",
  upcomingFeatures: [
    {
      title: "Catálogo de camisetas",
      description: "Uma vitrine com foto, preço e tamanhos de cada camiseta.",
    },
    {
      title: "Página do produto",
      description: "Escolher tamanho e cor antes de adicionar ao carrinho.",
    },
    {
      title: "Carrinho de compras",
      description: "Adicionar e remover camisetas e ver o total atualizado.",
    },
    {
      title: "Checkout com Pix",
      description: "Pagar o pedido com Pix ou cartão de forma segura.",
    },
    {
      title: "Meus pedidos",
      description: "Histórico de compras de cada cliente com o status da entrega.",
    },
    {
      title: "Painel do administrador",
      description: "Cadastrar novas camisetas e controlar o estoque.",
    },
  ] satisfies Feature[],
};
