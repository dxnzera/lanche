import {
  Leaf,
  Shield,
  Sparkles,
  Truck,
} from 'lucide-react';
import logo from '../../assets/lanche-horizontal.png';
import brindeLancheira from '../../assets/brinde-lancheira-lanche.png';
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
  'Lanches nutritivos, seguros e deliciosos. Entregues na sua casa com todo cuidado que seu pequeno merece.',
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
    'Cookies de banana com aveia em uma embalagem divertida que conversa com o universo infantil sem perder o ar premium da marca.',
    cookiesPack,
    'Embalagem de cookies da marca Lanchê',
    'Snack do dia',
    '#ffd20a',
    'linear-gradient(180deg, #fbf3cb 0%, #f7cf84 100%)',
  ),
  new Product(
    'Pãozinho do Capitão Franguito',
    'Mini sanduíche nutritivo com apresentação carinhosa e segura, pensado para lancheiras que precisam ser práticas no dia a dia.',
    sandwichPack,
    'Embalagem de sanduíches da marca Lanchê',
    'Mais pedido',
    '#ff3136',
    'linear-gradient(180deg, #fff8eb 0%, #fbf3cb 100%)',
  ),
  new Product(
    'Brinde de boas-vindas',
    'Na primeira caixa a família recebe uma lancheira charmosa para transformar a rotina em um ritual leve, bonito e cheio de afeto.',
    brindeLancheira,
    'Brinde de lancheira da marca Lanchê',
    'Primeira entrega',
    '#099d58',
    'linear-gradient(180deg, #fffdf1 0%, #f1f9d7 100%)',
  ),
];

const benefits = [
  new Benefit(Leaf, 'Ingredientes orgânicos', 'Priorizamos produtos naturais e sem agrotóxicos.'),
  new Benefit(Shield, 'Segurança total', 'Processos rigorosos de higiene e qualidade.'),
  new Benefit(Truck, 'Entrega com carinho', 'Entregamos na sua casa com todo o cuidado que seu pequeno merece.'),
  new Benefit(Sparkles, 'Feito com amor', 'Cada lanche é preparado como se fosse para nossos filhos.'),
];

const aboutSection = new AboutSectionContent(
  'Sobre nós',
  'Por que escolher a',
  'lanchê?',
  'Somos especialistas em nutrição infantil. Cada lanche é cuidadosamente planejado para oferecer o melhor para seu filho.',
  'apresentação da marca',
  'Uma identidade acolhedora, divertida e segura para acompanhar a rotina da sua família.',
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
    'R$149',
    'Perfeito para começar com praticidade e equilíbrio.',
    plan1,
    '#ffd20a',
    ['10 lanches', 'Cardápio básico', 'Entrega quinzenal'],
  ),
  new Plan(
    'Família',
    'R$279',
    'O plano ideal para manter variedade ao longo do mês.',
    plan3,
    '#f59f0b',
    ['20 lanches', 'Cardápio premium', 'Entrega semanal', 'Suporte prioritário'],
    'Mais escolhido',
    true,
  ),
  new Plan(
    'Premium',
    'R$449',
    'Mais completo para famílias que querem exclusividade.',
    lanche,
    '#099d58',
    ['30 lanches', 'Cardápio exclusivo', 'Entrega expressa', 'Nutricionista dedicado'],
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
