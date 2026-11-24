document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. DADOS (MOLDES VAZIOS - 3 CARDS)
    // ==========================================
      // 4 Cards de Memórias (Prezinho, Fundamental, 2º e 3º EM)
    const MEMORIAS = [
        { 
            id: '1', 
            ano: 'Pré-escola', 
            titulo: 'O Começo de Tudo', 
            texto: 'Antes do primeiro uniforme, das mochilas pesadas e das notas, existia apenas a pura curiosidade de descobrir o mundo. Esse olhar curioso e esses olhinhos brilhantes guardam o início da minha jornada. Eu ainda não sabia, mas aquele bebê de bochechas rosadas estava prestes a viver os 12 anos mais transformadores da sua vida.' 
        },
        { 
            id: '2', 
            ano: 'Ensino Fundamental', 
            titulo: 'A Fase Dourada', 
            texto: 'O sorriso mais sincero daquela época! O Ensino Fundamental foi marcado pela leveza, pelas amizades que se formavam na mesa ao lado e pela felicidade de estar na escola. O uniforme verde, o cheirinho da sala de aula e o recreio esperado ansiosamente. Era a fase em que o maior problema do dia era qual brincadeira escolher para o intervalo.' 
        },
        { 
            id: '3', 
            ano: '2º Ano do Ensino Médio', 
            titulo: 'A Turma da Ciência', 
            texto: 'A foto perfeita da união e do esforço! Entre jalecos brancos, gráficos de pizza e a correria para montar a feira de ciências, essa equipe mostrou que o trabalho em grupo rende boas risadas e ótimas notas. O 2º ano foi o momento de consolidar as amizades mais verdadeiras, descobrir talentos e perceber que estar junto faz toda a diferença.' 
        },
        { 
            id: '4', 
            ano: '3º Ano do Ensino Médio', 
            titulo: 'O Grande Final', 
            texto: 'A selfie que transborda felicidade! Entre as decorações do Brasil ao fundo, os sorrisos gigantes (e o aparelho no dente) e a farda que virou segunda pele, estávamos vivendo a reta final. O terceirão foi feito de noites longas, mas também de amizades que se tornaram irmandade. Essa foto guarda o momento exato em que percebemos: o último sinal está chegando, mas o que construímos fica para sempre.' 
        }
    ];
    // 17 Cards de Redações Vazios (Mantidos)
        // 17 Cards de Redações com os Temas exatos dos PDFs
        const REDACOES = [
        { 
            id: '01', 
            titulo: 'Quando a seca encontra a enchente: impactos sociais e econômicos das mudanças no ciclo hidrológico', 
            cat: 'Meio Ambiente', 
            texto: `A música "Planeta Água" do artista Guilherme Arantes consolidou a ideia de que a água era o maior tesouro do planeta. Hoje, porém, tal tesouro tornou-se uma verdadeira ameaça, capaz de causar danos imprevisíveis devido à crise climática. O Brasil está jogando uma espécie de roleta russa com o clima. O sertão sofre com as piores secas da história enquanto as grandes cidades sofrem com chuvas torrenciais. A falta de planejamento das cidades expõe a vulnerabilidade das classes mais pobres.

Em "O Cortiço" Aluísio Azevedo retrata o impacto da falta de estrutura às classes baixas. Hoje, a situação não mudou. Com a impermeabilização do solo (devido ao asfalto) a água simplesmente começa a invadir as residências, pois não há lugar para escoar. As enchentes não escolhem vítima. A diferença é que as pessoas que moram nas periferias são duramente punidas, pois não têm para onde ir. Eles perdem seus móveis, sua dignidade; tudo é arrastado pela enxurrada.

No campo, o cenário é lastimável. O agricultor que levanta cedo para trabalhar vê sua plantação transformada em pó pelo sol inclemente. A seca aciona de imediato o efeito dominó. A produção cai, o preço dos alimentos aumenta e a mesa do brasileiro fica vazia. Mesmo o agronegócio, com sua gigantesca dimensão, sofre bilionários prejuízos. A raiva da natureza atinge a todos.

Não é mais possível ficar assistindo às tragédias na TV. É necessário que o governo invista fortemente em infraestruturas verdes e em sistema de drenagens adequados que respeitem o curso d'água. E, urgentemente, no campo, linhas de créditos que permitam ao pequeno produtor não deixar de plantar. A crise climática é realidade. Como vamos nos adaptar a ela dependerá das nossas escolhas hoje.` 
        },
        { 
            id: '02', 
            titulo: 'A estética como imperativo: riscos e implicações do uso indiscriminado de canetas emagrecedoras', 
            cat: 'Sociedade', 
            texto: `O conto de Machado de Assis "O Espelho" mostra desde sempre sua importância, pois, o valor do homem é medido pelo seu reflexo. Hoje em dia não há espelho, e sim a tela de um celular. A loucura cega por um padrão impossível tornou-se uma epidemia e leva milhares de jovens a arriscar suas vidas ingerindo canetas emagrecedoras sem nenhuma orientação médica.

As substâncias são extremamente perigosas, porém boa parte da população deixa isso de lado. O filme "Cisne Negro" mostra com muita exatidão a loucura que está presente nesse tipo de obsessão. As injeções, que muitas das vezes são compradas ilegalmente pela internet, prometem milagres, porém trazem graves consequências. Falência de vários órgãos, transtornos alimentares graves e um corpo mutilado em nome da vaidade. A saúde simplesmente vai embora.

A pressão mental também é avassaladora. A autoestima hoje em dia é apenas medida de "curtidas" através da internet. Os influenciadores digitais vendem o "corpo perfeito" como um produto pronto e fácil de comprar, em busca de engajamento. O jovem compara-se às fotos editadas digitalmente e acaba adoecendo. A ansiedade cresce e a depressão se instala, pois a perfeição que é mostrada nas telas é impossível.

Portanto, é necessário acabar com essa loucura. É necessário que a Anvisa aumente a fiscalização contra as farmácias e plataformas digitais clandestinas. A mudança mais importante ocorre na educação. É necessário que as instituições de ensino sejam lugares de acolhimento e estimulem palestras com psicólogos sobre autoestima e aceitação do corpo. Precisa-se que a sociedade priorize a saúde em vez da ditadura da magreza.` 
        },
        { 
            id: '03', 
            titulo: 'O uso da Inteligência Artificial e as deepfakes: o que é real e o que é fictício na vida online?', 
            cat: 'Tecnologia', 
            texto: `No livro 1984 de George Orwell, é mostrado um futuro distópico onde o governo tem controle sobre a verdade e poder de modificar o passado. Em nosso presente, não é necessário um governo totalitário para realizar experimentos como o descrito pelo escritor, haja vista que a evolução da Inteligência Artificial e das deepfakes criaram um labirinto em que o falso torna-se verdade, já que a mentira é capaz de se tornar tão perfeita que se transforma em verdade. Essa nova tecnologia causa diversos problemas na sociedade, como a possibilidade de destruição de reputação e desconfiança.

Primeiramente, a manipulação política. O filósofo Jean Baudrillard escreveu sobre a era dos simulacros, a realidade em que o original é substituído pela cópia. Com a tecnologia chamada de deepfake, qualquer pessoa consegue criar um vídeo em que uma autoridade diz algo absurdo. Não havendo meios para comprovar a veracidade do conteúdo, o cidadão comum está refém das fake news. Assim, a democracia perde força e a violência é incentivada.

Além disso, a tecnologia virou uma ferramenta do crime. O seriado "Black Mirror" já explorava os riscos da clonagem digital. Hodiernamente, a voz e o rosto de familiares são usados por criminosos para fazer golpes financeiros avassaladores contra idosos. A crueldade nunca vista antes vem destruindo famílias e causando traumas emocionais e danos irreparáveis.

O Estado deve criar leis rigorosas para punir quem usar a tecnologia deepfake com malícia. As plataformas digitais devem investir em algoritmos para identificar vídeos dessa natureza. A principal arma contra a tecnologia é a educação. A escola deve preparar o jovem para ser um cético digital, isto é, alguém que sempre duvida, pesquisa sobre os fatos e não compartilha nada do que não seja certo.` 
        },
        { 
            id: '04', 
            titulo: 'Da diversão ao endividamento: efeitos socioeconômicos das bets na vida de jovens brasileiros', 
            cat: 'Sociedade', 
            texto: `Na literatura oitocentista russa podemos encontrar muitos exemplos de personagens desesperados por sua obsessão pelo jogo. O protagonista do livro "O Jogador" de Dostoiévski é um excelente exemplo disso. Na sociedade contemporânea brasileira essa tragédia ganhou contornos modernos e lucrativos. O jogo online, disfarçado de entretenimento, esvaziou as carteiras e a sanidade mental de milhares de jovens.

Primeiro, observa-se a precisão e malevolência de seu plano de marketing. Apoiado na teoria do "Nudge" de Richard Thaler, essas empresas usam influenciadores digitais para vender a ilusão do dinheiro fácil. Enfeitiçado pela possibilidade de carro de luxo, o jovem joga o pouco que tem sem perceber que todo o sistema está ajustado a favor da casa.

Em seguida, suas contas esgotam-se e a realidade bate à porta. O jovem, sem conhecimentos de educação financeira no currículo escolar, fica vulnerável. Muitas vezes, ele recorre aos agiotas. E entra num círculo vicioso de dívidas e depressão. Nesse sentido, o conceito de alienação de Karl Marx ecoa. Em segundos, o jovem gasta o dinheiro que tanto trabalhou para ganhar. Assim, ele destrói a harmonia familiar.

Em suma, é urgente intervenção. O governo federal deve proibir que essas plataformas façam propagandas em mídias que atendem o público jovem. Além disso, a educação financeira não pode ser apenas um desejo. Ela deve ser incluída obrigatoriamente no currículo. Só assim poderemos garantir o futuro dessa geração. É necessário ensinar a importância do trabalho. É necessário explicar os riscos da obsessão pelo jogo.` 
        },
        { 
            id: '05', 
            titulo: 'Inclusão digital no Brasil: caminhos e desafios na sociedade contemporânea.', 
            cat: 'Tecnologia', 
            texto: `Em "Tempos Modernos", clássico do cineasta Charles Chaplin, o operário é tragado pela máquina. Na versão digital, a máquina é chamada de exclusão digital. Em meio à sociedade on-line, milhões de brasileiros vivem o "apagão" digital. O problema não está somente nas questões técnicas, a realidade é muito mais profunda que isso. Ela representa um obstáculo para a prática da cidadania.

O primeiro obstáculo é a questão estrutural. Apesar do acesso à internet ser um direito garantido pelo Marco Civil da Internet (Lei 12.965/2014), nos centros periféricos e em zonas rurais, o acesso não chega. O cidadão sem acesso à internet de qualidade não consegue fazer cursos a distância ou até mesmo concorrer a vagas de empregos. A exclusão digital gera desigualdade social. Quem mais precisa das oportunidades, fica fora delas.

Além disso, o acesso a internet não é suficiente. Como afirmava o educador Paulo Freire, "educação é liberdade", dizia o educador Paulo Freire. A posse do celular não é o suficiente. É necessário saber como ter acesso crítico e seguro à rede. Muitos possuem celulares, porém desconhecem os golpes e as formas de obter informações confiáveis. Sem o "letramento digital", a tecnologia torna-se instrumento de alienação e risco.

Portanto, para que essa situação seja revertida, o Estado deve disponibilizar a internet, gratuita e rápida, para as comunidades carentes. As escolas devem também incorporar à grade curricular a "cidadania digital". A internet não pode ser uma fronteira entre pobres e ricos. Ela tem que ser um caminho para o conhecimento e para a emancipação.` 
        },
        { 
            id: '06', 
            titulo: 'Cultura fitness: bem-estar ou busca por estética inatingível', 
            cat: 'Saúde', 
            texto: `Na obra "Frankenstein", Mary Shelley conta a história de um homem que busca o corpo perfeito, mas que, ao final, acaba criando um monstro. Hoje o mundo fitness parece seguir o mesmo caminho. Os jovens buscam corpo perfeito, mas acabam criando um "monstro" que os aprisiona na academia e os leva à enfermidade física e mental. A obsessão com a estética é um monstro que consome a autoestima e a saúde.

A linha divisória entre saúde e doença é muito tênue. O que deveria ser um prazer tornou-se uma obrigatoriedade diária. Assim como a personagem de "O Retrato Oval", de Edgar Allan Poe, que se consome para eternizar sua imagem perfeita, o jovem de hoje se consome para ficar igual aos "modelos" que são digitalmente editados, ignorando o estado de extrema exaustão e as lesões causadas. A aparência se tornou o único valor de alguém.

O resultado dessa pressão constante é o surgimento de graves transtornos. Novos nomes surgiram para nomear esse "silêncio". Vigorexia, ortorexia. A comparação constante com corpos impossíveis, como aponta Naomi Wolf em seu livro "O Mito da Beleza", leva à frustração, ansiedade e depressão. Os consultórios de médicos estão lotados de jovens com disfunções renais, consequência do abuso de suplementos e esteroides anabolizantes.

É urgente repensar o conceito de saúde. É preciso que as escolas devolvam ao esporte e ao trabalho em equipe o prazer que lhes é intrínseco. E que se foquem no bem-estar e não na aparência. Também é necessário que profissionais de saúde alertem para os riscos dos transtornos alimentares. A verdadeira beleza está no equilíbrio, na perseverança e, principalmente, no amor próprio.` 
        },
        { 
            id: '07', 
            titulo: 'Povos originários e direitos constitucionais: desafios para a efetivação da cidadania indígena no Brasil', 
            cat: 'Sociedade', 
            texto: `No filme Avatar é apresenta a história de um povo que luta para proteger a sua terra e também sua ligação com a espiritualidade da natureza. Fora da ficção, a realidade dos índios brasileiros se assemelha à narrativa do longa, visto que a luta pelo seu território vai além das fronteiras da propriedade; é uma luta pela própria existência física e cultural desse povo que sempre viveu no país.

Primeiramente, a ganância leva à destruição, segundo Boaventura de Sousa Santos a ideia de Epistemicídio, explica como a cultura dominante tenta eliminar os conhecimentos dos povos originários. Com isso, a chegada de garimpeiros e do agronegócio em terras demarcadas mata não só a floresta como também a história de um povo. A terra deixou de ser direito para ser transformada em produto.

Ademais, a violência rural junto com o descaso das políticas públicas também são fatores que contribuem na problemática. A saúde e a educação voltadas às comunidades indígenas ignoram sua tradição. O saber ancestral é negligenciado, assim como as línguas originárias. De acordo com o Relatório do CIMI o abandono e aumento da violência contra esse povo são dados. Enquanto não incluídos, eles continuarão excluídos.

Portanto, para que o direito à cidadania dos índios seja garantido, o Estado precisa investir na FUNAI, punindo quem invade. A Lei 11.645/08 que obriga o ensino da cultura indígena no ambiente escolar deve ser colocada em prática. Só assim teremos um país justo e consciente de suas raízes, tendo em vista que sem a valorização e respeito à história dos povos originários, não se pode alcançar isso.` 
        },
        { 
            id: '08', 
            titulo: 'Consumo, mídia e cultura: como referências mediadas por algoritmos influenciam os modos de vida na sociedade contemporânea', 
            cat: 'Tecnologia', 
            texto: `No livro "Admirável Mundo Novo" de Aldous Huxley, a sociedade foi condicionada a ser feliz e a consumir sem critério. Atualmente, isso ocorre através dos algoritmos das redes sociais que nos colocam em uma espécie de bolha na qual só vemos aquilo que gostamos. Com isso, nosso olhar sobre o mundo fica limitado e nos tornamos simples consumidores.

A princípio, são criados guetos virtuais. Isso porque os algoritmos das redes sociais nos isolam, gerando o que o ativista Eli Pariser chamou de "Bolha de Filtro". Com isso, a discussão na democracia é reduzida. Além disso, a polarização aumenta, pois quando estamos dentro da bolha, só vemos aquilo que pensamos e temos a ilusão de que todo o mundo pensa igual a nós. Isso é muito perigoso e alienante.

Em segundo lugar, o consumo desenfreado. No livro "Capitalismo de Vigilância", Shoshana Zuboff mostra como nossos dados são ouro. Os influenciadores vendem vidas perfeitas e produtos milagrosos. Com isso, sempre ficamos insatisfeitos. E, ainda por cima, o consumo se torna algo relacionado à inclusão em um grupo. O consumo nunca termina e o ter se sobrepõe ao ser.

Portanto, é necessário que a escola ensine sobre a educação midiática para que os alunos possam questionar os algoritmos e aprender a consumir de forma crítica. Para isso, cabe também ao poder público cobrar mais transparência das plataformas. A tecnologia não deve ser uma teia invisível que nos prende, mas sim aliada à liberdade.` 
        },
        { 
            id: '09', 
            titulo: 'Os desafios para a preservação dos monumentos históricos no Brasil contemporâneo', 
            cat: 'Cultura', 
            texto: `Em O Nome da Rosa, Umberto Eco relata um incêndio que teve como objetivo a destruição de uma biblioteca, junto de todo o seu saber. No Brasil, de maneira lenta e gradual, essa realidade vem ganhando corpo. Em virtude de um descaso e falta de investimento, nossa memória como nação vai sendo devorada pela especulação imobiliária. Os monumentos históricos vão sendo abandonados, o que remete à ideia de que a preservação do patrimônio é um reconhecimento das nossas raízes.

O descaso do poder público é evidenciado. O fato de o Museu Nacional ter sido consumido pelas chamas foi um duro golpe para a história do nosso país. A falta de manutenção e investimento acarretaram em tal tragédia. Prédios antigos e centros culturais vêm se desgastando cada vez mais, além disso, são cercados pela violência da cidade. É uma perda irrecuperável. É muito doloroso ver séculos de história sendo transformados em cinza.

Além disso, nota-se uma falta de educação no que concerne ao patrimônio. Cabe ressaltar que se o cidadão não conhece a história de determinado casarão, tende a não valorizá-lo e, pior, causar sua depredação. A atuação da construção civil também tem contribuído para a demolição de prédios, em nome de um suposto progresso que acaba por anular a identidade da cidade. O direito à cidade de que fala Henri Lefebvre inclui também o direito à memória.

Para a mudança dessa realidade, é necessário que haja colaboração entre o governo e a iniciativa privada para a restauração desses espaços, tornando-os centros culturais vivos. Além disso, as instituições educacionais devem levar seus alunos a museus e sítios históricos. A história não pode ser ignorada. Ela precisa ser vivida e respeitada.` 
        },
        { 
            id: '10', 
            titulo: 'Exploração espacial no século XXI: desafios para a conciliação entre avanço científico e responsabilidade social', 
            cat: 'Ciência', 
            texto: `No livro "Guia do Mochileiro das Galáxias" de Douglas Adams, a Terra é descrita como apenas um ponto no universo. Na realidade do século XXI a exploração espacial tornou-se uma diversão de bilionários, ao passo que milhões de pessoas sofrem com a falta de comida no planeta.

O filósofo Hans Jonas, em seu livro "O Princípio Responsabilidade", defende que a técnica deve ser utilizada para a manutenção da vida. Entretanto, a ciência que pode acabar com doenças tem sido usada para satisfazer a vaidade de alguns. Utilizar bilhões de dinheiro para fazer viagens espaciais, ao mesmo tempo em que metade da população mundial não tem acesso ao saneamento básico é algo realmente condenável. A exploração do espaço deveria servir para fins sociais e não apenas de caráter comercial.

A conquista do espaço de forma desorganizada gera lixo espacial e intensifica a competição entre países e empresas. O Tratado do Espaço Sideral estabelecido pela ONU precisa ser revisto para evitar a militarização e a exploração predadora do espaço. O espaço é propriedade de todos, entretanto, está sendo transformado em mais uma fronteira para interesses privados sem nenhuma regulação para a sua preservação.

A ONU deve criar tratados rigorosos para que a ciência possa ser exercida de maneira justa. Parte dos lucros obtidos na exploração do espaço devem ser investidos em fundos contra a pobreza na Terra. O cosmos é fascinante, mas o que precisamos salvar é nosso planeta.` 
        },
        { 
            id: '11', 
            titulo: 'Espécies em extinção e equilíbrio ecológico: desafios para a conservação da fauna brasileira', 
            cat: 'Meio Ambiente', 
            texto: `Na animação “O Rei Leão”, é mostrado o equilíbrio necessário entre as diversas espécies para manter a harmonia da natureza. Entretanto, fora da ficção, a situação não é bem assim no Brasil, em virtude do desmatamento, das queimadas e do tráfico de animais, a fauna brasileira vem sendo destruída, desequilibrando o ecossistema todo. A extinção de uma única espécie de animal é um duro golpe na nossa própria sobrevivência.

Primeiramente, o maior vilão dessa história é a destruição de habitats. A invasão desordenada de áreas florestais com expansão agrícola tem deixado muitos animais desabrigados e sem comida. Segundo a Teoria do Caos, a extinção de uma espécie provoca um efeito dominó, que impacta inclusive na produção de alimentos. Isso porque a natureza é uma teia, onde todos estão conectados. Quando um único fio é cortado, todos são afetados.

Além disso, outro ato cruel contra a fauna é o tráfico de animais. Milhões de aves e macacos são capturados para serem traficados. Muitos desses animais são maltratados e morrem no transporte até seu destino. A Lei de Crimes Ambientais (Lei 9.605/98) precisa ser aplicada com mais rigor. A impunidade é a grande aliada do tráfico de animais.

Portanto, medidas são necessárias para que a fauna seja preservada. O Estado deve usar tecnologias, como drones, para o monitoramento das florestas. A educação ambiental, além do incentivo ao ecoturismo, são extremamente importantes para mostrar às comunidades locais que a natureza preservada é mais valiosa do que a ilegal. Afinal, a conservação da fauna é a conservação da vida.` 
        },
        { 
            id: '12', 
            titulo: 'Migração e acolhimento: desafios da convivência em contextos globais', 
            cat: 'Sociedade', 
            texto: `O Documentário "Human Flow" de Ai Weiwei ilustra o sofrimento dos refugiados, que partem de sua terra, deixando tudo para trás na luta pela sobrevivência. No Brasil, houve avanços nas leis de migração de 2017, porém, a realidade continua sendo árdua. Acabar com o desafio de acolher essas populações são um dos principais desafios humanitários do nosso tempo.

Primeiramente, a Xenofobia é o primeiro obstáculo dessas pessoas. Muitos imigrantes chegam em busca de uma vida pacífica, mas são recebidos com ódio e preconceito. Sem dominar a língua local e sem ter seu currículo acadêmico reconhecido, eles acabam trabalhando em atividades informais e precárias, além de serem vistos como uma possível ameaça. Ainda assim, carregam consigo uma enorme riqueza cultural e uma mão de obra forte.

Além disso, a falta de políticas públicas contribui para esse cenário. Muitos chegam com grandes traumas de guerra e não encontram o apoio necessário para o tratamento psicológico. Outro problema presente é que os abrigos estão superlotados e famílias inteiras vivem em condições sub-humanas. O direito a Ter Direitos foi cunhado pela filósofa Hannah Arendt. Nela é dito que o homem precisa pertencer ao mundo para ser tratado com dignidade.

Portanto, para que possam ser integrados, é necessário que o poder público crie mecanismos mais ágeis para a documentação e crie também programas de capacitação. A mídia e as instituições de ensino devem trabalhar contra a desinformação e fomentar a empatia. Acolher não é apenas um dever legal, é um dever ético/humanitário.` 
        },
        { 
            id: '13', 
            titulo: 'El Niño e mudanças climáticas: desafios para a preparação da sociedade diante de eventos extremos', 
            cat: 'Meio Ambiente', 
            texto: `No livro de James Patterson "O Dia do Juízo Final" a humanidade é colocada diante de uma catástrofe climática. Embora seja ficção podemos ver que a realidade caminha para esse cenário cada vez mais. Devido ao fenômeno El Niño e às mudanças climáticas temos visto secas e chuvas catastróficas. Esses eventos nos mostram a fragilidade de nossas cidades frente à fúria da natureza.

O grande problema está no desplanejamento das cidades. A impermeabilização do solo, a falta de drenagem e o fato de que toda a chuva se torna uma tragédia são problemas que precisam ser enfrentados. A Defesa Civil, na maioria das vezes, só entra em ação depois dos acontecimentos, registrando o número de mortos e desabrigados. Ao invés disso ela deveria estar prevendo, evitando que houvesse prejuízos. Os mais pobres vivem numa espécie de pena de morte, devido à falta de infraestrutura.

Essa crise também é uma questão de justiça social. Os mais pobres são aqueles que mais sofrem com a crise climática. Eles são expulsos para as zonas de riscos, nas encostas e nas margens dos rios. Quando a chuva vem tudo é perdido. Quem está mais vulnerável sofre mais com as mudanças climáticas.

A prevenção é sempre o melhor remédio. É necessário que o poder público invista em cidades resilientes, com boa infraestrutura e sistemas de alerta eficazes. Além de criar um fundo nacional de adaptação climática para ajudar as vítimas. A natureza não pode ser controlada, porém podemos nos preparar para enfrentá-la.` 
        },
        { 
            id: '14', 
            titulo: 'Obsolescência tecnológica e descarte de resíduos eletrônicos: desafios para a sustentabilidade no Brasil', 
            cat: 'Tecnologia', 
            texto: `O filme "Blade Runner 2049" ambienta-se num futuro hostil, marcado pela tecnologia e pelo lixo. Porém tal ficção está cada dia mais próxima da realidade. As indústrias, através da obsolescência programada, tornam seus produtos obsoletos rapidamente, o que faz do nosso planeta um gigantesco lixão de eletrônicos e contaminando a natureza.

Tal forma de produção só é possível mediante o consumismo desenfreado, no qual, sempre que sai um novo telefone celular, milhões de aparelhos antigos vão para o lixo. O documentário "Comprar, Tirar, Comprar" mostra os esforços das empresas para que seu aparelho fique com defeito rapidamente. Estes aparelhos possuem metais pesados como o mercúrio e o chumbo, muito tóxicos.

Além disso, há o desperdício econômico. De acordo com a lei de Lavoisier, "na natureza nada se perde, tudo se transforma". Celulares e computadores possuem ouro, prata, cobre etc., que podem ser reciclados, mas, devido à falta de informação e de centros de coleta, tudo vai parar nos lixões.

Para que isso mude, é necessário que o poder público obrigue as empresas a realizarem a logística reversa – isto é, a devolução dos produtos velhos para reciclagem. Além disso, cabe às escolas ensinarem à população a educação para o consumo consciente. O futuro do planeta depende das decisões de hoje.` 
        },
        { 
            id: '15', 
            titulo: 'Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente', 
            cat: 'Agro', 
            texto: `Na música Sá & Guarabyra – Sobradinho, podemos ouvir um grande lamento, onde se fala de uma terra que foi engolido pela água de uma represa; isso nos mostra um conflito entre desenvolvimento e a natureza. O agronegócio é um forte aliado ao Brasil, entretanto, é necessário que se encontre uma maneira de ter paz entre essas duas ideias sem prejudicar o futuro das futuras gerações.

Um dos grandes problemas são o uso desenfreado de agrotóxicos, sendo que nos já era avisado sobre os perigos que eles podem causar, no livro Primavera Silenciosa-Rachel Carson. Além disso, o desmatamento também contribui para o problema. Tudo isso acaba contaminando o solo, os rios e nossa saúde na corrida do lucro; a natureza é destruída, o clima fica desequilibrado e prejudica a agricultura.

A ciência provou que é possível fazer agricultura sustentável. A Agroecologia e a ILPF (Integração Lavoura-Pecuária-Floresta) mostram que é possível recuperar solos degradados e aumentar a produtividade. É necessário que o agricultor veja a floresta preservada como aliada, pois ela proporciona a água e as chuvas.

Portanto, é necessário que o governo promova um credito mais barato e isenção de impostos, caso o agricultor utilize práticas verdes. É importante que a assistência técnica que atua no campo leve informação e tecnologia para o produtor. Um agro forte é aquele que respeita a terra e garante a sobrevivência das futuras gerações.` 
        },
        { 
            id: '16', 
            titulo: 'O respeito às diferenças como caminho para a superação dos conflitos sociais na sociedade contemporânea', 
            cat: 'Sociedade', 
            texto: `Victor Hugo em seu livro "O Corcunda de Notre Dame" expôs através de sua obra, o quanto a sociedade discrimina aquilo que é diferente. A intolerância com o diferente sempre foi alinhada aos conflitos existentes na sociedade, porém, num mundo diversificado como o nosso, o respeito à diferença tornou-se necessário.

Primeiramente é importante salientar que o preconceito, advindo da ignorância e do etnocentrismo (superioridade da própria cultura em relação às demais), leva à exclusão do negro, indígena, LGBTQI+, mulher e gera violência de caráter físico e simbólico, impedindo assim o progresso social. Todos somos diferentes, porém todos temos os mesmos direitos.

Ademais é necessário o uso da empatia para superar este cenário. Em língua africana há uma palavra "Ubuntu" que significa "eu sou porque nós somos". Isso nos ensina que eu só sou humano porque o outro também o é. É necessário então usar a escuta ativa, o diálogo sem julgamento para conhecer a história do outro que é diferente do seu. E assim compreender que todos sonham e temem as mesmas coisas.

A escola e o Estado desempenham um papel importante nesta questão. A partir da infância é necessária a educação voltada para a celebração da diversidade, além disso o Estado deve coibir com severidade crimes de ódio. A diferença não é um obstáculo; é sim a nossa maior riqueza como nação.` 
        },
        { 
            id: '17', 
            titulo: 'Caminhos para combater a intolerância religiosa no Brasil', 
            cat: 'Sociedade', 
            texto: `Na obra O Mercador de Veneza, de Shakespeare, o personagem Shylock é ofendido por ser judeu num contexto cristão. Embora tenha sido escrita há séculos, a peça ainda é atual. No Brasil, a Constituição de 1988 garante o direito à liberdade de crença, porém, a intolerância religiosa persiste na sociedade brasileira como uma ferida. As religiões afro são as mais atacadas.

Essa intolerância tem suas raízes historicamente ligadas à escravidão. As religiões dos negros, como o Candomblé e a Umbanda, foram marginalizadas e demonizadas no passado. Essa estrutura histórica faz com que elas sejam as alvos preferenciais. O ataque à crença alheia é um ataque à identidade de um povo.

A impunidade é a grande cúmplice desse tipo de crime. A indiferença social e a leniência do sistema penal transformam os casos de intolerância religiosa em "fato menor". Além disso, o descaso do Estado deixa as comunidades abandonadas. Cada indivíduo possui seu credo que não pode ser violado.

O Ministério Público deve criar delegacias especializadas nos crimes de ódio e a escola também deve ser um ambiente importante para fomentar o respeito. A educação quanto às diferentes religiões desde cedo é o melhor caminho para se educar o respeito. A liberdade de culto só estará garantida quando todo mundo puder praticar sua crença sem medo.` 
        }
    ];
    // ==========================================
    // 2. CURSOR CUSTOMIZADO E SCROLL SUAVE (LENIS)
    // ==========================================
    
    // Inicializa Lenis para Scroll Suave
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
    });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cursor
    const cursor = document.getElementById('cursor');
    const hoverElements = document.querySelectorAll('a, button, .card-redacao, .card-memoria, input');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // ==========================================
    // 3. FUNDO LÍQUIDO (CANVAS)
    // ==========================================
    const canvas = document.getElementById('liquid-bg');
    const ctx = canvas.getContext('2d');
    let width, height;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    const blobs = [
        { x: width * 0.2, y: height * 0.3, r: 400, color: 'rgba(255, 0, 204, 0.15)', vx: 0.5, vy: 0.3 },
        { x: width * 0.8, y: height * 0.7, r: 500, color: 'rgba(0, 229, 255, 0.15)', vx: -0.4, vy: -0.5 },
        { x: width * 0.5, y: height * 0.5, r: 300, color: 'rgba(100, 50, 255, 0.1)', vx: 0.2, vy: 0.6 }
    ];

    function animateBlobs() {
        ctx.clearRect(0, 0, width, height);
        blobs.forEach(b => {
            b.x += b.vx;
            b.y += b.vy;
            if (b.x < 0 || b.x > width) b.vx *= -1;
            if (b.y < 0 || b.y > height) b.vy *= -1;
            
            const gradient = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
            gradient.addColorStop(0, b.color);
            gradient.addColorStop(1, 'transparent');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(animateBlobs);
    }
    animateBlobs();

    // ==========================================
    // 4. ANIMAÇÕES DE ENTRADA (GSAP)
    // ==========================================
    gsap.registerPlugin(ScrollTrigger);

    // Hero animation
    gsap.from(".hero-title", { y: 100, opacity: 0, duration: 1.5, ease: "power4.out" });
    gsap.from(".hero-sub", { y: 30, opacity: 0, duration: 1, delay: 0.5, ease: "power3.out" });

    // Animações de Scroll
    document.querySelectorAll('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: { trigger: title, start: "top 85%" },
            y: 50, opacity: 0, duration: 1, ease: "power3.out"
        });
    });

    // ==========================================
    // 5. RENDERIZAR MEMÓRIAS E REDAÇÕES
    // ==========================================
    const gridMem = document.getElementById('grid-memorias');
    const gridRed = document.getElementById('grid-redacoes');

       // Render Memórias
    MEMORIAS.forEach(mem => {
        const card = document.createElement('article');
        card.className = 'card-memoria';
        
        // Veja que agora a div "memoria-img" está vazia, apenas puxando a imagem de fundo
        card.innerHTML = `
            <div class="memoria-img" style="background-image: url('assets/img/foto-${mem.id}.jpg');"></div>
            <div class="memoria-info">
                <span class="memoria-ano">${mem.ano}</span>
                <h3 class="memoria-titulo">${mem.titulo}</h3>
                <p class="memoria-texto">${mem.texto}</p>
            </div>
        `;
        gridMem.appendChild(card);
        
        // Animação do card
        gsap.from(card, {
            scrollTrigger: { trigger: card, start: "top 90%" },
            y: 50, opacity: 0, duration: 0.8, ease: "power3.out"
        });
    });

    // Render Redações
    const searchInput = document.getElementById('search');
    const searchCount = document.getElementById('search-count');

    function renderRedacoes(filtro = '') {
        gridRed.innerHTML = '';
        const filtradas = REDACOES.filter(r => r.titulo.toLowerCase().includes(filtro.toLowerCase()));
        
        searchCount.textContent = `${filtradas.length} DOCUMENTOS`;

        filtradas.forEach(red => {
            const card = document.createElement('article');
            card.className = 'card-redacao';
            card.onclick = () => abrirModal(red);
            card.innerHTML = `
                <div class="redacao-num">${red.id}</div>
                <h3 class="redacao-titulo">${red.titulo}</h3>
                <div class="redacao-meta">
                    <span>${red.cat}</span>
                    <span style="color: var(--accent-2);">Ler →</span>
                </div>
            `;
            gridRed.appendChild(card);
        });
    }
    renderRedacoes();
    searchInput.addEventListener('input', (e) => renderRedacoes(e.target.value));

    // ==========================================
    // 6. MODAL E ÁUDIO (TTS)
    // ==========================================
    const modal = document.getElementById('modal');
    const modalNum = document.getElementById('modal-num');
    const modalTitle = document.getElementById('modal-title');
    const modalTema = document.getElementById('modal-tema');
    const modalText = document.getElementById('modal-text');
    const btnClose = document.getElementById('btn-close');
    const btnAudio = document.getElementById('btn-audio');
    const audioViz = document.getElementById('audio-viz');
    
    const synth = window.speechSynthesis;
    let utterance = null;

    function abrirModal(redacao) {
        modalNum.textContent = redacao.id;
        modalTitle.textContent = redacao.titulo;
        modalTema.textContent = redacao.cat;
        modalText.textContent = redacao.texto;

        modal.classList.add('active');
        lenis.stop(); // Pausa o scroll do fundo

        // Configura Áudio
        if (synth) {
            synth.cancel();
            utterance = new SpeechSynthesisUtterance(redacao.texto);
            utterance.lang = 'pt-BR';
            utterance.rate = 1.1;

            utterance.onend = () => {
                btnAudio.classList.remove('playing');
                audioViz.classList.remove('active');
                btnAudio.innerHTML = '<span class="icon">▶</span> OUVIR TEXTO';
            };
        }
    }

    function fecharModal() {
        modal.classList.remove('active');
        lenis.start(); // Volta o scroll do fundo
        if (synth) {
            synth.cancel();
            btnAudio.classList.remove('playing');
            audioViz.classList.remove('active');
            btnAudio.innerHTML = '<span class="icon">▶</span> OUVIR TEXTO';
        }
    }

    btnClose.addEventListener('click', fecharModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) fecharModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('active')) fecharModal(); });

    btnAudio.addEventListener('click', () => {
        if (!synth) return alert('Navegador não suporta áudio.');
        
        if (synth.speaking) {
            synth.cancel();
            btnAudio.classList.remove('playing');
            audioViz.classList.remove('active');
            btnAudio.innerHTML = '<span class="icon">▶</span> OUVIR TEXTO';
        } else {
            synth.speak(utterance);
            btnAudio.classList.add('playing');
            audioViz.classList.add('active');
            btnAudio.innerHTML = '<span class="icon">⏹</span> PARAR ÁUDIO';
        }
    });

});