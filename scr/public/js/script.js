var historias = [
    {
        nome: "Ada Lovelace",
        imagem: "Ada_Lovelace.jpg",
        realizacoes: "Criou o primeiro algoritmo da história para ser processado por uma máquina (a Máquina Analítica de Babbage), tornando-se a primeira programadora do mundo."
    },
    {
        nome: "Tatiana Sampaio",
        imagem: "Tatiana_Sampaio.jpg",
        realizacoes: "Bióloga e pesquisadora brasileira que desenvolve estudos com a polilaminina, substância experimental investigada por seu potencial na regeneração de lesões da medula espinhal."
    },
    {
        nome: "Marie Curie",
        imagem: "Marie_Curie.jpg",
        realizacoes: "Descobriu os elementos Rádio e Polônio e revolucionou o estudo da radioatividade. Única pessoa a ganhar dois Prêmios Nobel em áreas científicas distintas (Física e Química).",
    },
    {
        nome: "Dorothy Vaughan",
        imagem: "Dorothy_Vaughan.jpg",
        realizacoes: "Matemática afro-americana pioneira na NASA, destacou-se pela liderança de equipes de mulheres negras e pela atuação na transição para a computação eletrônica"
    },
    {
        nome: "Djamila Ribeiro",
        imagem: "Djamila_Ribeiro.jpg",
        realizacoes: "Filósofa, escritora e ativista brasileira que promove o feminismo negro, o combate ao racismo e a democratização do conhecimento."
    },
    {
        nome: "Gabrielle Weber",
        imagem: "Gabrielle_Weber.jpg",
        realizacoes: "Física e professora da USP que atua em pesquisas de física teórica, divulgação científica e iniciativas de inclusão e diversidade na ciência.",
        tipo: ["Exploração", "Conhecimento", "Inclusão"]
    },
    {
        nome: "Sônia Guimarães",
        imagem: "Sonia_Guimarães.jpg",
        realizacoes: "Primeira mulher negra brasileira doutora em Física (pela Universidade de Manchester) e primeira professora mulher do ITA (Instituto Tecnológico de Aeronáutica), atuando em física aplicada e semicondutores."
    },
    {
        nome: "Jaqueline Góes de Jesus",
        imagem: "",
        realizacoes: "Biomédica que liderou a equipe responsável pelo sequenciamento do genoma do vírus SARS-CoV-2 (COVID-19) em apenas 48 horas após o primeiro caso no Brasil."
    },
    {
        nome: "Jane Goodall",
        imagem: "Jane_Goodall.jpg",
        realizacoes: "Revolucionou a primatologia e o comportamento animal ao demonstrar que chimpanzés usam ferramentas, têm personalidades e possuem laços sociais complexos."
    },
    {
        nome: "Thaisa Storchi Bergmann",
        imagem: "Thaisa_Storchi.jpg",
        realizacoes: "Astrofísica brasileira reconhecida mundialmente por suas pesquisas sobre buracos negros supermassivos no centro das galáxias."
    },
    {
        nome: "Marie Tharp",
        imagem: "Marie_Tharp.jpg",
        realizacoes: "Geóloga e cartógrafa oceânica que criou o primeiro mapa científico do assoalho oceânico do Atlântico, provando a teoria da tectônica de placas e da deriva continental."
    }
]

quiz_personalidade = {
    dj: 0,
    mcr: 0, 
    mtp: 0,
    sgu: 0,
    tts: 0,
    tht:0,
    glw: 0,
    drv:0,
    jgl: 0,
}

module.exports = {historias, quiz_personalidade}