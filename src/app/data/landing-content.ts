import {
  Leaf,
  Shield,
  Sparkles,
  Truck,
} from 'lucide-react';
import logo from '../../assets/lanche-horizontal.png';
import sucosol from '../../assets/sucosol.png';
import cookiesPack from '../../assets/embalagem-cookies-lanche.png';
import sandwichPack from '../../assets/embalagem-sanduiches-lanche.png';
import plan1 from '../../assets/plan1.png';
import plan2 from '../../assets/plan2.png';
import lanche from '../../assets/lanche.png';
import plan3 from '../../assets/plan3.png';
import {
  Benefit,
  AboutSectionContent,
  FaqSectionContent,
  FaqEntry,
  FooterSectionContent,
  HeroSectionContent,
  HeroStatistic,
  LandingPageContent,
  MenuSectionContent,
  NavigationItem,
  Plan,
  PlansSectionContent,
  Product,
  UrgencyCallToAction,
} from '../models/landing';

const navigationItems = [
  new NavigationItem('Cardápio', '#cardapio'),
  new NavigationItem('Sobre', '#sobre'),
  new NavigationItem('Planos', '#planos'),
];

const heroStatistics = [
  new HeroStatistic('500+', 'Famílias atendidas'),
  new HeroStatistic('100%', 'Ingredientes naturais'),
];

const heroSection = new HeroSectionContent(
  'Nutrição para crianças',
  'Alimentação',
  'saudável',
  'para seu filho.',
  'Lanches personalizados, 100% livres de contaminação cruzada e pensados para a inclusão do seu filho. Praticidade para você, saúde para eles.',
  'Ver cardápio',
  'Sobre nós',
  lanche,
  'Composição de produtos da Lanchê',
  'Experiência completa',
  'Box, snack, bebida e mimo especial em uma composição coerente e memorável.',
);

const menuSection = new MenuSectionContent(
  'Cardápio',
  'Nosso cardápio',
  'Opções variadas e nutritivas, preparadas com muito amor e cuidado.',
);

const products = [
  new Product(
    'Cookies da selva',
    'Um snack crocante por fora e macio por dentro, feito com ingredientes integrais selecionados sem traços de leite ou glúten, conforme a restrição do pequeno aventureiro.',
    cookiesPack,
    'Embalagem de cookies da marca Lanchê',
    'Snack do dia',
    '#ffd20a',
    'linear-gradient(180deg, #fbf3cb 0%, #f7cf84 100%)',
  ),
  new Product(
    'Pãozinho do Capitão Franguito',
    'Pão artesanal de fermentação natural (ou versão especial sem alérgenos), recheado com um suculento frango desfiado, temperado apenas com ervas naturais e um toque de afeto.',
    sandwichPack,
    'Embalagem de sanduíches da marca Lanchê',
    'Mais pedido',
    '#ff3136',
    'linear-gradient(180deg, #fff8eb 0%, #fbf3cb 100%)',
  ),
  new Product(
    'Brinde de boas-vindas',
    'Um suco vibrante de abacaxi, extraído a frio para preservar todas as vitaminas e minerais. Sem adição de açúcares, conservantes ou corantes artificiais.',
    sucosol,
    'Brinde de suco',
    'Primeira entrega',
    '#099d58',
    'linear-gradient(180deg, #fffdf1 0%, #f1f9d7 100%)',
  ),
];

const benefits = [
  new Benefit(Leaf, 'Ingredientes orgânicos', 'Ingredientes selecionados, orgânicos e livres de agrotóxicos. Comida de verdade em cada mordida.'),
  new Benefit(Shield, 'Segurança total', 'Ingredientes selecionados, orgânicos e livres de agrotóxicos. Comida de verdade em cada mordida.'),
  new Benefit(Truck, 'Entrega com carinho', 'Receba lanches frescos na porta de casa, com pontualidade e preservação máxima dos nutrientes.'),
  new Benefit(Sparkles, 'Feito com amor', 'Receitas preparadas artesanalmente com o mesmo amor que você dedica à sua família.'),
];

const aboutSection = new AboutSectionContent(
  'Sobre nós',
  'Por que escolher a',
  'lanchê?',
  'Somos especialistas em transformar a hora do lanche em um momento de saúde e diversão. Nutrição rigorosa com o toque lúdico que a infância pede.',
  'Mais praticidade para sua família',
  'Lanches saudáveis, frescos e pensados para cuidar da alimentação infantil com segurança, sabor e praticidade no dia a dia.',
);

const plansSection = new PlansSectionContent(
  'Planos',
  'Planos simples',
  'Escolha o plano perfeito para sua família.',
  'Escolher plano',
);

const plans = [
  new Plan(
    'Essencial',
    'R$249',
    'Perfeito para começar com praticidade e equilíbrio.',
    plan1,
    '#ffd20a',
    ['5 lanches', 'Nutricionista dedicado', 'Entrega quinzenal'],
  ),
  new Plan(
    'Família',
    'R$449',
    'O plano ideal para manter variedade ao longo do mês.',
    plan3,
    '#f59f0b',
    ['10 lanches', 'Nutricionista dedicado', 'Entrega semanal'],
    'Mais escolhido',
    true,
  ),
  new Plan(
    'Premium',
    'R$799',
    'Mais completo para famílias que querem exclusividade.',
    lanche,
    '#099d58',
    ['20 lanches', 'Nutricionista dedicado', 'Entrega expressa'],
  ),
];

const faqEntries = [
  new FaqEntry(
    'Os lanches são feitos com ingredientes naturais?',
    'Sim. Priorizamos ingredientes frescos, naturais e combinações pensadas para oferecer praticidade, sabor e confiança no dia a dia.',
  ),
  new FaqEntry(
    'Como funciona a entrega?',
    'As entregas acontecem conforme o plano escolhido, com opções quinzenais, semanais e expressas para atender a rotina da sua família.',
  ),
  new FaqEntry(
    'Posso escolher o plano ideal para a minha rotina?',
    'Pode. Temos opções para quem quer começar, para quem busca constância e para famílias que preferem uma experiência mais completa.',
  ),
  new FaqEntry(
    'Existe um mimo na primeira compra?',
    'Sim. Em alguns planos e campanhas especiais, a primeira entrega pode incluir um brinde para deixar a experiência ainda mais encantadora.',
  ),
];

const faqSection = new FaqSectionContent(
  'FAQ',
  'Perguntas frequentes',
  'Tire suas dúvidas sobre pedidos, entregas e a proposta da Lanchê.',
);

const urgencyCallToAction = new UrgencyCallToAction(
  'Vagas limitadas',
  'As próximas entregas estão quase fechando.',
  'Garanta a vaga da sua família agora para entrar na próxima janela de produção e não ficar para o próximo ciclo.',
  'Garantir minha vaga',
  lanche,
  'Brinde da Lanchê',
);

const footerSection = new FooterSectionContent(
  'Alimentação saudável e segura para crianças. Feita com amor, entregue com cuidado.',
  'https://instagram.com/lanche.udi',
  '@lanche.udi',
  'contato@lanche.com',
  '© 2026 Lanchê. Landing page alinhada com a nova paleta e com as composições da marca.',
);

export const landingPageContent = new LandingPageContent(
  logo,
  navigationItems,
  heroSection,
  heroStatistics,
  menuSection,
  products,
  aboutSection,
  benefits,
  plansSection,
  plans,
  faqSection,
  faqEntries,
  urgencyCallToAction,
  footerSection,
);
